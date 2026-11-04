# NB工具 · 付款申请单整理

从 [gylsjqx](https://github.com/sunlizhu521-alt/gylsjqx) 的 `faff33f525065e9d104e598cdf72eedca5e46f32` 版本复制付款申请模块，独立运行；核心金额计算、校验、排版和导出逻辑保持一致。

## 使用

1. 上传付款明细 Excel（支持 `.xlsx` / `.xls`）。可选上传自定义 Word 模板和供应商名录。
2. 核对付款主体、计划付款日期、金额及银行信息，按提示处理冲突。
3. 生成预览，下载各主体的 Word / PDF，或一键下载合并 Word。

每个付款主体一页 A4 横向；计划付款日期默认北京时间本周五，可修改。总金额由本次申请付款金额求和，原表的付款总金额不参与计算。PDF 按 85% 缩放排版，打印选择“实际大小 / 100%”。Word 可编辑，实际分页受 Word / WPS 的字体影响。

所有文件在浏览器本地处理，不上传服务器。付款明细、模板和供应商名录可自动缓存；清除按钮仅清除本工具上传文件缓存。新站使用独立数据库 `nb-gongju-payment-files`，与 gylsjqx 的缓存互不影响；手填字段、勾选确认和生成结果不持久保存。

## 本地运行与验证

无需构建或安装运行依赖，第三方库及模板随仓库提供。请通过 HTTP 服务打开，避免直接双击 HTML 导致模板读取失败：

```sh
python3 -m http.server 8899
```

访问 `http://127.0.0.1:8899/`。

```sh
npm test
npm run check
```

另一个终端中可运行完整浏览器测试（需要可用的 Playwright 和 Chromium）：

```sh
QA_URL=http://127.0.0.1:8899/ npm run test:browser
```

支持用 `PLAYWRIGHT_MODULE` 指定现有 Playwright 模块路径、`CHROME_PATH` 指定浏览器程序、`QA_OUTPUT` 指定测试输出目录。测试使用合成数据，覆盖输入异常、银行信息匹配、Word / PDF 导出、缓存恢复和清除、手机布局。

## GitHub Pages

仓库 Pages 使用 GitHub Actions 部署。推送 `main` 后先运行单元测试和语法检查，通过后部署静态文件。

第三方文件保留源库内的版权声明，PDF-lib 许可证见 `vendor/pdf-lib.LICENSE.md`。
