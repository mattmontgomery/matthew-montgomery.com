import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import type {
  HeadersFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/server-runtime";
import { read } from "feed-reader";
import React from "react";
import LinkList from "~/components/LinkList";

import { fetchThenSet } from "~/utils/ioredis.server";
import { formatDate } from "~/utils/date";
import Page from "~/components/Page";
import { LeadImage } from "~/components/LeadImage";

import photo from "~/images/kingdom-builder.jpg";

type Entry = { link: string; title: string; published: string };

type LoaderData = { dontEatTheMeeples: Entry[] };

export const loader: LoaderFunction = async () => {
  const feed = `https://donteatthemeeples.substack.com/feed`;
  const cacheKey = `feed:v2:${feed}`;
  try {
    const feedData = await fetchThenSet<Entry[]>({
      cacheKey,
      defaultValue: [],
      expireTime: 60 * 60 * 6,
      fetchFn: async () => {
        const feedBody = await read(feed);
        const entries = feedBody?.entries;
        return entries;
      },
    });
    return json<LoaderData>(
      {
        dontEatTheMeeples: feedData,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": `public, max-age=${60 * 60 * 24}`,
        },
      }
    );
  } catch (e) {
    return json({ errors: [{ message: String(e) }] }, { status: 500 });
  }
};

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
  const cacheControlHeaders = loaderHeaders.get("cache-control");
  if (typeof cacheControlHeaders === "string") {
    return { "cache-control": cacheControlHeaders };
  } else {
    return loaderHeaders;
  }
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Newsletters | Matt Montgomery",
  viewport: "width=device-width,initial-scale=1",
});

export default function Newsletter(): React.ReactElement {
  const data = useLoaderData() as LoaderData;
  return (
    <Page
      renderLeadImage={() => (
        <LeadImage
          image={{ alt: "Rio Tinto Stadium in daytime", url: photo }}
          title={
            <a
              href="https://www.rslsoapbox.com"
              target="_blank"
              rel="noreferrer"
            >
              Don't Eat the Meeples
            </a>
          }
          subtitle={
            <>
              <div>A newsletter about modern board and card games</div>
              <div>
                <a
                  href="https://donteatthemeeples.substack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 rounded bg-emerald-500 px-6 py-3 text-lg font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                  type="button"
                >
                  Subscribe
                </a>
              </div>
            </>
          }
          titleClasses="text-amber-500"
          subtitleClasses="text-slate-100"
          backgroundFilter="bg-slate-700/75"
          imageFilter="saturate-50"
        />
      )}
    >
      <LinkList<Entry>
        data={data.dontEatTheMeeples}
        renderLabel={(entry) => formatDate(entry.published)}
      />
    </Page>
  );
}
