import { useState } from 'react'


const App = () => {
  const [person, setPerson] = useState([
    {name:'Rehan Chalana',number:'9855519509', id: 0},
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPerson,setFilteredPerson] = useState(person)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    let filter = event.target.value
    let filteredObject = person.filter((x) => {
      console.log(x.name)
      return x.name.includes(filter)
    })
    setFilteredPerson(filteredObject)
  }

  const addNewNumber = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: person.length
    }
    if(person.some((x) => x.name===newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const updatedPerson = person.concat(newNameObject)
    setPerson(updatedPerson)
    setFilteredPerson(updatedPerson)
    setNewName('')
    setNewNumber('')
  }

  return(
    <div>
      <h2>Phonebook</h2>
      filter shown with <input  onChange={handleFilterChange} />
      <h2>Add new</h2>
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
        {filteredPerson.map((x) => {
          // console.log(x.name)
          return <p key={x.id}>{x.name} : {x.number}</p>
        })}
      </div>
    </div>
  )
}


export default App
