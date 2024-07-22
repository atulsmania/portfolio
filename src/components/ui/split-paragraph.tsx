import React, { useState, useEffect, useRef } from "react";

const SplitParagraph = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      const tempContainer = document.createElement("div");
      tempContainer.style.visibility = "hidden";
      tempContainer.style.position = "absolute";
      tempContainer.style.whiteSpace = "nowrap";
      tempContainer.style.width = containerWidth + "px";
      tempContainer.style.fontFamily =
        window.getComputedStyle(container).fontFamily;
      tempContainer.style.fontSize =
        window.getComputedStyle(container).fontSize;
      document.body.appendChild(tempContainer);

      const words = text.split(" ");
      let line = "";
      let tempLines: string[] = [];

      words.forEach((word) => {
        tempContainer.innerText = line + word + " ";
        if (tempContainer.scrollWidth > containerWidth) {
          tempLines.push(line.trim());
          line = word + " ";
        } else {
          line += word + " ";
        }
      });

      if (line) {
        tempLines.push(line.trim());
      }

      document.body.removeChild(tempContainer);
      setLines(tempLines);
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px",
        border: "1px solid #ccc",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
      }}
    >
      {lines.map((line, index) => (
        <div key={index} style={{ whiteSpace: "nowrap" }}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default SplitParagraph;
