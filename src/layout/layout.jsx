import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import img from "../assets/Group 1116606595.png";
import wish from "../assets/Wishlist.png";
import carzinka from "../assets/Cart1.png";
import user from "../assets/user.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SearchOutlined,
  SendOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';

const Layout = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/homepage">
              <img src={img} alt="Logo" className="h-12 w-auto" />
            </Link>

            <ul className="hidden md:flex items-center gap-8 text-base font-medium">
              <li>
                <Link to="/homepage" className={pathname === "/homepage" ? "text-red-600" : "text-black"}>
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/about" className={pathname === "/about" ? "text-red-600" : "text-black"}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className={pathname === "/" ? "text-red-600" : "text-black"}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" className={pathname === "/login" ? "text-red-600" : "text-black"}>
                  Login
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4 md:gap-8">
              <Input
                placeholder="What are you looking for?"
                suffix={<SearchOutlined />}
                className="hidden md:block w-48 lg:w-72"
              />

              <div className="flex items-center gap-4 md:gap-6">
                <Link to="/wishlist">
                  <img src={wish} alt="Wishlist" className="w-14 h-8" />
                </Link>
                <Link to="/cart">
                  <img src={carzinka} alt="Cart" className="w-14 h-6" />
                </Link>
                <Link to="/account">
                  <img src={user} alt="Account" className="w-14 h-6" />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-2xl"
                >
                  {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>
              </div>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 border-t pt-4 pb-4">
              <ul className="flex flex-col gap-5 text-lg font-medium">
                <li>
                  <Link to="/homepage" className={pathname === "/homepage" ? "text-red-600" : "text-black"}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={pathname === "/about" ? "text-red-600" : "text-black"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className={pathname === "/" ? "text-red-600" : "text-black"}>
                    Signup
                  </Link>
                </li>
                <li>
                  <Link to="/login" className={pathname === "/login" ? "text-red-600" : "text-black"}>
                    Login
                  </Link>
                </li>
              </ul>

              <Input
                placeholder="What are you looking for?"
                suffix={<SearchOutlined />}
                className="mt-5"
              />
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-8 w-full">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-12 mt-auto">
        <section className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <article className="space-y-4">
              <h1 className="text-2xl font-bold">Exclusive</h1>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <Input
                placeholder="Enter your email"
                suffix={<SendOutlined />}
                className="bg-transparent border-white text-white placeholder-gray-400"
              />
            </article>

            <article className="space-y-4">
              <h1 className="text-2xl font-bold">Support</h1>
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </article>

            <article className="space-y-4">
              <h1 className="text-2xl font-bold">Account</h1>
              <p>My Account</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </article>

            <article className="space-y-4">
              <h1 className="text-2xl font-bold">Quick Link</h1>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </article>

            <article className="space-y-4">
              <h1 className="text-2xl font-bold">Social</h1>
              <div className="flex gap-6 text-3xl">
                <FacebookOutlined />
                <LinkedinOutlined />
                <InstagramOutlined />
                <TwitterOutlined />
              </div>
            </article>
          </div>

          <p className="text-center text-gray-500 mt-12">
            © Copyright Rimel 2025. All rights reserved
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Layout;