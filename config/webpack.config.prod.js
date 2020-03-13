const {resolve} = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const getAirports = require('./airport-parser');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const commonConfig = require('./webpack.config.common');

const getRoutes = async () => {
  return getAirports().then((airports) => airports.map((airport) => `/?from=${airport.iata}&city=${airport.city}`));
};

const getPath = (iata, city) => `/${iata}/${city.replace(' ', '-')}.html`;

// Can't reuse getRoutes because the SPA and Sitemap plugins don't play well together
const getSitemapPaths = async () => {
  return getAirports().then((airports) => airports.map((airport) => getPath(airport.iata, airport.city)));
};

module.exports = async () =>
  merge(commonConfig, {
    mode: 'production',
    plugins: [
      new HtmlWebpackPartialsPlugin({
        path: './src/client/partials/analytics.html',
        location: 'head',
        priority: 'high'
      }),
      new HtmlWebpackPartialsPlugin({
        path: './src/client/partials/metomic.html',
        location: 'head',
        priority: 'high'
      }),
      new HtmlWebpackPartialsPlugin({
        path: './src/client/partials/mailerlite.html',
        location: 'head',
        priority: 'low'
      }),
      new UglifyJsPlugin({
        parallel: true,
        extractComments: true
      }),
      new HtmlWebpackPlugin({
        hash: true,
        inject: true,
        template: resolve(__dirname, '..', 'src', 'client', 'index.html'),
        favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.ico'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, '../build/client'),

        // Optional - The path your rendered app should be output to.
        // (Defaults to staticDir.)
        outputDir: path.join(__dirname, '../build/client'),

        // Optional - The location of index.html
        indexPath: path.join(__dirname, '../build/client', 'index.html'),

        // Required - Routes to render.
        routes: await getRoutes(),

        // Optional - Allows you to customize the HTML and output path before
        // writing the rendered contents to a file.
        // renderedRoute can be modified and it or an equivelant should be returned.
        // renderedRoute format:
        // {
        //   route: String, // Where the output file will end up (relative to outputDir)
        //   originalRoute: String, // The route that was passed into the renderer, before redirects.
        //   html: String, // The rendered HTML for this route.
        //   outputPath: String // The path the rendered HTML will be written to.
        // }
        postProcess(renderedRoute) {
          // Ignore any redirects.
          //renderedRoute.route = renderedRoute.originalRoute;
          // Basic whitespace removal. (Don't use this in production.)
          //renderedRoute.html = renderedRoute.html.split(/>[\s]+</gim).join('><');
          // Remove /index.html from the output path if the dir name ends with a .html file extension.
          // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
          /*if (renderedRoute.route.endsWith('.html')) {
            renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route);
          }*/

          const params = new URLSearchParams(renderedRoute.originalRoute.split('?')[1]);
          const routePath = getPath(params.get('from'), params.get('city'));
          renderedRoute.outputPath = path.join(__dirname, `../build/client${routePath}`);

          return renderedRoute;
        },

        // Optional - Uses html-minifier (https://github.com/kangax/html-minifier)
        // To minify the resulting HTML.
        // Option reference: https://github.com/kangax/html-minifier#options-quick-reference
        /*minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },*/

        // Server configuration options.
        server: {
          // Normally a free port is autodetected, but feel free to set this if needed.
          port: 8001
        },

        // The actual renderer to use. (Feel free to write your own)
        // Available renderers: https://github.com/Tribex/prerenderer/tree/master/renderers
        renderer: new Renderer({
          // Optional - The name of the property to add to the window object with the contents of `inject`.
          //injectProperty: '__PRERENDER_INJECTED',
          // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
          /*inject: {
          foo: 'bar'
        },*/

          // Optional - defaults to 0, no limit.
          // Routes are rendered asynchronously.
          // Use this to limit the number of routes rendered in parallel.
          maxConcurrentRoutes: 10

          // Optional - Wait to render until the specified event is dispatched on the document.
          // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`
          //renderAfterDocumentEvent: 'custom-render-trigger',

          // Optional - Wait to render until the specified element is detected using `document.querySelector`
          //renderAfterElementExists: 'my-app-element',

          // Optional - Wait to render until a certain amount of time has passed.
          // NOT RECOMMENDED
          //renderAfterTime: 5000, // Wait 5 seconds.

          // Other puppeteer options.
          // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
          //headless: false // Display the browser window when rendering. Useful for debugging.
        })
      }),
      new SitemapPlugin('https://flightpop.com', await getSitemapPaths())
    ]
  });
