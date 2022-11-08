import React, { useState } from "react";
import Coffe from "../assets/coffee.jpg";
import { Delete, Favorite } from "@mui/icons-material";

export default function List({ list }) {
  const [love, setLove] = useState(false);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(17.8);
  return (
    <>
      <div className="flex flex-col gap-3 justify-start items-center sm:flex-row">
        <img
          src={Coffe}
          alt=""
          width={100}
          height={400}
          className="rounded-lg mr-4 object-cover"
        />
        <div className="flex md:flex-row justify-between flex-col w-full">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <span className="text-lg font-semibold">
                {" "}
                Drink : {list.name}
              </span>
              <span className="font-light"> Type : {list.type}</span>
              <span className="font-light"> Size : {list.size}</span>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex items-center gap-1 cursor-pointer">
                <Delete />
                <span className="font-light text-white sm:text-black">
                  REMOVE ITEM
                </span>
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setLove(!love)}
              >
                <Favorite
                  style={love ? { color: "red" } : { color: "black" }}
                />
                <span className="font-light text-white sm:text-black">
                  MOVE TO WISH LIST
                </span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col mr-5 justify-between items-center sm:items-end mb-2 text-lg flex-col">
            <div className="flex flex-row">
              <span
                className="border border-slate-900 px-4 rounded-l-md cursor-pointer"
                onClick={() => setQty(qty > 0 ? qty - 1 : 0)}
              >
                -
              </span>
              <span className="border border-slate-900 px-4">{qty}</span>
              <span
                className="border border-slate-900 px-4 rounded-r-md cursor-pointer"
                onClick={() => setQty(qty + 1)}
              >
                +
              </span>
            </div>
            <div className="font-semibold">${list.price}</div>
          </div>
        </div>
      </div>
      <hr className="mt-3 mx-6 mb-5" />
    </>
  );
}
