import React from 'react'
import{Pencil,ThumbsUp} from 'phosphor-react'

const UserTable = (props)=>(
    <table>
        <thead>
            <tr>
                <th>Pending Task</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0?
               (props.users.map((user)=>(
            <tr key={user.id}>
                <td>{user.name}</td>
                
                <td>
                <button onClick={()=>props.editRow(user)} ><Pencil size={18}/></button>
                    <button onClick={()=>props.deleteUser(user.id)} className="button muted-button"><ThumbsUp size={18}/></button>
                </td>
            </tr>

            ))
               ):(
                <tr>
                    <td colSpan={3}>Add New Task</td>
                </tr>
               )
           }
            
        </tbody>
    </table>
);
export default UserTable;
