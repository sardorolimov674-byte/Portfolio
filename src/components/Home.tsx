import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-[140px] ms-[230px] w-[633px] text-center">
      <div>
        <h1 className="text-[36px] font-bold">
          Assalom aleykum, Men <br />
          <span className="text-green-500">Olimov Sardor</span>man
        </h1>

        <p className="mt-4 text-gray-600">
          Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi.
          Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy
          mahsulot muvaffaqiyatiga erishish maqsadimdir.
        </p>

        <Link to="/about" className="inline-flex items-center gap-2 mt-6 px-6 py-3  bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition duration-300">About me<FaLongArrowAltRight /></Link>
      </div>
    </div>
  );
}
