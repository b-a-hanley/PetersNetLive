import { churchName, email, telephone } from "../Config";

export default function Footer({ buttonArray = [] }) {
  return (
    <footer className="rounded-lg shadow-sm m-4 nav">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
        {/* Brand */}
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

        {/* Dynamic nav */}
        <div className="w-full mt-6">
          <ul className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:space-x-8">
            {buttonArray.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="block px-2 py-1 text-sm text-nav hover:text-primary"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 text-gray sm:mx-auto lg:my-8" />

        {/* Contact */}
        <div className="text-center space-y-1">
          <span className="block text-gray text-sm">{telephone}</span>

          <a
            href={`mailto:${email}`}
            className="block text-gray text-sm text-nav hover:text-primary"
          >
            {email}
          </a>

          <span className="block text-sm text-gray">
            © {churchName}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}