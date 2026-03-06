import img from "../assets/image.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

export default function Sidebar() {
  return (
    <aside className="w-[340px] bg-[#111] border-r border-gray-800 h-screen flex flex-col">
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-5">
          <div className="flex flex-col items-center text-center">
            <img
              src={img}
              alt="profile"
              className="w-45 h-45 rounded-xl object-cover mb-4"
            />
            <h3 className="text-white font-semibold text-lg">
              Sardor Olimov
            </h3>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-lg bg-[#1e1e1e] rounded-md">Junior</span>
            <span className="px-3 py-1 text-lg bg-[#1e1e1e] rounded-md">Web Developer</span>
            <span className="px-3 py-1 text-lg bg-[#1e1e1e] rounded-md">UI Designer</span>
            <span className="px-3 py-1 text-lg bg-[#1e1e1e] rounded-md">Creative</span>
          </div> 

          <div className="border-t border-gray-800 mt-4"></div>

          <div className="h-[320px] mt-2">
            <div className="flex">
              <img className="rounded-[10px] mt-3" src={img2} alt="" />
              <div className="mt-4 ms-3">
                  <h4>Github</h4>
                  <a href="">https://github.com/</a>
              </div>
            </div>
            <div className="flex">
              <img className="rounded-[10px] mt-3" src={img3} alt="" />
              <div className="mt-4 ms-3">
                <h4>Telegram</h4>
                <a href="" className="text-blue-500 hover:underline">@Sardor_Olimov10</a>
              </div>
            </div>

            <div className="flex">
              <img className="rounded-[10px] mt-3" src={img4} alt="" />
              <div className="mt-4 ms-3">
                <h4>Telephone number</h4>
                <a href="">+998 (93) 001-49-93</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
