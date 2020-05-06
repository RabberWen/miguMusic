const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
    app.use("/migu", createProxyMiddleware({
        target: "http://m.music.migu.cn/migu",
        changeOrigin: true,
        pathRewrite: {
            "^/migu": ""
        }
    }))
    app.use("/api", createProxyMiddleware({
        target: "http://127.0.0.1:1907",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}