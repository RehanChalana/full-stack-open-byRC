import { useState, useEffect } from 'react'
import PhoneBookForm from './components/PhoneBookForm'
import Filter from './components/Filter'
import PhoneNumbers from './components/PhoneNumbers'
import axios from 'axios'
import service from './services/phonebook'



const App = () => {
  const [person, setPerson] = useState([])
  const [filteredPerson,setFilteredPerson] = useState(person)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    service
        .findAll()
        .then(response => {
          setPerson(response)
          setFilteredPerson(response)
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
      number: newNumber
    }
    if(person.some((x) => x.name===newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    service
        .create(newNameObject)
        .then(response => {
           const updatedPerson = person.concat(response)
           setPerson(updatedPerson)
           setFilteredPerson(updatedPerson)
        })
    setNewName('')
    setNewNumber('')
  }

  const onDelete = (id) => {
    const confirm = window.confirm('are you sure you want to delete this number ?')

    if(confirm) {
      service
          .deleteDb(id)
          .then(() => {
            const updatedPerson = person.filter(x => x.id!==id)
            setPerson(updatedPerson)
            setFilteredPerson(updatedPerson)
          })
    }
    
    
  }

  console.log('render', person.length , 'persons')

  return(
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <PhoneBookForm newName={newName} newNumber={newNumber} addNewNumber={addNewNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PhoneNumbers filteredPerson={filteredPerson} onDelete={onDelete}/>
    </div>
  )
}


export default App
