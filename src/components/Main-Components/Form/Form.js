import React, { useState } from 'react'
import './Form.css'
function Form() {

  const [from_name, set_from_name] = useState()
  const [message, set_message] = useState()

  const handleChange = (e) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {}
    values.from_name = from_name;
    values.message = message
    console.log(values);
  }


  return (
    <form onSubmit={e => {handleSubmit(e)}} className='main-form'>
        <label htmlFor='from_name'>From:</label>
        <input 
            name='from_name'
            type='text'
            onChange={e => { set_from_name(e.target.value)}}
            value={from_name}
        />
        <label htmlFor='message'>Message:</label>
        <textarea 
            name='message'
            type='text'
            onChange={e => set_message(e.target.value)}
            value={message}
        />
        <button className='form-btn' type='submit'>Send Email</button>
    </form>
  )
}

export default Form