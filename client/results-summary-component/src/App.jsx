import "./App.scss";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="result">
          <h2>Your Result</h2>
          <div className="result-value">
            <div className="value">
              <span className="number">76</span>
              <span className="text">of 100</span>
            </div>
          </div>
          <h1>Great</h1>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary">
          <h2>Summary</h2>
          <div className="container">
            {data.map((item) => (
              <div className={`test ${item.category.toLowerCase()}`} key={item.category}>
                <div className="test-name">
                <img src={item.icon}/>
                  <span>{item.category}</span>
                </div>
                <div className="test-value">
                  <span>{item.score + " / 100"}</span>
                </div>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
