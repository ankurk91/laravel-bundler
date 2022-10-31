import path from "path";

// https://github.com/vuejs/vue-loader/issues/146
// https://github.com/vuejs/vue-cli/issues/2978
// https://forum.vuejs.org/t/56370
export default {
  output: {
    devtoolModuleFilenameTemplate: info => {
      let resPath = path.normalize(info.resourcePath)
      let isVue = resPath.match(/\.vue$/)
      let isGenerated = info.allLoaders

      let generated = `webpack-generated:///${resPath}?${info.hash}`
      let vueSource = `vue-source:///${resPath}`

      return isVue && isGenerated ? generated : vueSource
    },
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]'
  }
}
