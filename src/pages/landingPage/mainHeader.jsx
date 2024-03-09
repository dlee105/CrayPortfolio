import React, { useEffect, useState } from "react";
import LandingVideo from "../../assets/videos/landingVideo.mp4";
import landingGif from "../../assets/videos/landingGif.gif";

import "./styles/mainHeader.css";

const LANDING_CSS = {
  header: "fixed top-0 left-0 w-full h-full header-transition",
  logo: "absolute header-transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 caveat-700 text-crimson text-9xl",
};

const AT_TOP_CSS = {
  header: "bg-black fixed top-0 left-0 w-full h-28 header-transition",
  logo: "absolute header-transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-1 text-crimson caveat-700 text-5xl ",
};

function MainHeader() {
  const [navStyle, setNavStyle] = useState();
  const [logoStyle, setLogoStyle] = useState();
  const [initialScreen, setInitialScreen] = useState(true);
  const [atTop, setAtTop] = useState(true);

  function closeLandingPage() {
    setNavStyle(AT_TOP_CSS.header);
    setLogoStyle(AT_TOP_CSS.logo);
    setInitialScreen(false);
    const body = document.querySelector("body");
    body.style.overflow = "";
  }

  useEffect(() => {
    // render once
    setNavStyle(LANDING_CSS.header);
    setLogoStyle(LANDING_CSS.logo);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }, []);

  const videoElement = (
    <>
      <video
        id="heroVid"
        aria-hidden="true"
        class="relative min-w-full min-h-full absolute object-cover darken"
        autoPlay
        playsinline
        muted
        loop
      >
        <source src={LandingVideo} type={"video/mp4"} />
      </video>
      <a
        onClick={closeLandingPage}
        href="#_"
        class="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 font-bold text-white rounded-lg group"
      >
        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-pink-950 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-red-950 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
        <span class="relative px-10">SHOP NOW</span>
      </a>
    </>
  );

  return (
    <>
      <header class={navStyle}>
        {initialScreen ? videoElement : <></>}
        {initialScreen ? (
          <div class={logoStyle}>Cray</div>
        ) : (
          <div class={logoStyle}>Cray</div>
        )}
      </header>
    </>
  );
}

export default MainHeader;
