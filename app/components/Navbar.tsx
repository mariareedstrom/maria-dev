import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 sticky-top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h3 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline  hover:tex-white"
          >
            Maria Reedstrom
          </Link>
        </h3>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/mariareedstrom"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/maria-reedstrom/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://medium.com/@maria.reedstrom"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaMedium />
          </Link>
        </div>
      </div>
    </nav>
  );
}
