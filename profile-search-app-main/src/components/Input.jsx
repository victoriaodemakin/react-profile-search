import React from 'react'
import { useState } from 'react'
import { usersList } from '../data/userlist';

export const Input = () => {
  const [search, setSearch]= useState('')
  
  return (
    <div>
      <input type ='search' placeholder='Search by name...' onChange={(e)=> setSearch(e.target.value)}/>
      <div className='userBlockSection'>
        {usersList.filter((item) =>{
          return search.toLowerCase() === '' ? item : item.firstName.toLowerCase().includes(search)
          }).map((user, key) => {
        const usersList = `${user.title}. ${user.firstName}. ${user.lastName}`
          return <div className='userBlock' value = {user} key = {key}>
        <div className='displayPicture'>
          <img src={user.picture} alt ='' />
        </div> 
        <div className='userDetails'>
          <p>{user.id}</p>
          <p className='userProfile'>{usersList}</p>
        </div>
      </div>
      })}
      </div>
      
  
    </div>
  )
}

export default Input;