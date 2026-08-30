'use client'

import axios from 'axios';
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';

const ContactUs = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phoneNo:"",
        projectName:"",
        message:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        try {
            const res = await axios.post("/api/contact",formData);
            console.log(res.data);
            router.push("/")
        } catch (error) {
            console.log("Error on creating contact",error);
        }
        
    }
  return (
    <div>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter you name'/>
            <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Enter you email'/>
            <input type="text" name='phoneNo' value={formData.phoneNo} onChange={handleChange} placeholder='Enter you phone number'/>
            <input type="text" name='projectName' value={formData.projectName} onChange={handleChange} placeholder='Enter your project name such e-commerce, mangement etc'/>
            <input type="text" name='message' value={formData.message} onChange={handleChange} placeholder='Enter you message'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs