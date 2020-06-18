import React from 'react'
import {useState} from 'react'
import {DetailContext} from '../../context/details'

import ItemForm from './itemForm.js'

const Section1 = ({setForm, formData, navigation}) => {
    const { firstName, lastName, college } = formData;
    const { next } = navigation;
    const {inputList,handleAddClick,handleInputChange, handleRemoveClick,reset} = React.useContext(DetailContext)
  
     //const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }])
    console.log(inputList)
    
    return (
        <div className="App">
            <img
                 src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/52013919/original/6d1a3ad91335506330189dafa780af958fd03f50/draw-you-a-cute-drawing-in-my-style.jpg"
                 alt="img"
                 className="imageCover"
             />
            {inputList.map((x, i) => {
                return (
                    <div key={i} className="form">
                        
                        <input
                            name="firstName"
                            placeholder="Enter First Name"
                            value={x.firstName}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <input
                            className="ml10"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={x.lastName}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <input
                            name="college"
                            placeholder="Enter college Name"
                            value={x.college}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>
                        
                    </div>
                );
            })}
            <div>

                <button onClick={next}>Next</button>
                <button onClick={reset}>Reset</button>

            </div>
            
        </div>
    );

    
    // return (
    //     <div className="form">
    //         <img
    //             src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/52013919/original/6d1a3ad91335506330189dafa780af958fd03f50/draw-you-a-cute-drawing-in-my-style.jpg"
    //             alt="img"
    //             className="imageCover"
    //         />
    //         <ItemForm
    //             label="First Name"
    //             name="firstName"
    //             value={firstName}
    //             onChange={setForm}
    //         />
    //         <ItemForm
    //             label="Last Name"
    //             name="lastName"
    //             value={lastName}
    //             onChange={setForm}
    //         />
    //         <ItemForm
    //             label="college"
    //             name="college"
    //             value={college}
    //             onChange={setForm}
    //         />
    //         <div>
    //             <button onClick={next}>Next</button>
    //         </div>
    //     </div>
    // )
}

export default Section1
