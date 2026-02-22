"use client";
import React, { useContext } from "react";
import "./DotRing.css";
import useMousePosition from "../../app/hooks/useMousePosition";
import { MouseContext } from "../../app/context/mouse-context";
import { Box } from "@chakra-ui/react";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <Box
        // style={{ left: `${x}px`, top: `${y}px` }}
        left={x}
        top={y}
        className={"ring " + cursorType}
        borderColor={"border.emphasized"}
        borderWidth={"thin"}
      />
      <Box
        className={"dot " + cursorType}
        bg={"bg.inverted"}
        left={x}
        top={y}
      />
    </>
  );
};

export default DotRing;
