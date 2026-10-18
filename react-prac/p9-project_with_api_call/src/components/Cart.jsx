import React, { useState, useContext } from "react";
import { Minus, Plus, Trash2, Star } from "lucide-react";
import { MyStore } from '../context/MyContext'

const CartCard = () => {
    const { cartItems } = useContext(MyStore);
    console.log(cartItems)

    // return (
    //     <div>
    //         {cartItems.map((item) => {
    //             return (<div className="grid lg:grid-cols-3 gap-8">
    //                 {/* Cart Items */}
    //                 <div className="lg:col-span-2 space-y-5">
    //                     {cartItems.map((item) => (
    //                         <div
    //                             key={item.id}
    //                             className="bg-white rounded-xl shadow p-5 flex gap-5"
    //                         >
    //                             {/* Product Image */}
    //                             <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
    //                                 <img
    //                                     src={item.image}
    //                                     alt={item.title}
    //                                     className="h-32 object-contain"
    //                                 />
    //                             </div>

    //                             {/* Product Details */}
    //                             <div className="flex-1 flex flex-col justify-between">
    //                                 <div>
    //                                     <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize mb-2">
    //                                         {item.category}
    //                                     </span>

    //                                     <h2 className="text-xl font-semibold line-clamp-2">
    //                                         {item.title}
    //                                     </h2>

    //                                     <p className="text-gray-500 mt-2 line-clamp-2">
    //                                         {item.description}
    //                                     </p>
    //                                 </div>

    //                                 <div className="flex justify-between items-center mt-5">
    //                                     <div className="flex items-center gap-1">
    //                                         <Star
    //                                             size={18}
    //                                             className="fill-yellow-400 text-yellow-400"
    //                                         />
    //                                         <span>{item.rating.rate}</span>
    //                                         <span className="text-gray-400">
    //                                             ({item.rating.count})
    //                                         </span>
    //                                     </div>
    //                                     <button className="bg-red-700 text-white py-2 px-3 rounded cursor-pointer " onClick={() => { }}>delete</button>
    //                                     <h3 className="text-2xl font-bold text-green-600">
    //                                         ${item.price}
    //                                     </h3>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>

    //             </div>
    //             )

    //         }

    //         };
    //     )}



    //     </div>
    // );

    // return (
    //     <div className="min-h-screen bg-gray-100 py-10">
    //         <div className="max-w-6xl mx-auto px-5">
    //             <h1 className="text-4xl font-bold mb-8">
    //                 Shopping Cart ({cartItems.length})
    //             </h1>

    //             {cartItems.length === 0 ? (
    //                 <div className="bg-white rounded-xl p-10 text-center shadow">
    //                     <h2 className="text-2xl font-semibold text-gray-600">
    //                         Your Cart is Empty 🛒
    //                     </h2>
    //                 </div>
    //             ) : (
    //                 <div className="grid lg:grid-cols-3 gap-8">
    //                     {/* Cart Items */}
    //                     <div className="lg:col-span-2 space-y-5">
    //                         {cartItems.map((item) => (
    //                             <div
    //                                 key={item.id}
    //                                 className="bg-white rounded-xl shadow p-5 flex gap-5"
    //                             >
    //                                 {/* Product Image */}
    //                                 <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
    //                                     <img
    //                                         src={item.image}
    //                                         alt={item.title}
    //                                         className="h-32 object-contain"
    //                                     />
    //                                 </div>

    //                                 {/* Product Details */}
    //                                 <div className="flex-1 flex flex-col justify-between">
    //                                     <div>
    //                                         <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize mb-2">
    //                                             {item.category}
    //                                         </span>

    //                                         <h2 className="text-xl font-semibold line-clamp-2">
    //                                             {item.title}
    //                                         </h2>

    //                                         <p className="text-gray-500 mt-2 line-clamp-2">
    //                                             {item.description}
    //                                         </p>
    //                                     </div>

    //                                     <div className="flex justify-between items-center mt-5">
    //                                         <div className="flex items-center gap-1">
    //                                             <Star
    //                                                 size={18}
    //                                                 className="fill-yellow-400 text-yellow-400"
    //                                             />
    //                                             <span>{item.rating.rate}</span>
    //                                             <span className="text-gray-400">
    //                                                 ({item.rating.count})
    //                                             </span>
    //                                         </div>

    //                                         <h3 className="text-2xl font-bold text-green-600">
    //                                             ${item.price}
    //                                         </h3>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // );



    return (
        <div className="grid grid-cols-4 g-4">
            {cartItems.length === 0 ? (<div className='text-white'>The cart is empty</div>) : (cartItems.map((item) => {
                return (<div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">
                    {/* Product Image */}
                    <div className="flex h-36 w-full items-center justify-center rounded-lg bg-gray-100 md:w-40">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-28 object-contain"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">
                        <div>
                            <p className="mb-2 text-sm font-medium text-blue-600 capitalize">
                                {item.category}
                            </p>

                            <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                                {item.title}
                            </h2>

                            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                                {item.description}
                            </p>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                            {/* Price */}
                            <h3 className="text-2xl font-bold text-green-600">
                                ${item.price}
                            </h3>

                            {/* Quantity */}
                            <div className="flex items-center rounded-lg border">
                                <button className="p-2 hover:bg-gray-100">
                                    <Minus size={18} />
                                </button>

                                <span className="w-12 text-center font-semibold">
                                    {item.quantity}
                                </span>

                                <button className="p-2 hover:bg-gray-100">
                                    <Plus size={18} />
                                </button>
                            </div>

                            {/* Remove */}
                            <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                                <Trash2 size={18} />
                                Remove
                            </button>
                        </div>
                    </div>
                </div>)
            }))
            }
        </div>

    );
};



export default CartCard;