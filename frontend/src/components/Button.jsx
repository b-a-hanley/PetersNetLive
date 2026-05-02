export function RingButton({link, text}) {
  return (
    <a href={link}>
      <div className="rounded-3xl mx-6 p-8 ring-1 ring-button transition">
        <h3 className="text-lg font-semibold leading-8">{text}</h3>
      </div>
    </a>
  );
}

export function CallToActionButton({link, text}) {
  return (
    <a href={link} className="block px-4 py-2 bg-action rounded-lg shadow-2xl text-white hover:bg-action/80">
        {text}
    </a>
  );
}


/* 
  buttonArray={[
    { text: "Email", path: "mailto:benhanley321@gmail.com" },
    { text: "LinkedIn", path: "https://www.linkedin.com/in/ben-hanley-524b94253/" },
    { text: "Github", path: "https://github.com/b-a-hanley" },
    { text: "PDF CV", path: "/cv.pdf" }
  ]}
*/
export function ButtonGroup({text = "More", buttonArray}) {
  return (
    <>
      <p className="mt-2 py-4 text-xl sm:text-2xl font-bold tracking-tight text-colour">
        {text}
      </p>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        {buttonArray.map((btn, index) => (
          <a
            key={index}
            href={btn.path}
            className={`
              flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action
              ${index === 0 ? "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-br-none" : ""}
              ${index === buttonArray.length - 1 ? "rounded-b-lg sm:rounded-r-lg sm:rounded-tl-none sm:rounded-bl-none" : ""}
              ${index !== 0 && index !== buttonArray.length - 1 ? "rounded-none" : ""}
            `}
          >
            {btn.text}
          </a>
        ))}
      </div>
    </>
  );
}

/* 
  buttonArray={[
    { text: "Email", path: "mailto:benhanley321@gmail.com" },
    { text: "LinkedIn", path: "https://www.linkedin.com/in/ben-hanley-524b94253/" },
    { text: "Github", path: "https://github.com/b-a-hanley" },
    { text: "PDF CV", path: "/cv.pdf" }
  ]}
*/
export function FooterButtons({buttonArray}) {
  return (
    <>
      <div className="mx-auto max-w-4xl px-2 py-12 text-center">
        <p className="mt-2 text-2xl font-bold tracking-tight text-colour sm:text-2xl">Read more</p>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {buttonArray.map((btn) => (
          <a href={btn.path}>
            <div className="rounded-3xl mx-6 p-8 ring-1 ring-button transition">
              <h3 className="text-lg font-semibold leading-8">{btn.text}</h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}