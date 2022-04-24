import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import UsersInfo from './Pages/Home/Users/UsersInfo';
import UpdateUser from './Pages/Home/UpdateUser/UpdateUser';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<UsersInfo></UsersInfo>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
