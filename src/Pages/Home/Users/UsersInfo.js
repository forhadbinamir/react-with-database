import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UsersInfo = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you confirm to delete user')
        if (proceed) {
            console.log('deleting users', id)
            const url = `http://localhost:5000/user${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('delete')
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }

                })
        }

    }
    return (
        <div className='' style={{ textAlign: 'center' }}>
            <h2>Users Info List: {users.length}</h2>
            {
                users.map(user => <li style={{ border: '1px solid', listStyle: 'none', padding: "5px", width: '50%', margin: 'auto', marginBottom: '5px' }} key={user._id}> Name: {user.name} Email: {user.email} <Link to={`/update/${user._id}`}><button> Update</button></Link> <button onClick={() => handleDeleteUser(user._id)}> Delete</button> </li>)

            }

        </div >
    );
};

export default UsersInfo;