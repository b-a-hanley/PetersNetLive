import { altFromPath } from "../automation/Config";

export function TabletButton({path, children}) {
  return (
    <div className="flex p-10 bg-white ring-button flex-col justify-center rounded-lg md:justify-start">
      <a href={path}>
          {children}
      </a>
    </div>
  );
}

export function PriceCard() {
    <div className="flex flex-col rounded-xl highlight-ring shadow-lg bg-div-background p-8 text-colour border-2 border-action hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
        <p className="text-gray-700 mb-6">Best for extra large and growing churches.</p>

        <div className="flex items-baseline justify-center mb-6">
            <span className="text-5xl font-extrabold">£18.60</span>
            <span className="ml-2 text-gray-500">/month</span>
        </div>

        <ul className="mb-6 space-y-3 text-left">
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">Bespoke 20+ Page Website</p>
            </li>
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">Premium Hosting & High Traffic Optimised</p>
            </li>
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">Custom Domain</p>
            </li>
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">2 Domain emails (admin@yourchurch.uk)</p>
            </li>
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">Designed for mobiles and laptops</p>
            </li>
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">Integrates with ChurchSuite, Instagram & YouTube</p>
            </li>
            <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="text-colour">Free bug fixing</p>
            </li>
        </ul>
        <div className="mt-auto">
            <p className="mb-2 text-colour">One-off setup cost: <span className="font-semibold">£500</span></p>
            <p className="mb-6 text-colour">Modifications: <span className="font-semibold">£35/hour</span></p>
            <a href="/enterprise" className="block text-center bg-action text-white font-medium rounded-lg py-3 hover:opacity-90 transition-opacity">Get Started</a>
        </div>
    </div>
}

export function PriceGrid({content}) {
    <div className="flex flex-col rounded-xl highlight-ring shadow-lg bg-div-background p-8 text-colour border-2 border-action hover:shadow-2xl transition-shadow duration-300">
        {content}
    </div>
}

export function TeamCard({path, textcontent}) {
    <>
        <div className="items-center bg-div-background rounded-lg shadow sm:flex">
            <div className="flex justify-center md:justify-start">
                <img className="h-auto max-w-xs rounded-lg shadow-lg" 
                    src={path} 
                    alt={altFromPath}/>
            </div>
            <div className="p-5">
                {textcontent}
            </div>
        </div> 
    </>
}

export function TeamGrid({content}) {
    <>
        <div className="grid gap-8 px-6 mb-6 lg:mb-16 md:grid-cols-2">
            {content}
        </div>
    </>
}