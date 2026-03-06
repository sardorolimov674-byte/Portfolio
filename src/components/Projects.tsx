import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Loyihalar</h1>
      <div className="w-[150px] h-[12px] mt-5 rounded-full bg-green-500"></div>
      <h1 className="flex mt-[50px] text-xl font-bold">Filterlash  <CiFilter size={"40px"} /></h1>
        <div className="border-1 flex gap-3 p-3 rounded-lg mt-4">
          <FaSearch style={{marginTop: "6px"}} />
          <input type="text" className="outline-none w-full" placeholder="Qidirish" />
        </div>
      </div>
  )
}
