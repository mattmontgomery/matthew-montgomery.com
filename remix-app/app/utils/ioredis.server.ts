import Redis from "ioredis";

const client = new Redis(process.env.REDIS_URL || "redis://localhost");

export async function fetchThenSet<T>({
  cacheKey,
  expireTime = 60 * 60 * 24,
  defaultValue,
  fetchFn,
  parseFn = JSON.parse,
  stringifyFn = JSON.stringify,
}: {
  cacheKey: string;
  defaultValue: T;
  expireTime: number;
  fetchFn: () => Promise<T>;
  parseFn?: (data: string) => T;
  stringifyFn?: (data: T) => string;
}): Promise<T> {
  if (await client.exists(cacheKey)) {
    const data = await client.get(cacheKey);
    if (data) {
      return parseFn(data);
    }
  }
  try {
    const data = await fetchFn();
    await client.set(cacheKey, stringifyFn(data));
    await client.expire(cacheKey, expireTime);

    return data;
  } catch (e) {
    throw e;
  }
}
