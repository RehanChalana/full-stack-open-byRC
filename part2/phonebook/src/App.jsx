import { useState } from 'react'
import PhoneBookForm from './components/PhoneBookForm'
import Filter from './components/Filter'
import PhoneNumbers from './components/PhoneNumbers'



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
      <Filter handleFilterChange={handleFilterChange}/>
      <PhoneBookForm newName={newName} newNumber={newNumber} addNewNumber={addNewNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PhoneNumbers filteredPerson={filteredPerson}/>
    </div>
  )
}


export default App
