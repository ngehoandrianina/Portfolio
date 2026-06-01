import Link from "next/link";

const NavLink = ({ href, title,setnave }) => {
  return (

      <Link href={href}  style={{fontFamily:'monospace'}} className="block border-b md:border-b-0 w-full text-[#ADB7BE] sm:text-xl lg:text-base  md:p-0 hover:text-Tersary">
        {title}
      </Link>

  );
};

export default NavLink;