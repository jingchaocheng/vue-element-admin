module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: "element-ui", // 指定按需加载 libray name
        styleLibraryName: "theme-chalk" // 指定样式
      }
    ]
  ]
}
