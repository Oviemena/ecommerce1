// "use client";
// import Video from "next-video";
// import onLoadedMetadata from "next-video"
// import { heroVideo, smallHeroVideo } from "@/app/utils"
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// const Hero = () => {
//   const [videoSrc, setVideoSrc] = useState(
//     window.innerWidth < 760 ? smallHeroVideo : heroVideo
//   );
//   const handleVideoSrcSet = () => {
//     if (window.innerWidth < 760) {
//       setVideoSrc(smallHeroVideo);
//     } else {
//       setVideoSrc(heroVideo);
//     }
//   };
  

//   useEffect(() => {
//     window.addEventListener('resize', handleVideoSrcSet)
//     return () => {
//       window.removeEventListener('resize', handleVideoSrcSet)
//     }
//   }, [])
//   useGSAP(() => {
//     gsap.to("#hero", { opacity: 1, delay: 2 });
//     gsap.to("#cta", { opacity: 1, y: -50, delay: 2  })
//   }, []);
//   return (
//     <section className="w-full nav-height bg-black relative">
//       <div className="h-5/6 w-full flex-center flex-col">
//         <p id="hero" className="hero-title">
//           iPhone 15 Pro
//         </p>
//         <div className="md:w-full md:h-3/4">
//           <Video src={videoSrc} className="pointer-events-none" autoPlay muted playsInline controls={false} placeholder="none"/>
//         </div>
//       </div>
//       <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
//         <Link href="#highlights" className="btn">Buy</Link>
//         <p className="font-normal text-xl">From $199/month or $999</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import Video from "next-video";
import { heroVideo, smallHeroVideo } from "@/app/utils"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will run only on the client side
    setIsClient(true);
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-full md:h-3/4">
          <Video src={videoSrc} className="pointer-events-none" autoPlay muted playsInline controls={false} placeholder="none"/>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <Link href="#highlights" className="btn">Buy</Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;

