import React, { useEffect, useState, memo, useCallback, Profiler } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const callback = (id, phase) => {
    console.log(`${id} - ${phase}`);
  };

  return (
    <>
      <Profiler id="input" onRender={callback}>
        <input type="text" value={text} onChange={onChange} />
      </Profiler>
      <Profiler id="Wrap" onRender={callback}>
        <Wrap />
      </Profiler>
    </>
  );
}

const Wrap = memo(() => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = useCallback(
    () => setIsChecked(prevState => !prevState),
    []
  );

  useEffect(() => {
    console.log("re-build");
  }, [toggleChecked]);

  return <Checkbox value={isChecked} onClick={toggleChecked} />;
});

const Checkbox = memo(({ value, onClick }) => {
  console.log("Checkbox is renderd!");
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      {value ? "☑" : "□"}
    </div>
  );
});
