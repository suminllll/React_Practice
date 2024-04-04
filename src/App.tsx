import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "green",
        fontSize: 30,
      }}
    >
      <Helmet>
        <title>sumin practice</title>
        <meta name="description" content="프론트엔드 과제 사이트" />
        <meta name="keywords" content="개발자, 과제, 부트캠프, 프론트엔드" />

        <meta name="twitter:title" content="Twitter Title" />
        <meta name="twitter:description" content="Twitter Description" />
        <meta name="twitter:image" content="/public/image/IMG_5916.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1>프론트엔드 개발자 과제 사이트</h1>
      <h2>프론트엔드 개발자 sumin 과제 입니다!</h2>
    </div>
  );
}

export default App;
