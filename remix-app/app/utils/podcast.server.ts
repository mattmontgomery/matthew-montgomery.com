import parse from "podparse";
import type { Podcast } from "podparse";

export async function getPodcastFeed(feed: string): Promise<Podcast> {
  const data = await fetch(feed);
  return parse(await data.text());
}
