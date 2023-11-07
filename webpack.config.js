const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js/, // Applique ESLint aux fichiers JavaScript
        enforce: "pre", // Exécute ESLint avant les loaders principaux
        exclude: /node_modules/,
        use: ["eslint-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "output.css",
    }),
    new ESLintPlugin(),
    new FaviconsWebpackPlugin({
      logo: "./public/favicon.png",
      favicons: {
        appName: "Calculatrice",
        appShortName: "Calculatrice",
        appDescription: "Calculatrice tailwind / TypeScript",
        developerName: "Escanor",
        developerURL: null,
        background: "#ffffff",
        theme_color: "#ffffff",
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    static: path.resolve(__dirname, "./dist"),
    port: 4000,
    hot: true,
    // headers: {
    //   "Content-Type": "application/javascript",
    // },
  },
};
