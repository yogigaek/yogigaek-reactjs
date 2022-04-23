import React from "react";

const Paragraf = ({parValue}) => {
    return (
        <div>
            <h3>{!parValue ? "State of react" : parValue }</h3>
        </div>
    );
};

export default Paragraf;