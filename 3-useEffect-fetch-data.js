import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    getUser();
  },[])

  return <>
    <h3>Git-hub Users</h3>
    <ul className='users'>
      {users.map((user) => {
        const { id, avatar_url, login, html_url } = user;
        return (<li key={id}>
          <img src={avatar_url} alt={login} />
          <h4>{login}</h4>
          <a href={html_url}></a>
        </li>)
      })}
    </ul>
  </>;
};

export default UseEffectFetchData;
