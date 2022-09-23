module.exports = {
  devServer: {
    proxy: {
      '/socket' : {
        target : 'http://210.122.45.47:3000',
        changeOrigin: true,
      }
    }
    // proxy: this.$store.state.serverApi
    //   {
    //    '/api':{
    //      target: 'http://210.122.45.62:8080',
    //      changeOrigin: true,
    //    },
    //    '/esms':{
    //      //target:'http://210.122.45.62:8081/esms/app/batch/baseUnitSensor.do',
    //      target:'http://210.122.45.62:8081',
    //      ws: true,
    //      changeOrigin: true,
    //      pathRewrite: {
    //        '^/esms': '' 
    //    },
    //    }
    // }
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
