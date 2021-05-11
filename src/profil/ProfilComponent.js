import React from 'react'

 const ProfilComponent = (props) => {
    
    return (
        <div>
            <h1>full Name : {props.fullName}</h1>
            <h3>profession : {props.profession}</h3>
            {props.children }
        </div>
    )
}

export default ProfilComponent;