import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
