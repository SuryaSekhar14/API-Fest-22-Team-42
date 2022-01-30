import React from "react";

const art1 = require("../../assets/img/aiart1.jpg");
const art2 = require("../../assets/img/aiart2.jpg");
const art = require("../../assets/img/aiart.jpg"); 


const Aiartist = () => {
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center text-left justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-8xl font-bold mb-10 leading-9 text-gray-500">AI Artists</h1>
                    <p className="text-medium leading-6 mt-4 text-gray-600">Get inspired by our curated selection of AI Generated Art. You’ll find tips here where you can create art without knowing the fundamentals of Art itself.
                    <br/>
                    <span className="text-gray-600 text-sm">
                    - We are free!
                    <br/>
                    - Just open the colab and click run all.
                    <br/>
                    - When needing to enter the token. make sure they are default enter the phrase which u want the art to be made.
                    <br/>
                    - When you are done with the art, click the save button and the art will be saved in the database.
                    <br/>
                    - You can get some help on how it works using the link below. </span>
                    </p>
                    <button aria-label="view catalogue" onClick={(e)=>window.open('https://youtu.be/XTj7c6WeEAM')} className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-red-800 flex items-center hover:underline">
                        View Exaplanation
                    </button>
                    <button aria-label="view catalogue" onClick={(e)=>window.open('https://colab.research.google.com/drive/19kA5oCfVsKreV_dx1NSZOxGorA1mRABE?usp=sharing')} className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-green-800 flex items-center hover:underline">
                        View Google Colaboratory
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full bg-red-200">
                        <img src={art1} alt="apartment design" className="w-full rounded-lg sm:block hidden" />
                        <img src={art1} alt="apartment design" className="sm:hidden rounded-lg block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src={art2} className="w-full rounded-lg" alt="kitchen"/>
                        <img src={art} className="rounded-lg" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aiartist;
