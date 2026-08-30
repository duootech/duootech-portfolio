'use client'
import axios from 'axios'
import React, { useState } from 'react'

const register = () => {

    const [formData, setFormData] = useState({
        username:"",
        password:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()

        try {
            const res = await axios.post("/api/auth/register",formData)
            console.log(res.data);
            alert("registerd")
        } catch (error) {
            console.error("Register Error:", error);
        }
    }
  return (
    <div>
        <h1>Register form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' value={formData.username} placeholder='username' 
            onChange={handleChange}
            />
            <input type="password" name='password' value={formData.password} placeholder='password' 
            onChange={handleChange}
            />
            <button type='submit'>register</button>
        </form>
    </div>
  )
}

export default register