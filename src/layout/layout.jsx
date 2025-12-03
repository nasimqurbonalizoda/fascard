import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import img from "../assets/Group 1116606595.png"
import wish from "../assets/Wishlist.png"
import carzinka from "../assets/Cart1.png"
import user from "../assets/user.png"
import { FacebookOutlined, HeartOutlined, InstagramOutlined, LinkedinOutlined, SearchOutlined, SendOutlined, ShoppingCartOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import '../index.css'
import { useDispatch } from 'react-redux'

const Layout = () => {
  const { pathname } = useLocation()
  const dispatch=useDispatch()
  return (
    <div>
      <header className='max-w-[1400px] m-auto p-4'>
        <nav className='flex justify-between items-center'>
          <img src={img} style={{ width: '150px', height: "50px", marginLeft: "50px" }} alt="" />
          <div className='flex items-center gap-[170px]'>
            <ul className='flex items-center gap-[30px]'>
              <Link to="/homepage" style={{ color: pathname == "/homepage" ? "red" : "black" }}>Homepage</Link>              <Link to="/contact" style={{ color: pathname == "/contact" ? "red" : "black" }}>Contact</Link>
              <Link to="/about" style={{ color: pathname == "/about" ? "red" : "black" }}>About</Link>
              <Link to="/" style={{ color: pathname == "/" ? "red" : "black" }}>Signup</Link>
            </ul>
          </div>
          <div className='flex items-center gap-[30px]'>
            <Input style={{ width: "300px" }}  placeholder="What are you looking for?" suffix={<SearchOutlined />} />
            <Link to="/wishlist" style={{ color: pathname == "/wishlist" ? "red" : "black" }}>
              <img src={wish} style={{ width: '32px', height: "32px" }} alt="" />
            </Link>
            <Link to="/cart" style={{ color: pathname == "/cart" ? "red" : "black" }}>
              <img src={carzinka} style={{ width: '24px', height: "24px" }} alt="" />
            </Link>
            <Link to="/account" style={{ color: pathname == "/account" ? "red" : "black" }}>
            <img src={user} style={{ width: '24px', height: "24px" }} alt="" />
            </Link>
          </div>
        </nav>
      </header>

      <div style={{ display: 'flex', gap: "20px", margin: "20px" }}>
        {/* <Link to="/" style={{ color: pathname == "/" ? "red" : "black" }}>Signup</Link> */}
        <Link to="/login" style={{ color: pathname == "/login" ? "red" : "black" }}>Login</Link>
        <Link to="/homes" style={{ color: pathname == "/homes" ? "red" : "black" }}>Homes</Link>
        <Link to="/products" style={{ color: pathname == "/products" ? "red" : "black" }}>Products</Link>
        <Link to="/detail" style={{ color: pathname == "/detail" ? "red" : "black" }}>Detail</Link>
        <Link to="/chekout" style={{ color: pathname == "/chekout" ? "red" : "black" }}>Chekout</Link>
      </div>
      <main className='max-w-[1400px] m-auto p-4'>
        <Outlet />
      </main>
      <footer className='max-w-[1600px] m-auto bg-[#000000] p-10'>
        <section className='max-w-[1400px] m-auto text-[white] p-4'>
          <div className='flex justify-between items-start gap-[130px]'>
            <article className='flex flex-col gap-3 w-60'>
              <h1 className='text-[25px] font-bold'>Exclusive</h1>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p><br />
              <Input placeholder='Enter your email' suffix={<SendOutlined />} />
            </article>
            <article className='flex flex-col gap-3 w-60'>
              <h1 className='text-[25px] font-bold'>Support</h1>
              <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </article>
            <article className='flex flex-col gap-3 w-60'>
              <h1 className='text-[25px] font-bold'>Account</h1>
              <p>My Account</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </article>
            <article className='flex flex-col gap-3 w-60'>
              <h1 className='text-[25px] font-bold'>Quick Link</h1>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </article>
            <article className='flex flex-col gap-3 w-60'>
              <h1 className='text-[25px] font-bold'>Social </h1>
              <div className='flex items-center gap-[15px]'>
                <FacebookOutlined style={{ fontSize: "30px" }} />
                <LinkedinOutlined style={{ fontSize: "30px" }} />
                <InstagramOutlined style={{ fontSize: "30px" }} />
                <TwitterOutlined style={{ fontSize: "30px" }} />
              </div>
            </article>
          </div>
          <div className='relative top-[30px] text-center'>
            <p className='text-[grey] font-bold'>@Copyright Rimel 2022. All right reserved</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Layout

