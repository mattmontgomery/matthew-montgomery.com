/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle: ["feed-reader"],
  serverBuildTarget: "vercel",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build/",
  appDirectory: "app",
};
