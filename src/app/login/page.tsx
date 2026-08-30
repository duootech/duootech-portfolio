'use client'

import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

const login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e:any) =>{
    e.preventDefault()

    await signIn("credentials",{
            username,
            password,
            callbackUrl: "/"
        })
  }
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
            <input type="text" name='username' value={username} placeholder='username' 
            onChange={(e)=>{setUsername(e.target.value)}}
            />
            <input type="password" name='password' value={password} placeholder='password' 
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default login