import React from 'react';

export const UserList = ({ user }) => {
    return (
        <tr key={user.company} >
            <td className="user-item"> {user.firstname} </td>
            <td className="user-item"> {user.lastname} </td>
            <td className="user-item"> {user.email} </td>
            <td className="user-item"> {user.phonenumber} </td>
            <td className="user-item"> {user.birthday_contact} </td>
            <td className="user-item"> {user.company} </td>
        </tr>
    )
};
