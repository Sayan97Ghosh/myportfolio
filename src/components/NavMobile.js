import React, { useEffect, useState } from "react";

// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

// import navigation data
import { navigation } from "../data";

// import components
import Socials from "./Socials";

// import framer
import { motion } from "framer-motion";

// import Link
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 120,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0  h-full w-full flex flex-col justify-center items-center transition-all duration-300 `}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>
        <ul className="mt-10 top-10 absolute">
          {navigation.map((item, idx) => {
            return (
              <li
                key={idx}
                className="flex justify-center items-center w-15"
                style={{ marginTop: "40px" }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
