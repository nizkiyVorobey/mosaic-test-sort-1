import React, { useState } from 'react';
import { getUsers } from './api/getUsers';
import { UserList } from './components/UserList/UserList';
import { SelectSort } from './components/SelectSort/SelectSort';
import './App.css';

function App() {
  const [userSorted, setUserSorted] = useState([...getUsers]);

  return (
    <div className="App">
      <h1>Mosaic test sort!</h1>

      <SelectSort setUserSorted={setUserSorted} userList={userSorted} />

      <table className="user-list">
        <thead className="user-list-title">
          <tr className="user-list-title-item-row">
            <td className="user-list-title-item-column">Name</td>
            <td className="user-list-title-item-column">Surname</td>
            <td className="user-list-title-item-column">Email</td>
            <td className="user-list-title-item-column">phonenumber</td>
            <td className="user-list-title-item-column">Birthday</td>
            <td className="user-list-title-item-column">company</td>
          </tr>
        </thead>
        <tbody>
          {
            userSorted.map(user => <UserList user={user} key={user.company} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
