import { useState } from 'react'
import PhoneEntry from './PhoneEntry'

const PhoneNumbers = ({filteredPerson}) => {
    return (
        <div>
        {filteredPerson.map((x) => (
          <PhoneEntry key={x.id} name={x.name} number={x.number}/>
        ))}
       </div>
    )
}

export default PhoneNumbers