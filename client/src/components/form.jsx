import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Form(props){

    const [input, setInput] = useState({name: "", role: "admin"});

    function handleChange(data){
        var {name, value} = data.target;
        setInput(prev => {
            return{
                ...prev,
                [name]: value
            }
        });
    }

    function handleClick(){
        console.log(input);
        axios.post('/users',input)
        .then(response => props.updateList(response.data));
    }

    return(
        <div>
            <input 
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                 /> 
            <select name="role" value={input.role} onChange={handleChange}>
                <option value="admin">admin</option>
                <option value="regular">regular</option>
            </select>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Form;