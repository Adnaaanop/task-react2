import React from 'react'
import useFetch from './Custom'

function UserList() {

    const {data}=useFetch("https://dummyjson.com/users")
    if(!data)
        return <p>Loading...</p>
  return (
    <>
    <h1>USERS</h1>
    <ul>
        {data.users.map(user=>(
            <li key={user.id}> {user.firstName}<br/> {user.email} <br/>  {user.age} </li>
        ))}
    </ul>
    </>
  )
}

export default UserList