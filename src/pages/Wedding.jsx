// File: src/pages/Wedding.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Wedding() {
  useEffect(() => {
    // Golden sparkles
    const sparkles = [];
    for (let i = 0; i < 25; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.animationDuration = 3 + Math.random() * 4 + "s";
      sparkle.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(sparkle);
      sparkles.push(sparkle);
    }

    // Petals
    const petals = [];
    const petalColors = ["#FFC0CB", "#FF69B4", "#FFD700"];
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.backgroundColor =
        petalColors[Math.floor(Math.random() * petalColors.length)];
      petal.style.animationDuration = 6 + Math.random() * 5 + "s";
      petal.style.animationDelay = Math.random() * 4 + "s";
      document.body.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      sparkles.forEach((s) => s.remove());
      petals.forEach((p) => p.remove());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-center relative overflow-hidden font-[Poppins]">
      {/* Load Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@700&family=Cinzel:wght@600;700&display=swap"
        rel="stylesheet"
      />

{/* Hero Section */}
<section
  className="min-h-[90vh] flex flex-col items-center justify-center bg-cover bg-center relative px-4"
  style={{
    backgroundImage: "url('/images/wedding-hero-bg.jpg')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

{/* Vinayak/Ganesha Image */}
<motion.img
  src="/images/ganesha-gold.png"
  alt="Lord Vinayak"
  className="w-24 sm:w-32 md:w-40 mb-4 z-10 rounded-full shadow-2xl"
  initial={{ y: -50, scale: 0.85 }}          // start slightly above and smaller
  animate={{ 
    y: [0, -10, 0],                           // gentle up-and-down float
    scale: [1, 1.05, 1]                        // subtle premium scale pulsation
  }}
  transition={{ 
    duration: 3,                               // slow, smooth float
    ease: "easeInOut", 
    repeat: Infinity                            // continuous loop
  }}
/>



  {/* Static Wedding Celebrations */}
  <h1
    className="text-3xl sm:text-4xl md:text-5xl font-[Cinzel] tracking-wide z-10"
    style={{
      color: "#FF69B4", // pink text
      WebkitTextStroke: "0.5px #FFFFFF", // thin white border
    }}
  >
    Wedding Celebrations
  </h1>

  {/* Sliding Names */}
  <motion.h1
    className="font-[Cinzel] text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 z-10"
    style={{ color: "#FFFFFF" }} // pure white
    initial={{ opacity: 0, y: 100 }} // start from bottom
    animate={{ opacity: 1, y: 0 }}   // slide to final position
    transition={{ duration: 2, ease: "easeOut" }} // smooth
  >
    Venkata Sai Ajay ❤️ Leela Mounika
  </motion.h1>

  {/* Sliding Date */}
  <motion.h2
    className="text-lg sm:text-xl mt-3 font-bold relative z-10"
    style={{ fontFamily: "'Playfair Display', serif", color: "#FFD700" }} // gold color
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: "easeOut", delay: 0.3 }} // slight delay for cinematic feel
  >
    15th May 2025
  </motion.h2>
</section>




{/* Marriage Details */}
<section
  className="relative py-16 px-4 text-center text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/marriagebg.png')",
  }}
>
  <div className="absolute inset-0 bg-black/70"></div>
<motion.div
  className="relative z-10 max-w-2xl mx-auto space-y-6"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  {/* Highlighted Title */}
<h2
  className="inline-block px-6 py-3 rounded-xl 
             text-white text-2xl sm:text-3xl font-[Cinzel] font-bold 
             drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
>
  We Are Getting Married
</h2>



  {/* Muhurtham */}
 <div className="bg-white/5 backdrop-blur-md rounded-2xl px-6 sm:px-10 py-6 shadow-2xl border border-white/10">
 <p
  className="text-lg sm:text-xl font-semibold 
             text-white 
             bg-black/80 px-4 py-2 rounded-lg
             drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
>
  Muhurtham on <b>Thursday, 15th May 2025 Night at 1:43 hrs</b>
</p>

  <p
    className="text-sm sm:text-base italic 
               text-white/90 
               drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] mt-2"
  >
    (Early hours of Friday)
  </p>
</div>

</motion.div>


  {/* Live Streaming Section */}
<div className="rounded-2xl border-2 border-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)] overflow-hidden mt-5 max-w-xl mx-auto transition-all duration-500">
  <iframe
    className="w-full h-56 sm:h-64 md:h-80"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="Wedding Live"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

<p className="mt-4 text-center">
  <a
    href="https://youtube.com/YOUR_VIDEO_LINK"
    target="_blank"
    className="text-violet-300 font-semibold underline drop-shadow-[0_0_12px_rgba(167,139,250,0.9)] transition duration-300 hover:text-violet-200"
  >
    👉 Watch Live on YouTube
  </a>
</p>






      {/* Names Again */}
<h1
  className="font-[Cinzel] text-3xl sm:text-4xl mt-10 font-extrabold 
             bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 
             bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
  style={{ fontFamily: "'Cinzel', serif" }}
>
  Venkata Sai & Leela Mounika
</h1>

      </section>
{/* Thank You Section */}
<footer
  className="relative w-full py-20 bg-cover bg-center text-center"
  style={{
    backgroundImage: "url('/images/thankyoubg.png')",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

  <div className="relative z-10">
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-xl"
      style={{ fontFamily: "'Great Vibes', cursive" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      🌸 Thank You 🌸
    </motion.h2>

    <p
      className="mt-4 text-lg sm:text-xl italic drop-shadow-md"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      With Love & Blessings 💖
    </p>

   </div>

  {/* Scroll-to-Top Button */}
  <button
    onClick={scrollToTop}
    className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/20 transition"
  >
    <motion.span
      className="text-white text-xl opacity-80"
      animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 1.4 }}
    >
      ⬆️
    </motion.span>
  </button>
</footer>




      {/* Effects CSS */}
      <style>{`
        .sparkle {
          position: fixed;
          top: -20px;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, rgba(255,215,0,0.9), transparent);
          border-radius: 50%;
          animation: sparkleFall linear infinite;
          opacity: 0.9;
          z-index: 50;
        }
        @keyframes sparkleFall {
          to {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        .petal {
          position: fixed;
          top: -40px;
          width: 18px;
          height: 18px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(45deg);
          animation: petalFall linear infinite;
          opacity: 0.85;
          z-index: 40;
        }
        @keyframes petalFall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Slow blink for hero names */
        .hero-blink {
          animation: blinkSlow 4s infinite ease-in-out;
        }
        @keyframes blinkSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
