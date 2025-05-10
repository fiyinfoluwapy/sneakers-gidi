import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f0f0f] text-white p-8 text-center">
      <Image
        src="/logo-white.png" 
        alt="Sneakers Gidi Logo"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className="text-4xl sm:text-5xl font-bold font-['Playfair_Display'] mb-4 tracking-tight">
        Coming Soon
      </h1>
      <p className="text-lg text-white/80 max-w-md mb-8">
        We&rsquo;re cooking up something fresh for your feet. <br />
        Stay tuned. Stay original. Stay Gidi.
      </p>
      <a
        href="#"
        className="bg-[#C44A00] hover:bg-[#a33a00] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
      >
        Notify Me
      </a>
    </div>
  );
}
