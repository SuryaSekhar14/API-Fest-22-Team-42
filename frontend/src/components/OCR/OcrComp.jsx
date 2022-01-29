import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
// import validator from 'validator'

const logo = require('../../assets/img/features1.png');

const OcrComp = () => {

    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (e) => {
    //   var email = e.target.value
    
    //   if (validator.isEmail(email)) {
    //     setEmailError('Valid Email (づ￣ 3￣)づ')
    //   } else {
    //     setEmailError('Enter valid Email! ◑﹏◐')
    //   }
    // }  

    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }

    const onFileChange = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
    }

    const onSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove())
    }

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }

    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
        const textMsg = files.length > 0 ? 'Upload Again' : 'Drag & Drop an Image File or Click to Upload'

        return (
            <label className="text-xl font-semibold justify-center py-28 text-gray-400">
                {textMsg}
                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept={accept}
                    onChange={e => {
                        getFilesFromEvent(e).then(chosenFiles => {
                            onFiles(chosenFiles)
                        })
                    }}
                />
            </label>
        )
    }

    return (
        <>
            <div className="w-full bg-white py-10">
                <div className="container mx-auto px-6 flex items-start justify-center">
                    <div className="w-full">
                        {/* Card is full width. Use in 12 col grid for best view. */}
                        {/* Card code block start */}
                        <div className="flex flex-col lg:flex-row mx-auto bg-white drop-shadow-2xl rounded-lg">
                            <div className="w-full lg:w-1/2 px-12 flex flex-col items-center py-28">
                                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 flex items-center justify-center">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src={logo} alt="avatar" />
                                </div>
                                <h2 className="text-indigo-800 text-2xl tracking-normal font-semibold mb-1">SADS OCR</h2>
                                {/* <p className="flex text-gray-600 text-sm tracking-normal font-normal mb-3 text-center">
                                    <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={11} r={3} />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    </span>
                                    Las Vegas, Nevada
                                </p> */}
                                <p className="text-gray-600 text-sm tracking-normal font-normal mb-8 text-center w-10/12">Here is the OCR API<br/>Select the Image and press submit </p>
                                {/* <div className="flex items-start">
                                    <div className>
                                        <h2 className="text-gray-600 text-2xl leading-6 mb-2 text-center">82</h2>
                                        <p className="text-gray-800 text-sm leading-5">Reviews</p>
                                    </div>
                                    <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                                        <h2 className="text-gray-600 text-2xl leading-6 mb-2 text-center">28</h2>
                                        <p className="text-gray-800 text-sm leading-5">Projects</p>
                                    </div>
                                    <div className>
                                        <h2 className="text-gray-600 text-2xl leading-6 mb-2 text-center">42</h2>
                                        <p className="text-gray-800 text-sm leading-5">Approved</p>
                                    </div>
                                </div> */}
                                {/* <select inputId="inputLang" className="block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="Input Language">
                                <option value>
                                    Input Language
                                </option>
                                {languages.map((lang) => (
                                    <option className="text-gray-700" key={lang.id} value={lang.language}>{lang.language}</option>
                                ))}
                                </select>
                                <select inputId="outputLang" className="mt-4 block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="Input Language">
                                <option value>
                                    Output Language
                                </option>
                                {languages.map((lang) => (
                                    <option className="text-gray-700" key={lang.id} value={lang.language}>{lang.language}</option>
                                ))}
                                </select> */}
                                {/* {console.log(iLang.value)}
                                {console.log(oLang.value)} */}
                                    {/* <label htmlFor="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                        Email
                                    </label> */}
                                {/* <input id="email" className="text-gray-600 bg-white focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Enter you Email" onChange={(e) => validateEmail(e)}/> */}
                                {/* <span className="text-sm mt-1 text-gray-600 font-semibold">{emailError}</span> */}
                                {/* <button type="button" className="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                 Submit ヾ(•ω•`)o
                                </button> */}
                            </div>
                            <div className="w-full lg:w-1/2 px-6 border-t border-b lg:border-t-0 border-gray-300 flex flex-col items-center py-6">
                            <Dropzone
                                onSubmit={onSubmit}
                                onChangeStatus={onFileChange}
                                InputComponent={selectFileInput}
                                getUploadParams={fileParams}
                                getFilesFromEvent={getFilesFromEvent}
                                accept="image/*"
                                maxFiles={1}
                                inputContent="Drop A File"
                                className="w-full h-full"
                                styles={{
                                    dropzone: { height: 500 },
                                    // dropzoneActive: { borderColor: 'green' },
                                }}            
                            />
                            </div>
                        </div>
                        {/* Card code block end */}
                    </div>
                </div>
            </div>
        </>       
    );
};

export default OcrComp;