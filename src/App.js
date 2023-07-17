import { useState } from 'react';
import './App.css';
import UserTable from './Tables/UserTable';
import AddUserForm from './Forms/AddUserForm';
import EditUserForm from './Forms/EditUserForm';

function App() {

  const usersData = [
    {id:1,name:'wake up at 5'},
    {id:2,name:'walk'},
    {id:3,name:'plant trees'},
];

    const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
    }

    const deleteUser = (id)=>{
      setUsers(users.filter((user)=>user.id!==id))
      setEditing(false);
      
  }

    const[users,setUsers]= useState(usersData);
    

    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

const editRow = (user)=>{
      setEditing(true);
      setCurrentUser({id:user.id,name:user.name});
    }

  const updateUser = (id,updatedUser)=>{
      setEditing(false);
      setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
  }

  return (
    <div className="container">
      <h1>TO DO LIST  USING HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing?(<div>
            <h2>Update List</h2> 
          <EditUserForm
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}/></div>): (<div>
            <h2>Add Task</h2>
          <AddUserForm addUser ={addUser} />
        </div>)
         }
        </div>
          
          
        <div className="flex-large">
          <h2>To Do List</h2>
          <UserTable editRow={editRow} users ={users} deleteUser={deleteUser}/>
        </div>
      </div>
     </div>
  );
}

export default App;
