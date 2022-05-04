import type { LoaderFunction } from "@remix-run/server-runtime";
import { DiskCache, imageLoader, MemoryCache } from "remix-image/server";
import { sharpTransformer } from "~/utils/sharp-transformer";

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(
    {
      selfUrl: "http://localhost:3000",
      cache:
        process.env.NODE_ENV === "development"
          ? new DiskCache()
          : new MemoryCache(),
      transformer: sharpTransformer,
    },
    request
  );
};
