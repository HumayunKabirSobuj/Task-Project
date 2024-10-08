"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  const [fromData, setFromData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedStatements =
      JSON.parse(localStorage.getItem("statements")) || [];
    const updatedStatements = [...storedStatements, data];
    localStorage.setItem("statements", JSON.stringify(updatedStatements));
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Statement Added Succesfully",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
    router.push("/");
  };

  return (
    <div className="flex lg:px-0 px-5 items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
      <div className="group mx-auto flex w-full max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900 rounded-2xl">
        <div className=" relative hidden min-h-full w-3/4 overflow-hidden bg-blue-400 sm:block rounded-2xl">
          <h1 className="absolute bottom-3 right-3 text-right text-2xl font-semibold text-white">
            Empower <br /> Your Wallet
          </h1>
          <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-blue-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-blue-800/50"></span>
        </div>

        {/* Single form for handling all inputs */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 p-5 bg-gray-100 w-full rounded-md shadow-md"
        >
          <h2 className="text-2xl font-semibold">Add Transaction</h2>

          <div className="relative text-sm">
            <input
              className="block w-full rounded-md border border-blue-400 p-2.5 shadow-lg outline-none"
              type="date"
              {...register("date", { required: true })}
              value={startDate.toISOString().split("T")[0]}
              onChange={(e) => setStartDate(new Date(e.target.value))}
              required
            />
            <label className="absolute -top-2 left-2 bg-white px-2 text-xs text-gray-600">
              Date
            </label>
          </div>

          <div className="relative text-sm">
            <select
              className="block w-full rounded-md border border-blue-400 p-2.5 shadow-lg outline-none"
              {...register("transactionType", { required: true })}
            >
              <option value="">Select Transaction Type</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdrawal">Withdrawal</option>
            </select>
            <label className="absolute -top-2 left-2 bg-white px-2 text-xs text-gray-600">
              Transaction Type
            </label>
          </div>

          {errors.transactionType && (
            <span className="text-red-500">Transaction type is required.</span>
          )}

          <div className="relative text-sm">
            <input
              className="block w-full rounded-md border border-blue-400 p-2.5 shadow-lg outline-none"
              type="number"
              {...register("amount", { required: true })}
            />
            <label className="absolute -top-2 left-2 bg-white px-2 text-xs text-gray-600">
              Amount
            </label>
          </div>

          {errors.amount && (
            <span className="text-red-500">Amount is required.</span>
          )}

          <div className="relative text-sm">
            <select
              className="block w-full rounded-md border border-blue-400 p-2.5 shadow-lg outline-none"
              {...register("category", { required: true })}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
            </select>
            <label className="absolute -top-2 left-2 bg-white px-2 text-xs text-gray-600">
              Category
            </label>
          </div>

          {errors.category && (
            <span className="text-red-500">Category is required.</span>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 inline-block rounded-md bg-blue-400 px-5 py-2 text-white hover:bg-blue-500"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
