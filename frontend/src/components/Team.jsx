import React from "react";

const logo = require("../assets/img/logo.png");
const surya = require("../assets/img/surya.jpg");
const dhritesh = require("../assets/img/db.jpg");
const swapnanil = require("../assets/img/swapnanil.jpg");
const arnab = require("../assets/img/arnab.jpg");
const Team = () => {
    return (
        <>
            <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
                
                
                <div className="bg-indigo-700 rounded-md lg:w-full w-full flex flex-col items-center justify-center md:py-12 py-12">
                <h1 className="text-5xl font-semibold leading-10 text-white text-center">Meet our team</h1>
                        <img src={logo} alt="logo" className="justify-center mt-4" width="10%" />
                        <h5><br/></h5>
                        <h3 className="text-2xl font-semibold leading-6 text-center text-white">About Team</h3>
                        <p className="lg:px-0 pxs-4 text-base leading-6 text-center text-white mt-6">Teamwork is the collaborative effort of a team to achieve a common goal or to complete task in the most effective way. This concept is seen in the greater framework of a team in which indipendent indiviuals who work together towards common goal basic requirement for effective team and company</p>
                    </div>
                <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4"> 
                    <div className="lg:w-96 w-80">
                        <img src={surya} className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-lg rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Surya Sekhar Datta</p>
                            {/* <p className="text-base leading-6 mt-2 text-gray-800">Designer</p> */}
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src={dhritesh} className="h-72 w-full object-cover object-center rounded-t-md" alt="woman in black dress" />
                        <div className="bg-white shadow-lg rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Dhritesh Bhagat</p>
                            {/* <p className="text-base leading-6 mt-2 text-gray-800">Designer</p> */}
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src={swapnanil} className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-lg rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Swapnanil Ray</p>
                            {/* <p className="text-base leading-6 mt-2 text-gray-800">Writer</p> */}
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src={arnab} className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-lg rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Arnab Maity</p>
                            {/* <p className="text-base leading-6 mt-2 text-gray-800">Developer</p> */}
                        </div>
                    </div>
                    {/* <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/Lng30RF/team-5.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Annie Jackie</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
export default Team;
