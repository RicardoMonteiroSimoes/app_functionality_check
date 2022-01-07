import React from "react";

import Row from '../row/row.component'

export default function Body(rows, tooltips, highlightIndex, ...props) {

    const content = rows.rows.map((row, index) => 
        <Row key={"row" + index.toString()} row={row} tooltips={rows.tooltips} isHighlighted={index === rows.highlightIndex? true : false}/>);

    return content;
};