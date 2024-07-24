import React from 'react'

export default function Dashboard({userData}) {

  return (
    <div>
      {userData ? ( 
        <div>
      <h1>{userData.username}</h1>
      <h2> {userData.password}</h2> 
      </div>
      ):" no user data is found"
}
    </div>
  )
}
