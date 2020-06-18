import React from 'react'
import {useState} from 'react'

const DetailContext = React.createContext();

/////////////////////
function DetailProvider({ children }) {

    

    const [inputList, setInputList] = useState([{ firstName: "", lastName: "", college:"" }])

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "",college:"" }]);
    };

    
    const reset = () => {
        setInputList([{ firstName: "", lastName: "", college: "" }]);
    };

    

    return <DetailContext.Provider value={{ inputList, handleAddClick, handleRemoveClick, handleInputChange,reset }}>
        {children}
    </DetailContext.Provider>
}
///////////////////////
export {DetailContext ,DetailProvider}


