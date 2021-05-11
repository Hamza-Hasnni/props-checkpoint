import React from 'react'

const Bio = (props) => {
    return (
        <div>
            <h4>Age : {props.age}</h4>
            <h4>Adresse : {props.adresse}</h4>
            <h4>Phone Number : {props.phone}</h4>
        </div>
    )
}

export default Bio
