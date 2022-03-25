import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Home-Components/Header/Header'
import Form from '../components/Main-Components/Form/Form'
function Main() {
  return (
    <div>
      <Header />
      Main
      <Form />
      <Link to='/'>Go back to home</Link>
    </div>
  )
}

export default Main