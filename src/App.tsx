import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>practice</title>
      </Helmet>
      <div
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
      </div>
    </div>
  );
}

export default App;
