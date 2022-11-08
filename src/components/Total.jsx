import React from "react";
import { ExpandMore } from "@mui/icons-material";

export default function Total({ totalPrice }) {
  return (
    <div className="flex flex-col gap-4 basis-4/12">
      <div className="sticky border border-slate-400 p-3 px-5 h-max flex flex-col gap-3 rounded-lg shadow-xl">
        <div>
          <h1 className="font-semibold text-lg">The total amount of</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <p className="font-light">Temporary amount</p>
            <span>${totalPrice}</span>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-light">Shipping</p>
            <span>Free</span>
          </div>
          <span className="border border-black my-3"></span>
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-semibold">The total amount of</p>
              <span>(including)</span>
            </div>
            <span>$5.90</span>
          </div>
        </div>
        <div>
          <button className="border border-slate-300 w-full py-3 rounded-md bg-blue-600 font-bold text-sm text-white my-4">
            GO TO CHECKOUT
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border border-slate-400 rounded-md px-3 py-5 cursor-pointer">
        <span>Add a discount code (Options) </span>
        <ExpandMore />
      </div>
    </div>
  );
}
