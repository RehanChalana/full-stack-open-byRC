import { useState } from 'react'


const App = () => {
  const [person, setPerson] = useState([{name:'Rehan Chalana'}])
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    const newNameObject = {name:newName}
    setPerson(person.concat(newNameObject))
    console.log(person)
    setNewName('')
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {person.map((x) => {
          // console.log(x.name)
          return <p>{x.name}</p>
        })}
      </div>
    </div>
  )
}


export default App
