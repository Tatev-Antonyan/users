import {useState} from 'react';
import { useParams } from 'react-router';

function UserDetails(){
    const params = useParams()

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [country, setCountry] = useState()

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeSurname = (e) => {
        setSurname(e.target.value)
    }

    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const changeCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleAddNew = () => {
        setList([...list, {id: Math.random(), name: name, surname: surname, age: age, country: country}])
    }


    let userList = [
        {id: 1, name: "John", surname: "Black", age: 24, country: 'Armenia'},
        {id: 2, name: "James", surname: "Simon", age: 44, country: 'Columbia'},
        {id: 3, name: "Mike", surname: "Tyson", age: 64, country: 'United States'},
        {id: 4, name: "Chris", surname: "Brown", age: 56, country: 'United States'},
        {id: 5, name: "Michael", surname: "Jackson", age: 23, country: 'Russia'},
        {id: 6, name: "Jackie", surname: "Chan", age: 75, country: 'China'},
        {id: 7, name: "Marty", surname: "Mone", age: 43, country: 'Brazil'},
        {id: 8, name: "Simon", surname: "Cowell", age: 21, country: 'Great Britain'},
    ]

    const [list, setList] = useState(userList)
    
    const searchedUser = list.find((i) => i.id == params.id)

    const handleRemove = (id) => {
        let arr = list.filter((i) => i.id !== id);
        setList(arr)
    }



    return(
        <div>
            <div>
                 <h1 className='users_header'>User Details</h1>
                 <div className='input_container'>
                    <input type='text' placeholder='Type your name' onChange={changeName} value={name}/>
                    <input type='text' placeholder='Type your surname' onChange={changeSurname} value={surname}/>
                    <input type='text' placeholder='Type your age' onChange={changeAge} value={age}/>
                    <input type='text' placeholder='Where are you from?' onChange={changeCountry} value={country}/>
                    <button onClick={handleAddNew}>Add New User</button>
                 </div> 
            </div>
           
         <div>
         <table>
              <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Country</th>
              <th className='remove_btn'></th>
              </tr>
            </table>
         </div>
            {
                list.map((i) => {
                    return(
                        <div>
                            <table>
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.surname}</td>
                                    <td>{i.age}</td>
                                    <td>{i.country}</td>
                                    <td className='remove_btn'>
                                    <button onClick={() => handleRemove(i.id)}>x</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserDetails;