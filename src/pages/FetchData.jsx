import React, { useEffect, useState } from 'react'
import Card from '../components/card';
import axios from "axios"

const FetchData = () => {

    // get
    // post
    // delete
    // put
    // get

    const [products, setProducts] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response?.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="flex flex-wrap -m-2">
                {products?.map((product, index) => (
                    <div key={index} className="w-1/4 p-2">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchData




// const myPromise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("Promise resolved successfully")
//     } else {
//         reject("promise rejected due to an error")
//     }
// })

// myPromise.then((message) => {
//     console.log("message", message);
// }).catch((error) => {
//     console.log("error", error)
// })