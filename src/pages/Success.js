import React from 'react'

function Success() {

  const style = {
      "textAlign" : "center",
      "paddingTop": "50px"
  }

  return (
    <div id='success'>
        <h1 style={style}>Thank you for sending an email!</h1>
    </div>
  )
}

export default Success