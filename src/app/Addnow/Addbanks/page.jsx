"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const Page = () => {

  const router=useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const balance = e.target.balance.value;
    const newCard = { name, number, balance };

    const storedCards = JSON.parse(localStorage.getItem("banks")) || [];
    const updatedCards = [...storedCards, newCard];
    localStorage.setItem("banks", JSON.stringify(updatedCards));
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Bank Info. Added Succesfully",
      showConfirmButton: false,
      timer: 1500,
    });

    router.push('/')
    e.target.reset();

  };
  return (
    <div className="flex lg:px-0 px-5 items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
      <div className="group mx-auto flex w-full max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900 rounded-2xl">
        <div className="relative hidden min-h-full w-1/3 overflow-hidden bg-blue-400 sm:block rounded-2xl">
          <h1 className="absolute bottom-3 right-3 text-right text-2xl font-semibold text-white">
            Empower <br /> Your Wallet
          </h1>
          <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-blue-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-blue-800/50"></span>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 p-8">
          <h1 className="pb-6 text-3xl font-semibold tracking-tight">
            Add Bank Accounts
          </h1>
          <div className="space-y-5">
            <div className="relative text-sm">
              <input
                className="peer/text block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                type="text"
                placeholder=""
                id="navigate_ui_text_33"
                name="name"
                required
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/text:top-3 peer-placeholder-shown/text:bg-transparent peer-placeholder-shown/text:text-sm peer-placeholder-shown/text:text-zinc-400 peer-focus/text:-top-2 peer-focus/text:bg-blue-300 peer-focus/text:text-xs peer-focus/text:text-blue-600"
                htmlFor="navigate_ui_text_33"
              >
               Bank name
              </label>
            </div>
            <div className="relative text-sm">
              <input
                className="peer/pass block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                type="number"
                name="number"
                placeholder=""
                id="navigate_ui_number_33"
                required
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-blue-300 peer-focus/pass:text-xs peer-focus/pass:text-blue-600"
                htmlFor="navigate_ui_number_33"
              >
                Bank account number
              </label>
            </div>
            <div className="relative text-sm">
              <input
                className="peer/pass block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                type="number"
                name="balance"
                placeholder=""
                id="navigate_ui_number_33"
                required
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-blue-300 peer-focus/pass:text-xs peer-focus/pass:text-blue-600"
                htmlFor="navigate_ui_number_33"
              >
                Bank balance
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md uppercase border border-blue-400 px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
