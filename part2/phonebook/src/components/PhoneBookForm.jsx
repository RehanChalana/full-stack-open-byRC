import { useState } from 'react'

const PhoneBookForm = ({addNewNumber,handleNameChange,newName,newNumber,handleNumberChange}) => {
    return (
      <div>
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
      </div>
    )
}

export default PhoneBookForm