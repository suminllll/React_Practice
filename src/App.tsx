import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>sumin practice</title>
        <meta name="description" content="프론트엔드 과제 사이트" />
        <meta name="keywords" content="개발자, 과제, 부트캠프, 프론트엔드" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="sumin practice" />
        <meta property="og:site_name" content="sumin practice" />
        <meta property="og:description" content="sumin practice" />
        <meta property="og:image" content="../public/logo192.png" />
        <meta
          property="og:url"
          content="https://react-practice-iota-nine.vercel.app/"
        />

        <meta name="twitter:title" content="Twitter Title" />
        <meta name="twitter:description" content="Twitter Description" />
        <meta name="twitter:image" content="/public/image/IMG_5916.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "green",
          fontSize: 50,
        }}
      >
        김수민 과제 입니다!
      </h1>
    </div>
  );
}

export default App;
