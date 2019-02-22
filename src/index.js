import Graph from "react-graph-vis";
import React from "react";
import { render } from "react-dom";
import characters from "./data/characters";

const options = {
    edges: {
        color: "#000000"
    }
};

render(
    <div>
        <Graph graph={characters} options={options} style={{ height: "700px" }} />
    </div>,
    document.getElementById("graph")
);