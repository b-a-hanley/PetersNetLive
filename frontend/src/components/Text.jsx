export function Bannr({churchName, children }) {
  return (
    <div className="text-center px-6 py-6">
      <h1 className="text-base font-semibold leading-7 text-primary">{churchName}</h1>
      <p className="mt-2 text-4xl font-bold tracking-tight text-colour sm:text-5xl">{children}</p>
    </div>
  );
}

export function AltBanner({title, subtitle}) {
  return (
    <div className="text-center mb-12">
        <p className="text-3xl font-bold text-colour">{title}</p>
        <p className="mt-2 text-lg text-gray-700">{subtitle}</p>
    </div>
  );
}

export function Quote({ quote, reference }) {
  return (
    <div className="text-center px-6">
      <p className="mt-2 text-4xl font-bold tracking-tight text-colour sm:text-5xl">{quote}</p>
      <h3 className="text-base font-semibold leading-7 text-primary">{reference}</h3>
    </div>
  );
}

export function Subtitle({ children }) {
  return (
    <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{children}</p>
  );
}

export function BaseText({ children }) {
  return (
    <p className="mt-6 text-xl leading-8 text-colour">{children}</p>
  );
}

export function Address({line1, line2, line3, AddressText="Address"}) {
  return (
    <div className="py-6">
      <p className="mt-2 py-6 text-2xl font-bold tracking-tight text-colour sm:text-3xl">{AddressText}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-colour sm:text-xl">{line1}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-colour sm:text-xl">{line2}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-colour sm:text-xl">{line3}</p>
    </div>
  );
}
