import Image from "next/image";
import { Poppins } from "next/font/google";
import logo_img from "../../../public/logo.svg";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 mr-8 md:mx-8">
      <a href="/" className="flex items-center">
        <Image
          src={logo_img}
          height="60"
          width="60"
          alt="Logo"
          className="h-14 w-14 md:h-20 md:w-20"
        />
      </a>
      <span className="ml-2 font-mono text-purple-500 text-xl md:text-4xl">
        Bytedrop
      </span>
    </div>
  );
};
