import {churchName} from "./Config";

export default function Footer() {
  return (
    <footer className="rounded-lg shadow-sm m-4 nav">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl text-nav font-semibold whitespace-nowrap">
              {churchName}
            </span>
          </a>
        </div>

        {/* Combined footer nav */}
        <div className="w-full mt-6">
          <ul className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:space-x-8">
            <li>
              <a href="/our-story" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Our Story
              </a>
            </li>
            <li>
              <a href="/ben-hanley" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Our Team
              </a>
            </li>
            <li>
              <a href="/pricing" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact-us" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Church Websites
              </a>
            </li>
            <li>
              <a href="/" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Christian Website Builder
              </a>
            </li>
            <li>
              <a href="/" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Church Website Hosting
              </a>
            </li>
            <li>
              <a href="/maintenance" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Church Website Updates
              </a>
            </li>
            <li>
              <a href="/maintenance" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Church Website Maintenance
              </a>
            </li>
            <li>
              <a href="/maintenance" className="block px-2 py-1 text-sm text-nav hover:text-primary">
                Church Website Fixes
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 text-gray sm:mx-auto lg:my-8" />

        <div className="text-center space-y-1">
          <span className="block text-gray text-sm">07455335292</span>
          <a
            href="mailto:benhanley321@gmail.com"
            className="block text-gray text-sm text-nav hover:text-primary"
          >
            benhanley321@gmail.com
          </a>
          <span className="block text-sm text-gray">
            © {churchName}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
