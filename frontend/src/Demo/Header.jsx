import { useState } from "react";
import Logo from "../../public/assets/shared/Logo.png";
import LogoAlt from "../../public/assets/shared/Logo-alt.png";
import {churchName, colour} from "./Config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <head>
          <title>PetersNet - Affordable Church Websites</title>
          <meta
            name="description"
            content="Affordable church website design and Christian web development — mobile-friendly sites built to support ministries and grow God's Kingdom."
          />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/x-icon" href="/public/assets/Logo-flav.png" />
        </head>
      <link rel="stylesheet" href={"/assets/css/"+colour+".css"}/>
      <nav className="nav">
        <link rel="icon" type="image/x-icon" href="/public/assets/Logo-flav.ico"></link>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="relative w-12 h-12">
              <img
                src={Logo}
                alt="Logo"
                className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={LogoAlt}
                alt="Logo Alt"
                className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <span className="self-center text-2xl text-nav hover:text-primary font-semibold">{churchName}</span>
          </a>
          
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden bg-action group"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 stroke-white group-hover:stroke-black hover:stroke-black transition-colors duration-200"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>

          {/* Menu */}
          <div className={`${isOpen ? "" : "hidden"} w-full md:flex md:w-auto`} id="mobile-menu">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
              <li><a href="our-story" className="block px-4 py-2 text-nav hover:text-primary">Our Story</a></li>
              <li><a href="ben-hanley" className="block px-4 py-2 text-nav hover:text-primary">Our Team</a></li>
              <li><a href="pricing" className="block px-4 py-2 text-nav hover:text-primary">Pricing</a></li>
              <li><a href="http://localhost:5173/" className="block text-nav px-4 py-2 hover:text-primary">Home</a></li>
              <li>
                <a
                  href="contact-us"
                  className="block px-4 py-2 bg-action text-nav rounded-lg shadow-lg text-white hover:bg-action/80"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
