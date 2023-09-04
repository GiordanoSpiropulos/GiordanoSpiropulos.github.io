import React, { useState, useEffect } from "react";
import { TypeWriterType } from "./TypeWriter.type";
import * as S from "./styles";

export function Typewriter(props: TypeWriterType) {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + props.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, props.delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, props.delay, props.text]);
  return (
    <S.TypeWriterSpan fontSize={props.fontSize || "16px"}>
      {currentText}
      <S.TextCursor />
    </S.TypeWriterSpan>
  );
}
