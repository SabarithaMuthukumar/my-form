import React from 'react';

function User(props) {

    return (
        <ul>
            <li>{props.fname} {props.lname}</li>
            <li>{props.email}</li>
            <li>{props.dob}</li>
        </ul>
    )
}
export default User;