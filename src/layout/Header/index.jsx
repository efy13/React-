import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  CircleUser,
  Heart,
  RefreshCcw,
  ShoppingCart,
} from "lucide-react";
import { clsx } from "clsx";
import { navBar } from "../../constant/Navitems";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="container mx-auto px-4  flex-wrap sm:px-6 lg:px-10 flex items-center justify-between py-8">
        <div className="flex items-center gap-4 sm:gap-10">
          <img
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/logo-black.png"
            alt="logo"
            className="h-6 sm:h-8"
          />

          <ul
            className={clsx(styles.items, "hidden sm:flex items-center gap-6")}
          >
            {navBar &&
              navBar.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li key={index} className="flex items-center gap-1 text-sm">
                    {item.name}
                    <ChevronDown size={16} />
                  </li>
                </Link>
              ))}
          </ul>
        </div>
        <div className={clsx(styles.right)}>
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Search />
            </li>
            <li
              className="hidden sm:flex items-center gap-2"
              onClick={() => toggleModal(isOpen)}
            >
              <CircleUser />
              Account
            </li>
            <li>
              <Heart />
            </li>
            <li>
              <RefreshCcw />
            </li>
            <li>
              <ShoppingCart />
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl flex rounded-lg overflow-hidden shadow-lg">
            {}
            <div className="w-1/2 bg-gray-100 hidden md:block">
              <img
                src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/collection-speakers.jpg"
                alt="Login Visual"
                className="object-cover w-full h-full"
              />
            </div>

            {}
            <div className="w-full md:w-1/2 p-8 relative bg-white">
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
              >
                &times;
              </button>

              <h2 className="text-2xl font-semibold mb-6">Log in</h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Username or email address *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password *
                  </label>
                  <div className="flex w-full items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-transparent outline-none  "
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 w-5 h-5 hover:text-black"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <button className="  bg-black w-full text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-800">
                  Log in
                </button>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="text-sm">
                    Remember me
                  </label>
                </div>

                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-sm text-black font-medium hover:underline"
                  >
                    Lost your password?
                  </a>
                </div>

                <p className="text-xs text-gray-500 mt-6">
                  By continuing, you accept the Website Regulations, Regulations
                  for the sale of alcoholic beverages and the{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </form>

              <div className="mt-6 text-sm text-center">
                You don’t have an account yet?{" "}
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
