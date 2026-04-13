import { IoSquareSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed z-50 bg-gray-950 w-full shadow-md shadow-gray-800">
      <div className="flex justify-between py-5 px-5 items-center container mx-auto">
        <h1 className="text-2xl flex">
          <p className="block sm:hidden font-semibold">Irc</p>
          <p className="hidden sm:block font-semibold">Irchamzah</p>
          <IoSquareSharp className="text-sm text-end text-sky-500" />
        </h1>
        <ul className="flex">
          <li className="">
            <a
              href={"/irchamzah_fikri_ababil-resume.pdf"}
              target="_blank"
              className="flex items-center bg-gray-800 py-2 px-3 hover:opacity-80 transition duration-200"
            >
              <MdFileDownload className="text-2xl mr-2" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
