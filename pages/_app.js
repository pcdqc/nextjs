import '../styles/global.css';

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function App({Component, pageProps}) {
  return <Component {...pageProps} />;
}
