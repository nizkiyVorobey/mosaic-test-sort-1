import React, { useEffect } from 'react';

export const SelectSort = ({ setUserSorted, userList }) => {
  useEffect(() => {
    setUserSorted(sortByDay());
  }, []);

  const sortByDay = () => [...userList]
    .sort((a, b) => (
      +a.birthday_contact.split('-')[2] - +b.birthday_contact.split('-')[2]
    ));

  const sortByMonth = () => [...userList]
    .sort((a, b) => (
      +a.birthday_contact.split('-')[1] - +b.birthday_contact.split('-')[1]
    ));

  const handleChange = (event) => {
    const { value } = event.target;
    let sortedUserList = null;

    switch (value) {
      case 'Sort_By_Date':
        sortedUserList = sortByDay();
        break;
      case 'Sort_By_Month':
        sortedUserList = sortByMonth();
        break;
      default:
        return userList;
    }

    setUserSorted(sortedUserList);

    return userList;
  };

  return (
    <select onChange={handleChange}>
      <option value="Sort_By_Date">Sort By Date</option>
      <option value="Sort_By_Month">Sort By Month</option>
    </select>
  );
};
