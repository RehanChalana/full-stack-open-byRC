import { useState, useEffect } from 'react'
import PhoneBookForm from './components/PhoneBookForm'
import Filter from './components/Filter'
import PhoneNumbers from './components/PhoneNumbers'
import axios from 'axios'



const App = () => {
  const [person, setPerson] = useState([])
  const [filteredPerson,setFilteredPerson] = useState(person)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPerson(response.data)
          setFilteredPerson(response.data)
        })
  }, [])




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
      id: person.length+1
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

  console.log('render', person.length , 'persons')

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
