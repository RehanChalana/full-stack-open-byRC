import { useState } from 'react'


const App = () => {
  const [person, setPerson] = useState([{name:'Rehan Chalana',number:'9855519509'}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewNumber = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newNumber
    }
    if(person.some((x) => x.name===newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPerson(person.concat(newNameObject))
    setNewName('')
    setNewNumber('')
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/> <br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {person.map((x) => {
          // console.log(x.name)
          return <p>{x.name} : {x.number}</p>
        })}
      </div>
    </div>
  )
}


export default App
