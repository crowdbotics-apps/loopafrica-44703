/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path")
const extraNodeModules = {
  "@modules": path.resolve(__dirname, "modules"),
  "@options": path.resolve(__dirname, "options"),
  "@src": path.resolve(__dirname, "src")
}
const watchFolders = [
  path.resolve(__dirname, "modules"),
  path.resolve(__dirname, "options"),
  path.resolve(__dirname, "src")
]
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    sourceExts: ["js", "jsx", "ts", "tsx", "json"],
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from extraNodeModules to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), "node_modules", name)
    })
  },
  watchFolders,
  resetCache: true
}
