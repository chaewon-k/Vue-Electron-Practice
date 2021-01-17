module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      nodeModulesPath: ['../../node_modules', './node_modules'],
      builderOptions: {
        appId: 'com.chaewon.ve',
        nsis: {
          shortcutName: 'xxx nono'
        },
        win: {
          target: [
            {
              target:"nsis",
              arch: [
                'x64',
                'ia32'
              ]
            }
          ]
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
