import type { MetaFunction } from "@remix-run/server-runtime";
import Page from "~/components/Page";
import { LeadImage } from "~/components/LeadImage";
import photo from "~/images/rio-tinto.jpg";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Soccer | Matt Montgomery",
  viewport: "width=device-width,initial-scale=1",
});

export default function Soccer() {
  return (
    <Page
      renderLeadImage={() => (
        <LeadImage
          image={{ alt: "Rio Tinto Stadium in daytime", url: photo }}
          title={
            <a
              href="https://wasatch.soccer"
              target="_blank"
              rel="noreferrer"
            >
              Wasatch Soccer Sentinel
            </a>
          }
          subtitle={
            <>
              <div>Managing Editor</div>
              <div>
                <a
                  href="https://wasatch.soccer"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 rounded bg-emerald-500 px-6 py-3 text-lg font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                  type="button"
                >
                  Read
                </a>
              </div>
            </>
          }
          titleClasses="text-slate-100"
          subtitleClasses="text-slate-100"
          backgroundFilter="bg-rose-700/75"
          imageFilter="saturate-50"
        />
      )}
    ></Page>
  );
}
