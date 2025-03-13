import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Card from "../components/card"
import { products, tabsItems } from "../assets/products"
import Header from '../components/header';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState("Tailwind CLI");
    return (
        <div>
            <div className="flex flex-wrap -m-2">
                {products.map((product, index) => (
                    <div key={index} className="w-1/4 p-2">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <div>
                <button className="px-12 py-2 bg-blue-500 rounded-sm text-white m-10" onClick={() => setIsOpen(true)}>open Model</button>
            </div>
            {isOpen && <div className="fixed inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-6/12 h-96 bg-white rounded-md">
                    <div className="bg-slate-500 w-fit float-right" onClick={() => setIsOpen(false)}>
                        <IoCloseOutline size={24} />
                    </div>
                    <div>

                        <div className="flex gap-4 border-b">
                            {
                                tabsItems?.map((item) => {
                                    return (
                                        <div
                                            key={item}
                                            className={`px-2 py-4 cursor-pointer ${tab === item && "border-b-2 text-blue-600 border-blue-600"}`}
                                            onClick={() => setTab(item)}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {
                            tab === "Tailwind CLI" &&
                            <div className="p-4">
                                <p>The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.</p>
                            </div>
                        }

                        {
                            tab === "Using PostCSS" &&
                            <div className="p-4">
                                <p>Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack, Rollup, Vite, and Parcel.</p>
                            </div>
                        }

                        {
                            tab === "Play CDN" &&
                            <div className="p-4">
                                <p>Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not the best choice for production.</p>
                            </div>
                        }


                    </div>
                </div>
            </div>}
        </div>

    )
}

export default Home