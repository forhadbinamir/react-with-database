import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [updateUser, setUpdateUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateUser(data))
    }, [])

    const handleUpdateUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const updateUser = { name, email, password }
        // console.log(name, email, password)


        // send data to server by using fetch
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/Json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('User Update successfully')
                event.target.reset()
            })
    }
    return (
        <div>
            <h2>User Update: {updateUser.name} </h2>
            <form onSubmit={handleUpdateUser} className='form-field'>
                <h2 style={{ textAlign: 'center' }}>Update user to database</h2>

                <input type="text" placeholder='name' name='name' id="" required />
                <br />

                <input type="email" placeholder='Email' name='email' id="" required />
                <br />

                <input type="password" placeholder='Password' name="password" id="" />
                <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default UpdateUser;