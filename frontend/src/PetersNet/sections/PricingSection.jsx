import { Page } from "../../components/Section";
import { AltBanner } from "../../components/Text";


export default function PricingSection() {
    return (
        <Page>
            <div className="max-w-7xl mx-auto">
                <AltBanner 
                    title="Affordable Church Websites"
                    subtitle="Choose the plan that fits your church’s needs."
                />

                {/* Pricing Cards*/}
                <div className="grid gap-8 lg:grid-cols-3">

                    {/*Starter Card*/}
                    <div className="flex flex-col rounded-xl highlight-ring shadow-xl bg-div-background p-8 text-colour border-action hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                        <p className="text-gray-700 mb-6">Affordable signposting to your church.</p>

                        <div className="flex items-baseline justify-center mb-6">
                            <span className="text-5xl font-extrabold">£12.30</span>
                            <span className="text-colour ml-2 text-gray-500">/month</span>
                        </div>

                        <ul className="mb-6 space-y-3 text-left">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Bespoke 3 Page Website</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Hosting included</p>
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
                                <p className="text-colour">Free bug fixing</p>
                            </li>
                        </ul>
                        <div className="mt-auto">
                            <p className="mb-2 text-colour">One-off setup cost: <span className="font-semibold">£300</span></p>
                            <p className="mb-6 text-colour">Modifications: <span className="font-semibold">£20/hour</span></p>
                            <a href="/starter" className="block text-center bg-action text-white font-medium rounded-lg py-3 hover:opacity-90 transition-opacity">Get Started</a>
                        </div>
                    </div>

                    {/*Premium Card*/}
                    <div className="flex flex-col rounded-xl highlight-ring shadow-xl bg-div-background p-8 text-colour border-action hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                        <p className="text-colour mb-6">Best deal for a comprehensive website.</p>

                        <div className="flex items-baseline justify-center mb-6">
                            <span className="text-5xl font-extrabold">£15.90</span>
                            <span className="text-colour ml-2 text-gray-500">/month</span>
                        </div>

                        <ul className="mb-6 space-y-3 text-left">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Bespoke 9 Page Website</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Hosting included</p>
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
                                <p className="text-colour">Designed for mobiles and laptops</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Integration with ChurchSuite & YouTube</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Free bug fixing</p>
                            </li>
                        </ul>
                        <div className="mt-auto">
                            <p className="text-colour mb-2">One-off setup cost: <span className="font-semibold">£400</span></p>
                            <p className="text-colour mb-6">Modifications: <span className="font-semibold">£20/hour</span></p>
                            <a href="/premium" className="block text-center bg-action text-white font-medium rounded-lg py-3 hover:opacity-90 transition-opacity">Get Started</a>
                        </div>
                    </div>

                    {/*Enterprise Card*/}
                    <div className="flex flex-col rounded-xl highlight-ring shadow-xl bg-div-background p-8 text-colour border-action hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                        <p className="text-gray-700 mb-6">Best for extra large and growing churches.</p>

                        <div className="flex items-baseline justify-center mb-6">
                            <span className="text-5xl font-extrabold">£24.50</span>
                            <span className="ml-2 text-gray-500">/month</span>
                        </div>

                        <ul className="mb-6 space-y-3 text-left">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Bespoke 20+ Page Website (Additional fee for any additional)</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Hosting included</p>
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
                                <p className="text-colour">Designed for mobiles and laptops</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Integrates with ChurchSuite & YouTube</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">Free bug fixing</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-colour">1 Hour of free development/Month</p>
                            </li>
                        </ul>
                        <div className="mt-auto">
                            <p className="mb-2 text-colour">One-off setup cost: <span className="font-semibold">£600</span></p>
                            <p className="mb-6 text-colour">Modifications: <span className="font-semibold">£25/hour</span></p>
                            <a href="/enterprise" className="block text-center bg-action text-white font-medium rounded-lg py-3 hover:opacity-90 transition-opacity">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}