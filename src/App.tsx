import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>sumin practice</title>
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
