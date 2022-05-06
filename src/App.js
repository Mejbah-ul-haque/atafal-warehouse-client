import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Answer1 from './Pages/Blogs/Answer1/Answer1';
import Answer2 from './Pages/Blogs/Answer2/Answer2';
import Answer3 from './Pages/Blogs/Answer3/Answer3';
import Answer4 from './Pages/Blogs/Answer4/Answer4';
import Blog from './Pages/Blogs/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/addnewitem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/answer1' element={<Answer1></Answer1>}></Route>
        <Route path='/answer2' element={<Answer2></Answer2>}></Route>
        <Route path='/answer3' element={<Answer3></Answer3>}></Route>
        <Route path='/answer4' element={<Answer4></Answer4>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
