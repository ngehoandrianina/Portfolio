import Link from "next/link";

const NavLink = ({ href, title,setnave }) => {
  return (

      <Link href={href} className="block text-white border-b md:border-b-0 font-roboto w-full text-black sm:text-lg   md:p-0 hover:text-Tersary">
        {title}
      </Link>

  );
};

export default NavLink;