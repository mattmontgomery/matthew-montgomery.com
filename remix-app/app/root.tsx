import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";

import { Link, useCatch } from "@remix-run/react";

import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Matt Montgomery",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({});
};

function NavButton({ link, title }: { link: string; title: string }) {
  return (
    <Link
      to={link}
      className="md:text-md mx-2 rounded bg-gray-200 p-2 text-xs text-gray-600 transition-colors duration-300 hover:text-gray-900 lg:px-4"
    >
      {title}
    </Link>
  );
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50">
        <div className="relative max-h-screen min-h-screen grid-rows-layout gap-4">
          <nav className="max-h-min min-w-[100vw] bg-white py-2 py-4 shadow-md">
            <div className="mx-auto px-4">
              <div className="grid grid-cols-1 items-center justify-between md:grid-cols-8">
                <Link
                  to="/"
                  className="text-xl font-bold text-indigo-600 md:col-span-2"
                >
                  Matt Montgomery
                </Link>
                <div className="mt-3 ml-auto md:col-span-6 md:mt-0">
                  <NavButton title="Soccer" link="/soccer" />
                  <NavButton title="Board Games" link="/newsletter" />
                  <NavButton title="Sci-Fi Podcast" link="/podcasts" />
                </div>
              </div>
            </div>
          </nav>

          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

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
