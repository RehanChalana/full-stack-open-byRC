import { useState } from 'react'
import PhoneEntry from './PhoneEntry'

const PhoneNumbers = ({filteredPerson, onDelete}) => {
    return (
        <div>
        {filteredPerson.map((x) => (
          <PhoneEntry key={x.id} name={x.name} number={x.number} onDelete={() => onDelete(x.id)}/>
        ))}
       </div>
    )
}

export default PhoneNumbers