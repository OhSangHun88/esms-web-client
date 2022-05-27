module.exports = {
  devServer: {
    proxy: {
      '/api':{
        target: 'http://210.122.45.62:8080',
        changeOrigin: true,
      },
      '/app':{
        //target:'http://210.122.45.62:8081/esms/app/batch/baseUnitSensor.do',
        target:'http://210.122.45.62:8081',
        changeOrigin: true,
      }
  }
  },
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ]
}
