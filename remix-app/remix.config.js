// /**
//  * @type {import('@remix-run/dev').AppConfig}
//  */
// module.exports = {
//   cacheDirectory: "./node_modules/.cache/remix",
//   ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
//   serverDependenciesToBundle: ["feed-reader"],
//   serverBuildTarget: "vercel",
//   publicPath: "/build/",
//   serverBuildDirectory: "api/_build/",
//   appDirectory: "app",
// };
/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build",
};
