import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Shipping from "./pages/shipping"
import Return from "./pages/return"
import Garant from "./pages/garant"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import Basket from "./pages/basket"
import Favourites from "./pages/favourites"
import Allproducts from "./pages/allproducts"
import Admin from "./pages/admin"
import Notfound from "./pages/notfound"
import Login from "./pages/login"
import Auth from "./pages/auth/Auth"


function App() {

  return (
    <>
    <p className="explain">Assalomu aleykum vercel yaxshi ishlamay qolyapti <br />shuning uchun manabu github linkdan olibtekshirsangiz yaxshiroq bolardi: <br />https://github.com/Umiroff/13760month8.git</p>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/products" element={<Allproducts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path="/garant" element={<Garant/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='/admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
