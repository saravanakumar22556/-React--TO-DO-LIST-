import { useState } from "react";


 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
       setUser({...user,[name]:value})
       console.log(user);
       
    }
    
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if (!user.name || /^\s*$/.test(user.name))return;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        <button>Add</button>
      </form>
    )
 }

export default AddUserForm;