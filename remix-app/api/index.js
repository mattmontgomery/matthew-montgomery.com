var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var import_node = require("@remix-run/node");
var import_react3 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-J4OWHPUG.css";

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Matt Montgomery",
  viewport: "width=device-width,initial-scale=1"
});
var loader = async ({ request }) => {
  return (0, import_node.json)({});
};
function NavButton({ link, title }) {
  return /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: link,
    className: "md:text-md mx-2 rounded bg-gray-200 p-2 text-xs text-gray-600 transition-colors duration-300 hover:text-gray-900 lg:px-4"
  }, title);
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-slate-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative max-h-screen min-h-screen grid-rows-layout gap-4"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "max-h-min min-w-[100vw] bg-white py-2 py-4 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 items-center justify-between md:grid-cols-8"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/",
    className: "text-xl font-bold text-indigo-600 md:col-span-2"
  }, "Matt Montgomery"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 ml-auto md:col-span-6 md:mt-0"
  }, /* @__PURE__ */ React.createElement(NavButton, {
    title: "Soccer",
    link: "/soccer"
  }), /* @__PURE__ */ React.createElement(NavButton, {
    title: "Board Games",
    link: "/newsletter"
  }), /* @__PURE__ */ React.createElement(NavButton, {
    title: "Sci-Fi Podcast",
    link: "/podcasts"
  }))))), /* @__PURE__ */ React.createElement(import_react3.Outlet, null)), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, "An unexpected error occurred: ", error.message || String(error));
}
function CatchBoundary() {
  const caught = (0, import_react2.useCatch)();
  if (true) {
    throw new Error(`Unexpected caught response with status: ${caught.status} (${caught.data})`);
  } else {
    throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
var loader2 = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    const url = new URL("/", `http://${host}`);
    await Promise.all([
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]);
    return new Response("OK");
  } catch (error) {
    console.log("healthcheck \u274C", { error });
    return new Response("ERROR", { status: 500 });
  }
};

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/newsletter.tsx
var newsletter_exports = {};
__export(newsletter_exports, {
  default: () => Newsletter,
  headers: () => headers,
  loader: () => loader3,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react");
var import_server_runtime = require("@remix-run/server-runtime");
var import_feed_reader = require("feed-reader");
var import_react7 = __toESM(require("react"));

// app/components/LinkList.tsx
var import_react4 = __toESM(require("react"));
function LinkList({
  data,
  getLink = (entry2) => String(entry2.link),
  getTitle = (entry2) => String(entry2.title),
  renderExtras = (entry2) => /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null),
  renderLabel
}) {
  return data && data.length ? /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "grid grid-cols-1 md:gap-4"
  }, data.map((entry2, idx) => /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "grid-row mb-4 grid gap-x-4 md:mb-0 md:grid-cols-[200px_1fr] md:gap-y-4",
    key: idx
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "rounded text-sm font-medium text-amber-700 md:bg-amber-200 md:p-2 md:text-right"
  }, renderLabel(entry2)), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "items-center md:self-center"
  }, renderExtras(entry2), /* @__PURE__ */ import_react4.default.createElement("a", {
    className: "font-medium text-emerald-600 transition-colors hover:text-amber-700 md:self-center",
    href: getLink(entry2),
    target: "_blank",
    rel: "noreferrer"
  }, getTitle(entry2)))))) : /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null);
}

// app/utils/ioredis.server.ts
var import_ioredis = __toESM(require("ioredis"));
var client = new import_ioredis.default(process.env.REDIS_URL || "redis://localhost");
async function fetchThenSet({
  cacheKey,
  expireTime = 60 * 60 * 24,
  defaultValue,
  fetchFn,
  parseFn = JSON.parse,
  stringifyFn = JSON.stringify
}) {
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

// app/utils/date.ts
var import_date_fns = require("date-fns");
function formatDate(date) {
  const parsed = (0, import_date_fns.parseISO)(date);
  const dayDiff = (0, import_date_fns.differenceInDays)(new Date(), parsed) >= 365;
  const formattedMonth = (0, import_date_fns.format)(parsed, "MMMM");
  return (0, import_date_fns.format)(parsed, `${formattedMonth && formattedMonth.length > 5 ? "MMM. " : "MMMM"} dd${dayDiff ? ", yyyy" : ""}`);
}

// app/components/Page.tsx
var import_react5 = __toESM(require("react"));
function Page({
  renderLeadImage,
  children
}) {
  return /* @__PURE__ */ import_react5.default.createElement("main", {
    className: "mx-auto grid gap-4 px-4 sm:grid sm:items-center md:container md:px-0"
  }, renderLeadImage && renderLeadImage(), children);
}

// app/components/LeadImage.tsx
var import_remix_image = __toESM(require("remix-image"));
function LeadImage({
  image,
  title,
  titleClasses = "text-yellow-500",
  subtitleClasses = "text-white",
  subtitle,
  imageFilter = "bg-[color:rgba(254,204,27,0.5)]",
  backgroundFilter
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:pb-8 sm:pt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement(import_remix_image.default, {
    loaderUrl: "/api/image",
    className: `h-full w-full object-cover ${imageFilter}`,
    src: image.url,
    alt: image.alt,
    options: {
      blurRadius: 12
    },
    responsive: [
      {
        size: {
          width: 1200,
          height: 1200
        },
        maxWidth: 1600
      }
    ]
  }), /* @__PURE__ */ React.createElement("div", {
    className: `absolute inset-0  mix-blend-multiply ${backgroundFilter}`
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32"
  }, title && /* @__PURE__ */ React.createElement("h1", {
    className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-8xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: `block uppercase ${titleClasses} drop-shadow-md`
  }, title)), subtitle && /* @__PURE__ */ React.createElement("p", {
    className: `mx-auto mt-6 max-w-lg text-center text-2xl sm:max-w-3xl ${subtitleClasses} block font-light uppercase tracking-wide drop-shadow-md`
  }, subtitle)))));
}

// app/images/kingdom-builder.jpg
var kingdom_builder_default = "/build/_assets/kingdom-builder-CAB53GPB.jpg";

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/newsletter.tsx
var loader3 = async () => {
  const feed = `https://donteatthemeeples.substack.com/feed`;
  const cacheKey = `feed:v2:${feed}`;
  try {
    const feedData = await fetchThenSet({
      cacheKey,
      defaultValue: [],
      expireTime: 60 * 60 * 6,
      fetchFn: async () => {
        const feedBody = await (0, import_feed_reader.read)(feed);
        const entries = feedBody == null ? void 0 : feedBody.entries;
        return entries;
      }
    });
    return (0, import_server_runtime.json)({
      dontEatTheMeeples: feedData
    }, {
      status: 200,
      headers: {
        "Cache-Control": `public, max-age=${60 * 60 * 24}`
      }
    });
  } catch (e) {
    return (0, import_server_runtime.json)({ errors: [{ message: String(e) }] }, { status: 500 });
  }
};
var headers = ({ loaderHeaders, parentHeaders }) => {
  const cacheControlHeaders = loaderHeaders.get("cache-control");
  if (typeof cacheControlHeaders === "string") {
    return { "cache-control": cacheControlHeaders };
  } else {
    return loaderHeaders;
  }
};
var meta2 = () => ({
  charset: "utf-8",
  title: "Newsletters | Matt Montgomery",
  viewport: "width=device-width,initial-scale=1"
});
function Newsletter() {
  const data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ import_react7.default.createElement(Page, {
    renderLeadImage: () => /* @__PURE__ */ import_react7.default.createElement(LeadImage, {
      image: { alt: "Rio Tinto Stadium in daytime", url: kingdom_builder_default },
      title: /* @__PURE__ */ import_react7.default.createElement("a", {
        href: "https://www.rslsoapbox.com",
        target: "_blank",
        rel: "noreferrer"
      }, "Don't Eat the Meeples"),
      subtitle: /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("div", null, "A newsletter about modern board and card games"), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("a", {
        href: "https://donteatthemeeples.substack.com",
        target: "_blank",
        rel: "noreferrer",
        className: "mt-4 rounded bg-emerald-500 px-6 py-3 text-lg font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600",
        type: "button"
      }, "Subscribe"))),
      titleClasses: "text-amber-500",
      subtitleClasses: "text-slate-100",
      backgroundFilter: "bg-slate-700/75",
      imageFilter: "saturate-50"
    })
  }, /* @__PURE__ */ import_react7.default.createElement(LinkList, {
    data: data.dontEatTheMeeples,
    renderLabel: (entry2) => formatDate(entry2.published)
  }));
}

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/api/image.tsx
var image_exports = {};
__export(image_exports, {
  loader: () => loader4
});
var import_server2 = require("remix-image/server");

// app/utils/sharp-transformer.ts
var import_remix_image2 = require("remix-image");
var import_sharp = __toESM(require("sharp"));
var supportedInputs = /* @__PURE__ */ new Set([
  import_remix_image2.MimeType.JPEG,
  import_remix_image2.MimeType.PNG,
  import_remix_image2.MimeType.WEBP,
  import_remix_image2.MimeType.TIFF
]);
var supportedOutputs = /* @__PURE__ */ new Set([import_remix_image2.MimeType.JPEG, import_remix_image2.MimeType.PNG, import_remix_image2.MimeType.WEBP]);
var sharpTransformer = {
  name: "sharpTransformer",
  supportedInputs,
  supportedOutputs,
  transform: async ({ data }, {
    contentType: outputContentType,
    width,
    height,
    fit,
    position,
    background,
    quality,
    compressionLevel,
    blurRadius
  }) => {
    const image = (0, import_sharp.default)(data);
    image.resize(width, height, __spreadValues({
      fit,
      position
    }, background && {
      background: {
        r: background[0],
        g: background[1],
        b: background[2],
        alpha: background[3]
      }
    })).blur(blurRadius || false).jpeg({
      quality,
      progressive: true,
      force: outputContentType === import_remix_image2.MimeType.JPEG
    }).png({
      progressive: true,
      compressionLevel,
      force: outputContentType === import_remix_image2.MimeType.PNG
    }).webp({
      quality,
      force: outputContentType === import_remix_image2.MimeType.WEBP
    }).tiff({
      quality,
      force: false
    });
    return image.toBuffer();
  }
};

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/api/image.tsx
var loader4 = ({ request }) => {
  return (0, import_server2.imageLoader)({
    selfUrl: "http://localhost:3000",
    cache: new import_server2.DiskCache(),
    transformer: sharpTransformer
  }, request);
};

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/podcasts.tsx
var podcasts_exports = {};
__export(podcasts_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Newsletter2,
  headers: () => headers2,
  loader: () => loader5,
  meta: () => meta3
});
var import_react8 = require("@remix-run/react");
var import_server_runtime2 = require("@remix-run/server-runtime");
var import_react9 = __toESM(require("react"));

// app/utils/podcast.server.ts
var import_podparse = __toESM(require("podparse"));
async function getPodcastFeed(feed) {
  const data = await fetch(feed);
  return (0, import_podparse.default)(await data.text());
}

// app/images/flowers.jpg
var flowers_default = "/build/_assets/flowers-RWKE6JTP.jpg";

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/podcasts.tsx
var loader5 = async () => {
  const feed = `https://anchor.fm/s/5a53fca0/podcast/rss`;
  const cacheKey = `feed:v2:${feed}`;
  try {
    const feedData = await fetchThenSet({
      cacheKey,
      defaultValue: [],
      expireTime: 60 * 60 * 6,
      fetchFn: async () => {
        const feedBody = await getPodcastFeed(feed);
        return feedBody.episodes;
      }
    });
    return (0, import_server_runtime2.json)({
      vintageSciFiShorts: feedData
    }, {
      status: 200,
      headers: {
        "Cache-Control": `public, max-age=${60 * 60 * 24}`
      }
    });
  } catch (e) {
    console.error(e);
    return (0, import_server_runtime2.json)({ errors: [{ message: String(e) }] }, { status: 500 });
  }
};
var headers2 = ({ loaderHeaders, parentHeaders }) => {
  const cacheControlHeaders = loaderHeaders.get("cache-control");
  if (typeof cacheControlHeaders === "string") {
    return { "cache-control": cacheControlHeaders };
  } else {
    return loaderHeaders;
  }
};
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ import_react9.default.createElement("div", null, "An unexpected error occurred: ", error.message || String(error));
}
function CatchBoundary2() {
  const caught = (0, import_react8.useCatch)();
  if (true) {
    throw new Error(`Unexpected caught response with status: ${caught.status} (${caught.data})`);
  } else {
    throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}
var meta3 = () => ({
  charset: "utf-8",
  title: "Sci-Fi Podcast | Matt Montgomery",
  viewport: "width=device-width,initial-scale=1"
});
function Newsletter2() {
  const data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ import_react9.default.createElement(Page, {
    renderLeadImage: () => /* @__PURE__ */ import_react9.default.createElement(LeadImage, {
      image: { alt: "Out of focus flowers", url: flowers_default },
      title: /* @__PURE__ */ import_react9.default.createElement("a", {
        href: "https://anchor.fm/vintage-sci-fi-shorts",
        target: "_blank",
        rel: "noreferrer"
      }, "Vintage Sci-Fi Shorts"),
      subtitle: /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", null, "Short science fiction stories from pulp and digest magazines of the '40s, '50s and '60s."), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("a", {
        href: "https://anchor.fm/vintage-sci-fi-shorts",
        target: "_blank",
        rel: "noreferrer",
        className: "mt-4 rounded bg-emerald-500 px-6 py-3 text-lg font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600",
        type: "button"
      }, "Subscribe"))),
      titleClasses: "text-slate-100",
      subtitleClasses: "text-slate-100",
      backgroundFilter: "bg-blue-700/75",
      imageFilter: "saturate-50"
    })
  }, /* @__PURE__ */ import_react9.default.createElement(LinkList, {
    data: data.vintageSciFiShorts,
    renderLabel: (episode) => /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", null, formatDate(episode.pubDate)), /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "text-xs md:text-right"
    }, [
      episode.season ? `Season ${episode.season}` : "",
      episode.episode ? `Episode ${episode.episode}` : ""
    ].filter(Boolean).join(", ")))
  }));
}

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/soccer.tsx
var soccer_exports = {};
__export(soccer_exports, {
  default: () => Soccer,
  meta: () => meta4
});

// app/images/rio-tinto.jpg
var rio_tinto_default = "/build/_assets/rio-tinto-4IHJL4ZB.jpg";

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/soccer.tsx
var meta4 = () => ({
  charset: "utf-8",
  title: "Soccer | Matt Montgomery",
  viewport: "width=device-width,initial-scale=1"
});
function Soccer() {
  return /* @__PURE__ */ React.createElement(Page, {
    renderLeadImage: () => /* @__PURE__ */ React.createElement(LeadImage, {
      image: { alt: "Rio Tinto Stadium in daytime", url: rio_tinto_default },
      title: /* @__PURE__ */ React.createElement("a", {
        href: "https://www.rslsoapbox.com",
        target: "_blank",
        rel: "noreferrer"
      }, "RSL Soapbox"),
      subtitle: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "Managing Editor"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
        href: "https://www.rslsoapbox.com",
        target: "_blank",
        rel: "noreferrer",
        className: "mt-4 rounded bg-emerald-500 px-6 py-3 text-lg font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600",
        type: "button"
      }, "Read"))),
      titleClasses: "text-slate-100",
      subtitleClasses: "text-slate-100",
      backgroundFilter: "bg-rose-700/75",
      imageFilter: "saturate-50"
    })
  });
}

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/images/photo.jpg
var photo_default = "/build/_assets/photo-5EUDBD6B.jpg";

// route:/Users/mmontgomery/dev/personal/matthew-montgomery.com/remix-app/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Page, {
    renderLeadImage: () => /* @__PURE__ */ React.createElement(LeadImage, {
      image: { alt: "Cactus in the Arizona desert", url: photo_default },
      title: "Matt Montgomery",
      subtitle: "Software Engineer | Writer | Photographer",
      backgroundFilter: "bg-slate-700/75"
    })
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "5afeac3c", "entry": { "module": "/build/entry.client-WPGTW2TH.js", "imports": ["/build/_shared/chunk-KO3VKK4A.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-KC5SVSCH.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/api/image": { "id": "routes/api/image", "parentId": "root", "path": "api/image", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/image-HBM4IKHE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/healthcheck": { "id": "routes/healthcheck", "parentId": "root", "path": "healthcheck", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/healthcheck-LBG435VQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QALUZQ5B.js", "imports": ["/build/_shared/chunk-H6BHAERW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newsletter": { "id": "routes/newsletter", "parentId": "root", "path": "newsletter", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/newsletter-2YAIMCIV.js", "imports": ["/build/_shared/chunk-EPCBYKZH.js", "/build/_shared/chunk-H6BHAERW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/podcasts": { "id": "routes/podcasts", "parentId": "root", "path": "podcasts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/podcasts-YDWMSWI5.js", "imports": ["/build/_shared/chunk-EPCBYKZH.js", "/build/_shared/chunk-H6BHAERW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/soccer": { "id": "routes/soccer", "parentId": "root", "path": "soccer", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/soccer-ZY264FNB.js", "imports": ["/build/_shared/chunk-H6BHAERW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5AFEAC3C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/newsletter": {
    id: "routes/newsletter",
    parentId: "root",
    path: "newsletter",
    index: void 0,
    caseSensitive: void 0,
    module: newsletter_exports
  },
  "routes/api/image": {
    id: "routes/api/image",
    parentId: "root",
    path: "api/image",
    index: void 0,
    caseSensitive: void 0,
    module: image_exports
  },
  "routes/podcasts": {
    id: "routes/podcasts",
    parentId: "root",
    path: "podcasts",
    index: void 0,
    caseSensitive: void 0,
    module: podcasts_exports
  },
  "routes/soccer": {
    id: "routes/soccer",
    parentId: "root",
    path: "soccer",
    index: void 0,
    caseSensitive: void 0,
    module: soccer_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
