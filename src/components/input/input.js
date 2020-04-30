import React, {useState,useEffect} from "react";

export const Field = ({title, onChange}) => {
    return (
        <div>
            <input onChange={(text) => onChange(text)}
            />
        </div>
    )
}
