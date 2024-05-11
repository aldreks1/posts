// ResizableTextarea.js
import React, { useRef, useEffect } from "react";

const ResizableTextarea = ({ value, onChange, ...rest }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [value]);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={handleChange}
      rows={1} // Начальное значение rows
      {...rest}
    />
  );
};

export default ResizableTextarea;
