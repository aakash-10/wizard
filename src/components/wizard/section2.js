import React from 'react'
import { DetailContext } from '../../context/details'


const Section2 = ({setForm, formData, navigation}) => {
    
    const { inputList } = React.useContext(DetailContext)
    const {go} = navigation

  return(
      <>
          <img
              src="https://thelifedesignproject.com/wp-content/uploads/2018/07/Blogging-Wizard-Laptop-Graphic.png"
              alt="img"
              className="imageCover"
          />
          <h1>Step 1</h1>
          <h3>Review your data</h3>
      {inputList.map(item=>(
          <div key={item.firstName} className="form">
          

          <h4>
    
        <button onClick={() => go("section1")}>Edit</button>
             </h4>
            <div>
                {" "}
        First name: {`${item.firstName}`},
        <br />
        Last Name: {`${item.lastName}`},
      </div>
            <div>college: {`${item.college}`}</div>



           
</div>
      ))}
          <div>
              <button onClick={() => go("section3")}>Submit</button>
          </div>
      </>
  )
    
    // return (
    //     <div className="form">
    //         <h3>Review your data</h3>
            
    //         <h4>
    //             Name
    //     <button onClick={() => go("section1")}>Edit</button>
    //         </h4>
    //         <div>
    //             {" "}
    //     First name: {`${firstName}`},
    //     <br />
    //     Last Name: {`${lastName}`},
    //   </div>
    //         <div>college: {`${college}`}</div>
          
         
         
    //         <div>
    //             <button onClick={() => go("section3")}>Submit</button>
    //         </div>

    //         <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    //     </div>
    // )
}

export default Section2
