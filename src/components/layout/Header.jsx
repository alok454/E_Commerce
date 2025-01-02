import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const [sideNav, setSideNav] = useState(false);
  const products = useSelector((state)=>state.cart.products)

  return (
    <>
      <header className="sticky top-0 w-full bg-white z-50 drop-shadow">
        <nav className="flex justify-between items-center py-3 sm:py-5 px-6 md:px-20 text-xl font-semibold">
          <div className="">
            <NavLink to="/">
              <p
                className="font-semibold cursor-pointer text-2xl sm:text-3xl"
                onClick={() => sideNav && setSideNav(!sideNav)}
              >
                Only<span className="text-[#fca311]">Shop</span>
              </p>
            </NavLink>
          </div>

          

          {sideNav ? (
            <div className="bg-[#f5f6fa] w-72 absolute top-0 right-0 text-center h-screen flex justify-center items-center z-10">
              <RxCross2
                className="absolute top-4 right-4 text-3xl cursor-pointer"
                onClick={() => setSideNav(!sideNav)}
              />
              <ul className="flex gap-10 cursor-pointer flex-col">
                <NavLink to="/">
                  <li
                    className="hover:text-[#fca311]"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    Home
                  </li>
                </NavLink>
                <NavLink to="/signin">
                  <li
                    className="hover:text-[#fca311]"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    Sign in
                  </li>
                </NavLink>
              </ul>
            </div>
          ) : (
            ""
          )}

          <div className="flex gap-10 items-center">

            <div>
              <ul className="hidden sm:flex gap-8 cursor-pointer text-2xl">
                <NavLink to="/">
                  <li className="hover:text-[#fca311]">Home</li>
                </NavLink>
                <NavLink to="/signin">
                  <li className="hover:text-[#fca311]">Sign in</li>
                </NavLink>
              </ul>
            </div>
            
            <div className="relative">
              <p className="absolute -top-3 left-1/2 text-base text-center leading-6 w-6 h-6 bg-[red] text-white rounded-full">
                {products.length}
              </p>
              <NavLink to="/cart">
                <FaCartShopping  className="cursor-pointer text-[27px] sm:text-3xl" />
              </NavLink>
            </div>

            <p
              className="sm:hidden text-2xl sm:text-3xl cursor-pointer"
              onClick={() => setSideNav(!sideNav)}
            >
              <GiHamburgerMenu />
            </p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
