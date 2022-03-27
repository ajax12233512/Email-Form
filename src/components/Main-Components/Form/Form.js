import React, { useState, useRef } from 'react'
import './Form.css';
import emailjs from '@emailjs/browser';
function Form() {

  const form = useRef();
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

   


    emailjs.sendForm(window.env.SERVICE_ID, window.env.TEMPLATE_ID,  form.current, window.env.USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }


  return (
    <form ref={form} onSubmit={e => {handleSubmit(e)}} className='main-form'>
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