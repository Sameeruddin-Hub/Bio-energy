import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Star } from 'lucide-react'
import axios from 'axios';

const Details = () => {

    let { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);

    let singleData = async () => {
        let res = await axios.get(`https://dummyjson.com/products/${id}`)
        setSingleProduct(res.data)


    }

    useEffect(() => {
        singleData()
    }, [])

    return (
        <div className="min-h-[90%] bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-10 p-8">
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-xl flex items-center justify-center p-10">
                        <img
                            src={singleProduct?.images}
                            alt={singleProduct?.title}
                            className="h-[450px] object-contain transition duration-300 hover:scale-105"
                        />
                    </div>

                    {/* singleProduct? Details */}
                    <div className="flex flex-col">
                        <span className="w-fit bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize">
                            {singleProduct?.category}
                        </span>

                        <h1 className="text-4xl font-bold text-gray-800 mt-4">
                            {singleProduct?.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-5">
                            <div className="flex items-center">
                                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                                <span className="ml-1 font-semibold">
                                    {singleProduct?.rating?.rate}
                                </span>
                            </div>

                            <span className="text-gray-500">
                                ({singleProduct?.rating?.count} Reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <h2 className="text-4xl font-bold text-green-600 mt-6">
                            ${singleProduct?.price}
                        </h2>

                        {/* Stock */}
                        <p className="text-green-600 font-semibold mt-2">✓ In Stock</p>

                        {/* Description */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-2">
                                singleProduct? Description
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {singleProduct?.description}
                            </p>
                        </div>

                        {/* Extra Information */}
                        <div className="mt-10 border-t pt-6 space-y-3 text-gray-600">
                            <p>
                                🚚 <span className="font-medium">Free Delivery</span> on orders
                                over $50
                            </p>

                            <p>
                                🔄 <span className="font-medium">7 Days Return Policy</span>
                            </p>

                            <p>
                                🔒 <span className="font-medium">100% Secure Payment</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
