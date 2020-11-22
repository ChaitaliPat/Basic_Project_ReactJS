import React from "react";

const Button = ({title = "Give Name"}) => (
    <div>
        <button className="btn">{title}</button>
    </div>
)

export default Button;