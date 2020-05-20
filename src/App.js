import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import Team from './components/Team';
import TeamForm from './components/TeamForm';
import './App.css';

const teamMembers = [
  {
    id: uuid(),
    name: 'Dawna',
    email: 'karanacesin@yahoo.com',
    role: 'Full Stack Developer',
  },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {

  const [team, setTeam] = useState(teamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const { name } = evt.target
    const { value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return
    }
    
    const updatedTeam = { ...formValues, id: uuid() }
    setTeam([ updatedTeam, ...team ])
    setFormValues(initialFormValues)
  }

  return (
    <div >
      <header><h1>Team Members</h1></header>

      <TeamForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {
        team.map(person => {
          return (
            <Team key={person.id} details={person} />
          )
        })
      }
    </div>
  )
}


export default App;
