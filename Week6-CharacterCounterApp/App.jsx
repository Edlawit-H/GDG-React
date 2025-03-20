import { useCharacterCount } from "./hooks/useCharacterCount";
import ProgressBar from "./components/ProgressBar";
import CopyButton from "./components/CopyButton";
import "./App.css";

const App = () => {
  const { text, setText, clearText, charCount, charLimit, isWarning } = useCharacterCount(200);

  return (
    <div className="container">
      <h1>Real-Time Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className={isWarning ? "warning" : ""}
      />
      <p className="counter">
        {charCount}/{charLimit} {isWarning && "⚠ Warning: Near Limit"}
      </p>
      <ProgressBar progress={(charCount / charLimit) * 100} />
      <div className="buttons">
        <CopyButton text={text} />
        <button className="clear-btn" onClick={clearText}>Clear</button>
      </div>
    </div>
  );
};

export default App;
