import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: any) =>
  `relative pb-1 transition
   ${isActive 
     ? "text-green-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-green-500"
     : "text-gray-300 hover:text-green-500"
   }`;

export default function Header() {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-8 bg-[#0e0e0e] border-b border-gray-800">
      
      <div className="text-xl font-bold text-white">
        <span className="text-green-500">SARDOR</span>.UZ
      </div>

      <nav className="flex items-center gap-8">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </header>
  );
}
