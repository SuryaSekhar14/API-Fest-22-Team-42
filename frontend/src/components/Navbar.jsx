import React,{useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const logo = require("../assets/img/logo.png");
const Navbar = () => {
    const navigate = useNavigate();
    // const handleOnClick = useCallback(() => navigate('/team', {replace: true}), [navigate]);
    const [show, setshow] = useState(false);
    return (
        <div className="bg-gray-800">
            <div className="2xl:container 2xl:mx-auto py-5 lg:px-7 sm:px-6 py-6 px-4">
                <nav>
                    <div className=" flex flex-row justify-between">
                        <div className=" flex space-x-3 items-center">
                            <img src={logo} alt="SADS apis" width="5%"/>
                            <Link to='/' ><h1 className=" font-bold text-3xl leading-6 text-white">SADS APIs</h1></Link>
                        </div>
                        {/* For large (i.e. desktop and laptop sized screen) */}
                        {/* <div className="lg:flex hidden flex-auto justify-between flex-row">
                            <div className=" xl:pl-16 lg:pl-4">
                                <div className=" flex space-x-1 items-center">
                                    <div className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-3 h-3 rounded-full bg-white flex justify-center items-center">
                                        <svg width={4} height={6} viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.8999 1.20001L1.0999 3.00001L2.8999 4.80001" stroke="#1F2937" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <a className="focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" href="javascript:void(0)">Back to Dashboard</a>
                                </div>
                                <h2 className=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                            </div>
                            <div className="flex flex-row lg:space-x-3 xl:space-x-4">
                                <div className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex -space-x-3 flex-row">
                                    <img className="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1" />
                                    <img className="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2" />
                                    <img className="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3" />
                                    <img className="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4" />
                                    <img className="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5" />
                                </div>
                                <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                    <p>Share</p>
                                    <svg className="mt-1" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 4.66669C11.4665 4.66669 12.25 3.88319 12.25 2.91669C12.25 1.95019 11.4665 1.16669 10.5 1.16669C9.5335 1.16669 8.75 1.95019 8.75 2.91669C8.75 3.88319 9.5335 4.66669 10.5 4.66669Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.5 8.75C4.4665 8.75 5.25 7.9665 5.25 7C5.25 6.0335 4.4665 5.25 3.5 5.25C2.5335 5.25 1.75 6.0335 1.75 7C1.75 7.9665 2.5335 8.75 3.5 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.5 12.8333C11.4665 12.8333 12.25 12.0498 12.25 11.0833C12.25 10.1168 11.4665 9.33331 10.5 9.33331C9.5335 9.33331 8.75 10.1168 8.75 11.0833C8.75 12.0498 9.5335 12.8333 10.5 12.8333Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.01074 7.88086L8.99491 10.2025" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.98908 3.79749L5.01074 6.11915" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className=" h-full w-0 border-l border-gray-300" />
                            </div>
                        </div> */}
                        <div className=" hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            <button onClick={(e) => navigate('/team', {replace: true})} className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Team</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.583496 6.99998C0.583496 6.99998 2.91683 2.33331 7.00016 2.33331C11.0835 2.33331 13.4168 6.99998 13.4168 6.99998C13.4168 6.99998 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99998 0.583496 6.99998Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Docs</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 4.66667L7.00016 1.75L4.0835 4.66667" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 1.75V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                            {/* Save button */}
                            <button onClick={(e)=>navigate('/apis', {replace:true})} className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 duration-150 justify-center items-center">
                                <p>APIs</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333L12.25 4.66667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 12.25V7.58331H4.0835V12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.0835 1.75V4.66667H8.75016" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                            <button onClick={(e)=>window.open('https://github.com/SuryaSekhar14/API-Fest-22-Team-42')} className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 duration-150 justify-center items-center">
                                <p>GitHub</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333L12.25 4.66667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 12.25V7.58331H4.0835V12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.0835 1.75V4.66667H8.75016" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                        </div>
                        {/* Burger Icon */}
                        <div id="bgIcon" onClick={()=>setshow(!show)} className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  block sm:hidden cursor-pointer">
                            <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className=" transform duration-150" d="M4 6H20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className=" transform duration-150" d="M4 18H20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {/* for medium-sized devices */}
                    {/* <div className="lg:hidden flex flex-auto justify-between flex-row mt-4"> */}
                        {/* <div id="heading" className={`${show ? 'hidden' : 'block'} sm:block xl:pl-16 lg:pl-4`}>
                            <div className=" flex space-x-1 items-center">
                                <div className="cursor-pointer w-3 h-3 rounded-full bg-white flex justify-center items-center">
                                    <svg width={4} height={6} viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.8999 1.20001L1.0999 3.00001L2.8999 4.80001" stroke="#1F2937" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a className="focus:outline-none focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" href="javascript:void(0)">Back to Dashboard</a>
                            </div>
                            <h2 className=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                        </div> */}
                            {/* <div className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex -space-x-3 flex-row">
                                <img className="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1" />
                                <img className="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2" />
                                <img className="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3" />
                                <img className="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4" />
                                <img className="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5" />
                            </div>
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Share</p>
                                <svg className="mt-1" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 4.66669C11.4665 4.66669 12.25 3.88319 12.25 2.91669C12.25 1.95019 11.4665 1.16669 10.5 1.16669C9.5335 1.16669 8.75 1.95019 8.75 2.91669C8.75 3.88319 9.5335 4.66669 10.5 4.66669Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 8.75C4.4665 8.75 5.25 7.9665 5.25 7C5.25 6.0335 4.4665 5.25 3.5 5.25C2.5335 5.25 1.75 6.0335 1.75 7C1.75 7.9665 2.5335 8.75 3.5 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 12.8333C11.4665 12.8333 12.25 12.0498 12.25 11.0833C12.25 10.1168 11.4665 9.33331 10.5 9.33331C9.5335 9.33331 8.75 10.1168 8.75 11.0833C8.75 12.0498 9.5335 12.8333 10.5 12.8333Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.01074 7.88086L8.99491 10.2025" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.98908 3.79749L5.01074 6.11915" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button> */}
                    {/* </div> */}
                    {/* Mobile and Small devices Navigation */}
                    <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} transform duration-150 sm:hidden mt-4`}>
                        <hr className=" w-full bg-gray-300" />
                        <div className="flex flex-col gap-4 mt-4 max-w-sm mx-auto ">
                            {/* <div className=" flex justify-center items-center -space-x-3 flex-row">
                                <img className="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1" />
                                <img className="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2" />
                                <img className="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3" />
                                <img className="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4" />
                                <img className="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5" />
                            </div>
                            <button className=" rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Share</p>
                                <svg className="mt-1" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 4.66669C11.4665 4.66669 12.25 3.88319 12.25 2.91669C12.25 1.95019 11.4665 1.16669 10.5 1.16669C9.5335 1.16669 8.75 1.95019 8.75 2.91669C8.75 3.88319 9.5335 4.66669 10.5 4.66669Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 8.75C4.4665 8.75 5.25 7.9665 5.25 7C5.25 6.0335 4.4665 5.25 3.5 5.25C2.5335 5.25 1.75 6.0335 1.75 7C1.75 7.9665 2.5335 8.75 3.5 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 12.8333C11.4665 12.8333 12.25 12.0498 12.25 11.0833C12.25 10.1168 11.4665 9.33331 10.5 9.33331C9.5335 9.33331 8.75 10.1168 8.75 11.0833C8.75 12.0498 9.5335 12.8333 10.5 12.8333Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.01074 7.88086L8.99491 10.2025" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.98908 3.79749L5.01074 6.11915" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <hr className=" w-full bg-gray-300" /> */}
                            <button onClick={(e) => navigate('/team', {replace: true})} className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Team</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.583496 6.99998C0.583496 6.99998 2.91683 2.33331 7.00016 2.33331C11.0835 2.33331 13.4168 6.99998 13.4168 6.99998C13.4168 6.99998 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99998 0.583496 6.99998Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Documentation</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 4.66667L7.00016 1.75L4.0835 4.66667" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 1.75V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                            {/* Save button */}
                            <button onClick={(e)=>navigate('/apis', {replace:true})} className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                                <p>APIs</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333L12.25 4.66667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 12.25V7.58331H4.0835V12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.0835 1.75V4.66667H8.75016" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                            <button onClick={(e)=>window.open('https://github.com/SuryaSekhar14/API-Fest-22-Team-42')} className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                                <p>GitHub</p>
                                {/* <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333L12.25 4.66667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 12.25V7.58331H4.0835V12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.0835 1.75V4.66667H8.75016" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;