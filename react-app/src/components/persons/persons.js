import React from 'react';
import Person from './person/person'
const persons=(props)=>{
    return props.persons.map((person,index)=>{
        return <Person
                    myClick={()=>props.clicked(index)}
                    name={person.name}
                    code={person.code}
                    key={person.id}
                    changeValue={(event)=>props.changed(event,person.id)}
                />
    })
}

export default persons; 
