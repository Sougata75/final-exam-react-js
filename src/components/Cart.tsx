"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import { cartAdd, cartDelete } from "@/store/slices/global.slice";
import { Minus, Plus } from "lucide-react";

function Cart() {

    const dispatch = useAppDispatch();
    const {cartItems} = useAppSelector((state) => state.global);

    console.log("cartItems on cart",cartItems)

    const totalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price
    },0)

  return (
    <section className="w-full py-[50px] flex flex-wrap justify-center">
        <h1 className="w-full text-center text-2xl font-bold mb-10"> Cart</h1>
      <div className="w-[1170px] flex flex-wrap gap-5">
        <div className="w-full flex flex-wrap gap-5">
          {cartItems?.map((item,index) => (
            <div key={index} className="w-full flex justify-between">
              <h2>{item.name}</h2>
              <div>
                <p>Price: ₹{item.price}</p>
              </div>
              <div className="w-[10%] flex flex-wrap justify-between">
                <button type="button" onClick={() => dispatch(cartDelete(item))}><Minus/></button>
                <button onClick={() => dispatch(cartAdd(item))}><Plus/></button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <h2>Total Price: {totalPrice} INR</h2>
        </div>
      </div>
    </section>
  )
}

export default Cart