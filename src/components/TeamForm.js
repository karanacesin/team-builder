import React from 'react'

 function TeamForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    <form onSubmit={onSubmit}>
      <div >
        <h2>Add a Team Member</h2>
        <button>submit</button>
      </div>

      <div >
        <h4>General information</h4>
        <label>Name:&nbsp;
          <input
            type='text'
            placeholder='Your Name'
            maxLength='50'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;
          <input
            type='text'
            placeholder='Your email'
            maxLength='50'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>Role:&nbsp;
          <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >Your Role</option>
              <option value='Backend Developer'>Backend Developer</option>
              <option value='Frontend Developer'>Frontend Developer</option>
              <option value='User Interface'>User Interface</option>
              <option value='Full Stack Developer'>Full Stack Developer</option>
          </select>
        </label>
      </div>
    </form>
  )
}


export default TeamForm