import { useState } from 'react'

const PhoneEntry = ({name,number,onDelete}) => {
return (
    <div>
        <p>{name} : {number}</p><button onClick={onDelete}>delete</button>
    </div>
)
}

export default PhoneEntry

