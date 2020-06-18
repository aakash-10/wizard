import React from 'react'
import {useState} from 'react'
import { useForm, useStep } from "react-hooks-helper";


import Section1 from './wizard/section1.js'
import Section2 from './wizard/section2.js'
import Section3 from './wizard/section3.js'


const steps = [
   {id:"section1"},
   {id:"section2"},
   {id:"section3"}
]

const defaultdata = {
    firstName : "",
    lastName : "",
    college : ""
}


const Header = ({images}) => {
    const [formData, setForm] = useForm(defaultdata);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
    const props = { formData, setForm, navigation };
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]) 



    
    switch (id) {
        case "section1":
            return <Section1 {...props} />;
        case "section2":
            return <Section2 {...props} />;
        case "section3":
            return <Section3 {...props} />;
      
        default:
            return null;
    }
}

export default Header
