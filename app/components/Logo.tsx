import Link from "next/link";
import logo from "../../public/logo.jpeg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={35}
        height={35}
        alt="logo"
        // className="rounded-full h-[50px] w-[100]"
      />
    </Link>
  );
};

export default Logo;
