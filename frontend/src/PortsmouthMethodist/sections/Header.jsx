import { useState } from "react";
import Logo from "../../../public/assets/PortsMethodist/Logo.png";
import LogoBlue from "../../../public/assets/PortsMethodist/Logo-blue.png";
import { churchName, colour } from "../Config";

export default function Header({ buttonArray = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ⚠️ NOTE: ideally move this to index.html or use React Helmet */}
      <title>{churchName}</title>
      <meta
        name="description"
        content="Affordable church website design and Christian web development — mobile-friendly sites built to support ministries and grow God's Kingdom."
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/assets/Logo-flav.png" />

      <link rel="stylesheet" href={`/assets/css/${colour}.css`} />

      <nav className="nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-">

          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse group pb-4 pt-2">
            <div className="relative py-2 w-12 h-12">
              <img
                src={Logo}
                alt="Logo"
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={LogoBlue}
                alt="Logo hover"
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <span className="self-center text-2xl text-nav hover:text-primary font-semibold">
              {churchName}
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden bg-action group"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 stroke-white group-hover:stroke-black transition-colors duration-200"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>

          {/* Nav links (dynamic) */}
          <div className={`${isOpen ? "" : "hidden"} w-full md:flex md:w-auto`}>
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
              {buttonArray.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className={
                      item.cta
                        ? "block px-4 py-2 bg-action text-white rounded-lg shadow-lg hover:bg-action/80"
                        : "block px-4 py-2 text-nav hover:text-primary"
                    }
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}