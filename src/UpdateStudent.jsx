import React from 'react'
import './CreateStudent.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateStudent = () => {

    const navigata = useNavigate()
const {id} = useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit= (e)=>{
                e.preventDefault()

                axios.put('http://localhost:8081/update/'+id,{name,email})
                .then(res=>{
                    console.log(res)
                   navigata('/')
                }).catch(err=>{
                    console.log(err)
                })
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <h1>Update Students</h1>
        <div className="form">
            <div className='form__input'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='enter name' id='name' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form__input'>
                <label htmlFor="name">Email</label>
                <input type="text" placeholder='enter email' id='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <button >Update</button>
        </div>
        </form>
    </div>
  )
}

export default UpdateStudent