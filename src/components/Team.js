import React from 'react'

 function Team(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div >
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}


export default Team