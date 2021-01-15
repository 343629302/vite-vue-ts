import vue from "@vitejs/plugin-vue";
import path from "path";

module.exports = {
  port: 3000,
  // 是否使用ssr渲染
  // ssr: false,
  // 引入第三方配置
  // optimizeDeps: {},
  //配置别名
  alias: {
    // 键必须以斜线开始和结束
    "/@": path.resolve(__dirname, "./src"),
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  //插件
  plugins: [vue()],
  //配置代理
  proxy: {},
};
