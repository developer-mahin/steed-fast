import { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { navItems, TNavItems } from "./navItems";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className="lg:grid flex items-center justify-between grid-cols-3 bg-[#EAE8E8] py-[18px] px-5 relative border-b-2 border-gray-300/80 shadow-md">
        <div className="flex items-center">
          <div className="cursor-pointer xl:hidden block flex-col gap-1.5">
            {isOpen ? (
              <HiX
                onClick={() => setIsOpen(!isOpen)}
                className="size-9 cursor-pointer"
              />
            ) : (
              <HiMenuAlt2
                onClick={() => setIsOpen(!isOpen)}
                className="size-9 cursor-pointer"
              />
            )}
          </div>
          <ul
            className={`flex xl:items-center lg:space-x-4 rounded-lg xl:flex-row flex-col lg:justify-end xl:static absolute z-50 transition-all duration-300 ${
              isOpen
                ? "left-0 top-20 bg-[#000000d4] w-[320px] py-3 px-4 translate-y-0 h-[500vh]"
                : "-left-[650px] translate-y-0"
            }`}
          >
            {navItems.map((item: TNavItems, i: number) => (
              <NavItem item={item} key={i} />
            ))}
          </ul>
        </div>

        <div className="text-center text-[20px] font-[600] tracking-[12px]">
          JAMES MICHELLE
        </div>

        <div className="flex justify-end items-center space-x-4">
          <ul className="flex items-center space-x-4">
            <li className="lg:block hidden">
              <Link
                to="/"
                className="text-black hover:text-yellow-500 transition"
              >
                Search
              </Link>
            </li>
            <li className="lg:block hidden">
              <Link
                to="/"
                className="text-black hover:text-yellow-500 transition"
              >
                Account
              </Link>
            </li>
          </ul>
          <div className="cart flex items-center gap-2">
            <Link to="/" className="cart-text text-black lg:block hidden">
              Cart
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="cart-svg w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
