import React, { useState, memo, useCallback, Profiler, useMemo } from "react";
import "./styles.css";

const onRender = (id, phase) => {
  console.log(`${id} - ${phase}`);
};

export default function App() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Profiler id="TextField" onRender={onRender}>
        <label>Text field</label>
        <input type="text" value={text} onChange={onChange} />
      </Profiler>
      <Wrap />
    </div>
  );
}

const Wrap = memo(() => {
  const [isChecked, setIsChecked] = useState(false);

  const [value, setValue] = useState("");

  const x = useMemo(() => [1, 2], []);

  const toggleChecked = useCallback(
    () => setIsChecked((prevState) => !prevState),
    []
  );

  const onWrapInputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <Profiler id="Wrap" onRender={onRender}>
      <label>Wrap</label>
      <input type="text" onChange={onWrapInputChange} value={value} />
      <Checkbox value={isChecked} onClick={toggleChecked} testProp={x} />
    </Profiler>
  );
});

const Checkbox = memo(({ value, onClick }) => {
  return (
    <Profiler id="Checkbox" onRender={onRender}>
      <div style={{ cursor: "pointer" }} onClick={onClick}>
        {value ? "☑" : "□"}
      </div>
    </Profiler>
  );
});
