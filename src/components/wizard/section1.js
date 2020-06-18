import React from 'react'

import {DetailContext} from '../../context/details'



const Section1 = ({setForm, formData, navigation}) => {
   // const { firstName, lastName, college } = formData;
    const { next } = navigation;
    
    const {inputList,handleAddClick,handleInputChange, handleRemoveClick,reset} = React.useContext(DetailContext)
  
     //const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }])
    
   
    var enabled =false
   var addbtn = true

 for(let i=0;i<inputList.length-1;i++){
    
     if(inputList[i].firstName === inputList[inputList.length-1].firstName &&
         inputList[i].lastName === inputList[inputList.length - 1].lastName && 
         inputList[i].college === inputList[inputList.length - 1].college
        ){

        addbtn = false
        enabled = false
         alert("Fiels Shoudn't be same")

        //  handleRemoveClick(inputList.length - 1)

     }
 }
    
    
    inputList.map((item)=>{

         
       if(item.firstName.length>0 && item.lastName.length>0 && item.college.length>0 && addbtn){
           
           enabled = true
          
          
        
     
           
           
           

       }else{
           enabled= false
       }
       return ""
    })
   
    
    
    return (
        <div className="App">
            <img
                src="https://thelifedesignproject.com/wp-content/uploads/2018/07/Blogging-Wizard-Laptop-Graphic.png"
                 alt="img"
                 className="imageCover"
             />
             <h1>Step 1</h1>
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
                            {inputList.length - 1 === i && <button disabled={!addbtn} onClick={handleAddClick}>Add</button>}
                        </div>
                        
                    </div>
                );
            })}
            <div>

                <button disabled={!enabled}  onClick={next}>Next</button>
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
