import './Home.css'
const Home = () => {

    const handleUserForm = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { name, email, password }
        // console.log(name, email, password)


        // send data to server by using fetch
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('User added successfully')
                event.target.reset()
            })
    }
    return (
        <div>
            <form onSubmit={handleUserForm} className='form-field'>
                <h2 style={{ textAlign: 'center' }}>Add user to database</h2>

                <input type="text" placeholder='name' name='name' id="" required />
                <br />

                <input type="email" placeholder='Email' name='email' id="" required />
                <br />

                <input type="password" placeholder='Password' name="password" id="" />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default Home;