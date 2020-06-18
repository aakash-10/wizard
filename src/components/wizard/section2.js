import React from 'react'

const Section2 = ({setForm, formData, navigation}) => {
    const {firstName,lastName, college} = formData
    const {go} = navigation
    return (
        <div className="form">
            <h3>Review your data</h3>
            <h4>
                Name
        <button onClick={() => go("section1")}>Edit</button>
            </h4>
            <div>
                {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
            <div>college: {`${college}`}</div>
          
         
         
            <div>
                <button onClick={() => go("section3")}>Submit</button>
            </div>
        </div>
    )
}

export default Section2
