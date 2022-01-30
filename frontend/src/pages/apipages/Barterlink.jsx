import { Navbar, Footer } from "../../components";
import React from "react";

const eth=require("../../assets/img/eth.gif");

const BarterLink = () => {
    return (
        <>
            <Navbar />
            <div className="xl:mx-auto xl:container">
                <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                    <div className="flex flex-col-reverse lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 md:py-9 py-6">
                            <img src={eth} alt="ethereum" className="rounded-lg object-cover object-center" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                            <p className="text-sm leading-none text-gray-600 pb-2">Featured</p>
                            <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">BarterLink</p>
                            <p className="text-sm leading-5 text-gray-600 md:pb-10 pb-8">
                            Barterlink is a new method of payment on the Internet using electronic currency. Each of the NFTs is unique and exists in a single copy, it cannot be divided and all information about its author, buyer and all transactions with it is securely stored in the blockchain.
                            Barter link is a dedicated MarketPlace for NFTs shops and NFT assets stores, crypto Art markets and for Digital assets biding websites. It is very nicely designed with modern features & coded with the latest technology.
                            The interface functionality allows people to get familiar with NFT in detail and buy for their own purposes. NFT is the marketplace where you can buy different products with cryptocurrency, starting with domain names and finishing with works of art.
                            </p>
                            <div className="md:block flex items-center justify-center">
                                <button onClick={(e)=>window.open('https://barterlink.vercel.app')} className="rounded-full lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800">Go Crypto</button>
                            </div>
                            <button onClick={(e)=>window.open('https://github.com/Diversion2k22/Barterlink.git')} className="rounded-full lg:w-auto mt-4 w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800">Go GitHub</button>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default BarterLink;