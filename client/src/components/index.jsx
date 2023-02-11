import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./form";

function Index(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users')
        .then(response => setUsers(response.data));
    },[])

    return(
        <div>
            <h1>User list</h1>
            <Form updateList={setUsers} />
            <table>
                {users.map(user => {
                    return(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Index;