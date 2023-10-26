import React from 'react'
import './CreateStudent.css'
const CreateStudent = () => {
  return (
    <div>
        <h1>Add New Students</h1>
        <div className="form">
            <div className='form__input'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='enter name' id='name' onChange={()=>{}} />
            </div>
            <div className='form__input'>
                <label htmlFor="name">Email</label>
                <input type="text" placeholder='enter email' id='email' onChange={()=>{}} />
            </div>
        </div>
    </div>
  )
}

export default CreateStudent