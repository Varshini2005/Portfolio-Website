import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex gap-5 justify-between p-2">
        <p className="text-center">
        © {new Date().getFullYear()} Varshini Gopi. All Rights Reserved.
      </p>
      
    <div className="flex flex-row gap-5">
              <Image
        src="/icons/footer/github.png"
        alt="GitHub"
        width={32}
        height={32}
        className="transition delay-100 duration-300 ease-in-out hover:-translate-y-2" />

      <Image
        src="/icons/footer/email.png"
        alt="Email"
        width={32}
        height={32}
        className="transition delay-100 duration-300 ease-in-out hover:-translate-y-2"
      />

      <Image
        src="/icons/footer/linkedin.png"
        alt="LinkedIn"
        width={32}
        height={32}
        className="transition delay-100 duration-300 ease-in-out hover:-translate-y-2"
      />

      <Image
        src="/icons/footer/youtube.png"
        alt="YouTube"
        width={32}
        height={32}
        className="transition delay-100 duration-300 ease-in-out hover:-translate-y-2"
      />
    </div>

  
    </footer>
  );
}