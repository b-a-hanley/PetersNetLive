import {altFromPath} from "../automation/Config";
import { useState } from "react";
import { ButtonGroup } from "./Button";

export function Page({children}) {
  return (
    <div className="bg-section-background shadow-xl justify-center mx-6 my-6 rounded-xl sm:py-32">
        {children}
    </div>
  );
}

export function Row({children, cols=2}) {
  return (
    <div className={"grid grid-cols-1 gap-8 items-center py-12 px-6 md:grid-cols-"+cols}>
      {children}
    </div>
  );
}

export function Divider({children}) {
  return (
    <div className="px-4 py-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-center shadow-lg bg-div-background rounded-lg py-6 px-4 sm:px-6">
          {children}
        </div>
    </div>
  );
}

export function TextContent({ children, full = false }) {
  return (
    <div
      className={`
        mx-auto max-w-2xl text-center text-2xl md:text-left
        ${full ? "md:col-span-2" : ""}
      `}
    >
      {children}
    </div>
  );
}

export function Img({ path, shadow = true }) {
  return (
    <div className="flex justify-center md:justify-center md:order-2">
      <img
        className={
          "h-auto max-w-full rounded-lg " + (shadow ? "shadow-lg" : "")
        }
        src={path}
        alt={altFromPath(path)}
      />
    </div>
  );
}

export function Hero({ path, children, top=72, bottom=20}) {
  return (
    <div
      className={`
        bg-cover bg-center justify-center
      `}
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
      <div className="mx-auto max-w-7xl lg:px-8 p-6">
        <div style={{ paddingTop: top }}></div>
        <div className="mx-auto max-w-4xl py-4 rounded-lg text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-shadow-lg text-white sm:text-5xl">
            {children}
          </p>
        </div>
        <div style={{ paddingBottom: bottom }}></div>
      </div>
    </div>
  );
}

export function HeroDiv({ path, children, top=72, bottom=20}) {
  return (
    <div
      className={`
        bg-cover bg-center justify-center
      `}
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
      <div className="mx-auto max-w-7xl lg:px-8 p-6">
        <div style={{ paddingTop: top }}></div>
        <div className="mx-auto max-w-4xl py-4 rounded-lg text-center"> 
            {children} 
        </div>
        <div style={{ paddingBottom: bottom }}></div>
      </div>
    </div>
  );
}
 
export function GoogleMap({path}) {
  return (
    <div className="mx-6 my-12 px-6">
      <iframe
        src={path}
        className="w-full h-[450px] rounded-xl shadow-lg border-0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}

// profileArray={[
//     { 
//        name: "Rob",
//        role: "Vicar",
//        desc: "Rob is the vicar at St Mary’s and leads our church family.",
//        photo: "rob.png",
//        buttonArray: [
//            text: "Contact me"
//            path: "mailto:vicar@church.com"
//        ]
//     },
//     { 
//        name: "Grace",
//        role: "Administrator",
//        desc: "Grace helps keep everything running smoothly in the church office.",
//        photo: "grace.png",
//        buttonArray: [
//            text: "Contact me"
//            path: "mailto:admin@church.com"
//        ]
//     },
//     { 
//        name: "David",
//        role: "Warden",
//        desc: "David is our church warden, taking care of the practical side of church life.",
//        photo: "david.png",
//        buttonArray: [
//            { text: "Contact me", path: "mailto:warden@church.com" },
//            { text: "His Story", path: "/davids-story" }
//        ]
//     },
//     { 
//        name: "Sean",
//        role: "Mission Partner",
//        desc: "Rob is the vicar at St Mary’s and leads our church family.",
//        photo: "sean.png",
//        buttonArray: [
//            { text: "Contact me", path: "mailto:mission@church.com" },
//            { text: "His Story", path: "/seans-story" }
//        ]
//      }
//   ]}

export function ProfileGrid({ profileArray }) {
  const [imgError, setImgError] = useState({});

  return (
    <div className="grid gap-8 px-6 mb-6 lg:mb-16 md:grid-cols-2">
      {profileArray.map((profile, index) => (
        <div
          key={index}
          className="items-center bg-div-background rounded-lg shadow sm:flex"
        >
          {/* Image */}
          <div className="flex justify-center md:justify-start p-4">
            {profile.photo && !imgError[index] ? (
              <div className="w-35 h-40 overflow-hidden rounded-lg shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src={profile.photo}
                  alt={profile.name}
                  onError={() =>
                    setImgError((prev) => ({
                      ...prev,
                      [index]: true,
                    }))
                  }
                />
              </div>
            ) : (
              <div className="w-40 h-40 flex items-center justify-center">
                <i className="fa-solid fa-address-card text-6xl"></i>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="p-5">
            <h3 className="text-2xl font-bold tracking-tight text-colour">
              {profile.name}
            </h3>
            <span className="text-xl text-colour">
              {profile.role}
            </span>
            <p className="mt-3 mb-4 font-light text-colour">
              {profile.desc}
            </p>

            <ButtonGroup buttonArray={profile.buttonArray} />
          </div>
        </div>
      ))}
    </div>
  );
}