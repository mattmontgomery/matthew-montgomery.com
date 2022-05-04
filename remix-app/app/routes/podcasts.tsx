import { useCatch, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import type {
  HeadersFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/server-runtime";
import type { Episode } from "podparse";
import React from "react";
import LinkList from "~/components/LinkList";

import { fetchThenSet } from "~/utils/ioredis.server";
import { getPodcastFeed } from "~/utils/podcast.server";
import { formatDate } from "~/utils/date";
import Page from "~/components/Page";
import { LeadImage } from "~/components/LeadImage";

import photo from "~/images/flowers.jpg";

type LoaderData = { vintageSciFiShorts: Episode[] };

export const loader: LoaderFunction = async () => {
  const feed = `https://anchor.fm/s/5a53fca0/podcast/rss`;
  const cacheKey = `feed:v2:${feed}`;
  try {
    const feedData = await fetchThenSet<LoaderData["vintageSciFiShorts"]>({
      cacheKey,
      defaultValue: [],
      expireTime: 60 * 60 * 6,
      fetchFn: async () => {
        const feedBody = await getPodcastFeed(feed);
        return feedBody.episodes;
      },
    });
    return json<LoaderData>(
      {
        vintageSciFiShorts: feedData,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": `public, max-age=${60 * 60 * 24}`,
        },
      }
    );
  } catch (e) {
    console.error(e);
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

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div>An unexpected error occurred: {error.message || String(error)}</div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      `Unexpected caught response with status: ${caught.status} (${caught.data})`
    );
  } else {
    throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sci-Fi Podcast | Matt Montgomery",
  viewport: "width=device-width,initial-scale=1",
});

export default function Newsletter(): React.ReactElement {
  const data = useLoaderData() as LoaderData;
  return (
    <Page
      renderLeadImage={() => (
        <LeadImage
          image={{ alt: "Out of focus flowers", url: photo }}
          title={
            <a
              href="https://anchor.fm/vintage-sci-fi-shorts"
              target="_blank"
              rel="noreferrer"
            >
              Vintage Sci-Fi Shorts
            </a>
          }
          subtitle={
            <>
              <div>
                Short science fiction stories from pulp and digest magazines of
                the '40s, '50s and '60s.
              </div>
              <div>
                <a
                  href="https://anchor.fm/vintage-sci-fi-shorts"
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
          titleClasses="text-slate-100"
          subtitleClasses="text-slate-100"
          backgroundFilter="bg-blue-700/75"
          imageFilter="saturate-50"
        />
      )}
    >
      <LinkList<Episode>
        data={data.vintageSciFiShorts}
        renderLabel={(episode) => (
          <>
            <div>{formatDate(episode.pubDate)}</div>
            <div className="text-xs md:text-right">
              {[
                episode.season ? `Season ${episode.season}` : "",
                episode.episode ? `Episode ${episode.episode}` : "",
              ]
                .filter(Boolean)
                .join(", ")}
            </div>
          </>
        )}
      />
    </Page>
  );
}
