import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import Total from "./Total";
import { GetKeranjangRequest } from "../redux-saga/actions/keranjangAction";

export default function Body() {
  const { lists, loading, totalPrice } = useSelector(
    (state) => state.keranjangState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetKeranjangRequest());
  }, []);

  return (
    <div className="flex flex-row gap-6 mt-10 mx-20">
      <div className="basis-8/12 flex flex-col p-3 border border-slate-300 rounded-lg shadow-2xl">
        <p className="font-semibold mb-5">Cart ({lists.length} Items)</p>
        {loading ? (
          "Loading"
        ) : (
          <>
            {lists.map((list) => (
              <List key={list.id} list={list} />
            ))}
          </>
        )}
      </div>
      <div>
        <Total totalPrice={totalPrice} />
      </div>
    </div>
  );
}
