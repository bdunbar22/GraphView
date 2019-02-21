import Graph from "react-graph-vis";
import React from "react";
import { render } from "react-dom";

const data = {
    nodes: [
        { id: 1, color: "#9d37d8", label: "Emperor" },
        { id: 2, color: "#9d37d8", label: "Empress" },
        { id: 3, color: "#9d37d8", label: "Royal Consort" },
    ],
    edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
    ],
};

const options = {
    edges: {
        color: "#000000"
    }
};

render(
    <div>
        <Graph graph={data} options={options} style={{ height: "500px" }} />
    </div>,
    document.getElementById("graph")
);