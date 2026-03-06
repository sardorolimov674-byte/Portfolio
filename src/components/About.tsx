import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import figma from "../assets/figma.svg";
import sass from "../assets/sass.svg";
import git from "../assets/git.svg";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

const skills = [
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "JS", icon: js },
  { title: "React", icon: react },
  { title: "Tailwind CSS", icon: tailwind },
  { title: "Figma", icon: figma },
  { title: "Swiper JS", icon: sass },
  { title: "ANTD", icon: git },
];

export default function About() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-white">Men haqimda</h1>
        <div className="w-[150px] h-[12px] mt-5 rounded-full bg-green-500"></div>

        <p className="text-xl mt-[50px] text-gray-300 leading-relaxed">
          Assalomu alaykum, Men Olimov Sardor. Men 2010-yil O'zbekiston
          Respublikasining Buxoro shahrida tug'ilganman. Yoshligimdan
          texnologiyaga bo'lgan qiziqishim meni veb dasturchilikka yetakladi.
          <br /><br />
          Dasturlash — bu meni qiziqtiradigan jarayon, chunki u nafaqat ijodiy
          tafakkurni talab qiladi, balki har bir muammo uchun eng samarali
          yechimni izlashni o'rgatadi.
          <br /><br />
          Men asosan React, Tailwind CSS va boshqa ilg'or texnologiyalar
          yordamida veb ilovalar ishlab chiqaman.
          <br /><br />
          Agar mening loyihalarim sizni qiziqtirsa, Loyihalar sahifasiga
          tashrif buyurishingiz mumkin!
        </p>

        <Link to="/projects" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition">
          Projects <FaLongArrowAltRight />
        </Link>
      </div>

      <div className="mt-[100px]">
        <h1 className="text-4xl font-bold text-white">Texnologiyalar</h1>
        <div className="w-[150px] h-[12px] mt-5 rounded-full bg-green-500"></div>

        <div className="grid grid-cols-4 gap-6 mt-[60px]">
          {skills.map((skill, index) => (
            <div key={index} className="relative group h-[150px] bg-[#151515] rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden">
              <img src={skill.icon} alt={skill.title} className="w-16 h-16 transition-opacity duration-300 group-hover:opacity-0"/>
              <span className="absolute text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-[120px]">
      <h1 className="text-4xl font-bold text-white">Men nima qila olaman</h1>
      <div className="w-[150px] h-[12px] mt-5 rounded-full bg-green-500"></div>
      <div className="grid grid-cols-2 gap-8 mt-[60px]">
        <div className="flex gap-6 p-6 bg-[#151515] border border-gray-800 rounded-2xl">
          <img className="w-[100px] h-[90px] rounded-xl" src={image5} alt="" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              SEO optimizatsiya
            </h3>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Saytni qidiruv tizimlarida yuqori o'rinlarga ko'tarish
            </p>
          </div>
        </div>

        <div className="flex gap-6 p-6 bg-[#151515] border border-gray-800 rounded-2xl">
          <img className="w-[100px] h-[90px] rounded-xl" src={image7} alt="" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Kuchli dizayn
            </h3>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Dizayn jarayonida nafislik va detallarga katta e’tibor
            </p>
          </div>
        </div>

        <div className="flex gap-6 p-6 bg-[#151515] border border-gray-800 rounded-2xl">
          <img className="w-[100px] h-[90px] rounded-xl" src={image6} alt="" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Sifatli ishlab chiqish
            </h3>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Saytlarni yuqori sifatli va zamonaviy standartlarda ishlab chiqish
            </p>
          </div>
        </div>

        <div className="flex gap-6 p-6 bg-[#151515] border border-gray-800 rounded-2xl">
          <img className="w-[100px] h-[90px] rounded-xl" src={image8} alt="" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Tezkor ish jarayoni
            </h3>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Belgilangan vaqt ichida samarali va tezkor sayt yaratish
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
