import type { LoaderFunction } from "@remix-run/server-runtime";
import { DiskCache, imageLoader, MemoryCache } from "remix-image/server";
import { sharpTransformer } from "~/utils/sharp-transformer";

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(
    {
      selfUrl: "http://localhost:3000",
      // transformer: sharpTransformer,
    },
    request
  );
};
