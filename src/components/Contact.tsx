import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("So'rovingiz muvaffaqiyatli yuborildi.", {
      position: "top-center",
      autoClose: 5000,
      theme: "dark",
    })

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold text-white">Bog'lanish</h1>
      <div className="w-[150px] h-[12px] mt-5 rounded-full bg-green-500"></div>

      <div className="flex gap-5">
        <div className="flex flex-col justify-center w-[390px] h-[290px] mt-[60px] bg-gray-950 border border-gray-800 rounded-lg">
          <img src={image9} className="w-[100px] mx-auto rounded-lg" />
          <h4 className="text-center mt-3 text-2xl">E-pochta</h4>
          <p className="text-center text-gray-400">
            sardorolimov674@gmail.com
          </p>
        </div>

        <div className="flex flex-col justify-center w-[390px] h-[290px] mt-[60px] bg-gray-950 border border-gray-800 rounded-lg">
          <img src={image10} className="w-[100px] mx-auto rounded-lg" />
          <h4 className="text-center mt-3 text-2xl">Telefon raqam</h4>
          <p className="text-center text-gray-400">
            +998 93 001-49-93
          </p>
        </div>

        <div className="flex flex-col justify-center w-[390px] h-[290px] mt-[60px] bg-gray-950 border border-gray-800 rounded-lg">
          <img src={image11} className="w-[100px] mx-auto rounded-lg" />
          <h4 className="text-center mt-3 text-2xl">Manzil</h4>
          <p className="text-center text-gray-400">
            O'zbekiston, Buxoro
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white mt-16">So'rov yuborish</h1>
      <div className="w-[150px] h-[12px] mt-5 rounded-full bg-green-500"></div>

      <form onSubmit={handleSubmit} className="mt-10 bg-[#111] border border-gray-800 rounded-xl p-6">
        <div className="flex gap-6">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Ismingiz" required className="w-1/2 bg-[#0b0b0b] border border-gray-700 rounded-md px-4 py-3 text-white outline-none focus:border-green-500"/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email@example.com" required className="w-1/2 bg-[#0b0b0b] border border-gray-700 rounded-md px-4 py-3 text-white outline-none focus:border-green-500"/>
        </div>

        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Xabaringiz" required className="mt-6 w-full h-[220px] bg-[#0b0b0b] border border-gray-700 rounded-md px-4 py-3 text-white outline-none focus:border-green-500 resize-none"/>
        <button type="submit" className="mt-6 bg-green-600 hover:bg-green-700 transition text-white px-10 py-3 rounded-md">Yuborish</button>
      </form>

      <ToastContainer />
    </div>
  );
}
