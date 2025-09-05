"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quatumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import puslseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
   <div className="py-8 md:py-12 bg-white ">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <motion.div 
      className="flex gap-14 flex-none pr-14"
      animate={{
        translateX: "-50%",
      }}
      transition={{
        duration: 20,
        repeat:Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      >
        <Image className="logo-ticker-image"  src={acmeLogo} alt="Acem Logo" />
        <Image className="logo-ticker-image" src={quatumLogo} alt="Quatum Logo"/>
        <Image className="logo-ticker-image" src={echoLogo} alt="Echo Logo"/>
        <Image className="logo-ticker-image" src={celestialLogo} alt="Celestial Logo"/>
        <Image className="logo-ticker-image" src={puslseLogo} alt="Puslse Logo"/>
        <Image className="logo-ticker-image" src={apexLogo} alt="Apex Logo"/>

        {/* Second set of logos for animation*/}
        <Image className="logo-ticker-image"  src={acmeLogo} alt="Acem Logo" />
        <Image className="logo-ticker-image" src={quatumLogo} alt="Quatum Logo"/>
        <Image className="logo-ticker-image" src={echoLogo} alt="Echo Logo"/>
        <Image className="logo-ticker-image" src={celestialLogo} alt="Celestial Logo"/>
        <Image className="logo-ticker-image" src={puslseLogo} alt="Puslse Logo"/>
        <Image className="logo-ticker-image" src={apexLogo} alt="Apex Logo"/>

      </motion.div>
      </div>
    </div>
  </div>
)};
