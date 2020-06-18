import React from 'react'

const Section3 = ({ navigation }) => {
    const {go} = navigation;

    return (
        <div>
            <h3>Thank you for submitting. We will be in touch</h3>
      New Form : <button onClick={() => go("section1")}>New</button>
        </div>
    )
}

export default Section3
