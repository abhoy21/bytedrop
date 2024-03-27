import Image from "next/image";
import { Poppins } from "next/font/google";
import logo_img from "../../../public/logo.svg";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 mx-8">
      <a href="/" className="flex items-center">
        <Image src={logo_img} height="60" width="60" alt="Logo" />
      </a>
    </div>
  );
};
