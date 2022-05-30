import React from "react";

export const Row = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.children}
    </div>
)