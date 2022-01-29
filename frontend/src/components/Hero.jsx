/* eslint-disable jsx-a11y/no-redundant-roles */
import Typewriter from 'typewriter-effect';
const logo = require("../assets/img/hero.png");
const Hero = () => {
    return (
        <div>
            <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <div className="pt-16 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabIndex="0" role="img" aria-label="Hero" className="mx-auto" src={logo}  alt="Hero"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p tabIndex="0" className="text-indigo-700 uppercase text-2xl mb-4">Want all the APIs @ one place</p>
                        <h1 tabIndex="0" className="text-indigo-700 text-4xl lg:text-8xl font-black mb-8">SADS are here.</h1>
                        <h3 tabIndex='0' className="text-indigo-700 text-2xl lg:text-2xl font-bold mb-8">We do :
                        <Typewriter
                        options={{
                            strings: ['Translate','PDFs, yes!','OCR','Auto Image Downloader, this too!'],
                            autoStart: true,
                            loop: true,
                        }}
                        /></h3>
                        <p tabIndex="0" className="text-gray-800 font-regular text-xl mb-8">API with SADS. Made with ♥️ and fun by a group of Friends. <br/>We SADS are a group of students working on various ideas. This was made to access all the APIs of our projects at one place. Laziness worth coding for. 
                        <br/>
                        <div className="text-indigo-600 text-xl font-bold">
                        <Typewriter
                        options={{
                            strings: ['( •̀ ω •́ )✧', '(●\'◡\'●)','ヾ(•ω•`)o','(～￣▽￣)～','(づ￣ 3￣)づ'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        </div>
                        </p>
                    </div>
                </div>
            </div>
        </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Hero;
