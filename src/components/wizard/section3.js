import React from 'react'
import { DetailContext } from '../../context/details'

const Section3 = ({ navigation }) => {
    const {go} = navigation;
    const {reset} = React.useContext(DetailContext)

    return (
        <div>
            <h3>Thank you for submitting. We will be in touch</h3>
      New Form : <button onClick={() => {go("section1");reset()}}>New</button>
            
        </div>
    )
}

export default Section3
