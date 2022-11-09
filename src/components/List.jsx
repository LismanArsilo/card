import React, { useState } from "react";
import Coffe from "../assets/coffee.jpg";
import { Delete, Favorite } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  EditKeranjangRequest,
  GetOneKeranjangRequest,
} from "../redux-saga/actions/keranjangAction";

export default function List({ list }) {
  const dispatch = useDispatch();
  const [love, setLove] = useState(false);
  const { listOne, loading } = useSelector((state) => state.keranjangState);
  const [values, setValues] = useState({
    id: 1,
    name: "Chocolate",
    price: 17.3,
    qty: 1,
    size: "Small",
    type: "Cappucino",
  });

  const masukKeranjang = (direction, value) => {
    dispatch(GetOneKeranjangRequest(value.id));
    if (direction === "+") {
      const payload = {
        id: value.id,
        name: value.name,
        price: value.price,
        qty: value.qty + 1,
        size: value.size,
        type: value.type,
      };
      dispatch(EditKeranjangRequest(payload));
    } else if (direction === "-") {
      const payload = {
        id: value.id,
        name: value.name,
        price: listOne.price,
        qty: listOne.qty - 1,
        size: value.size,
        type: value.type,
      };
      dispatch(EditKeranjangRequest(payload));
      console.info("mines");
    }
  };

  return (
    <>
      {loading ? (
        "loading"
      ) : (
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
                  onClick={() => {
                    masukKeranjang("-", list);
                  }}
                  className="border border-slate-900 px-4 rounded-l-md cursor-pointer"
                >
                  -
                </span>
                <span className="border border-slate-900 px-4">{list.qty}</span>
                <span
                  onClick={() => {
                    masukKeranjang("+", list);
                  }}
                  className="border border-slate-900 px-4 rounded-r-md cursor-pointer"
                >
                  +
                </span>
              </div>
              <div className="font-semibold">${list.price}</div>
            </div>
          </div>
        </div>
      )}
      <hr className="mt-3 mx-6 mb-5" />
    </>
  );
}
