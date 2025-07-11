import Link from "next/link";

const NavLink = ({ href, title,setnave }) => {
  return (

      <Link href={href}  style={{fontFamily:'monospace'}} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-Tersary">
        {title}
      </Link>

  );
};

export default NavLink;