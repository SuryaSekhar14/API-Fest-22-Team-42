import React, {useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import validator from 'validator'
import { useNavigate } from 'react-router-dom';


const logo = require('../../assets/img/pdf.jpg');

var emailDone = false;
var eid = '';
const PdfCombiner = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('Valid Email (づ￣ 3￣)づ')
            eid = email
        } else {
            setEmailError('Enter valid Email! ◑﹏◐')
        }
    }  

    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }

    const onFileChange = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
    }

    const onSubmit = (files, allFiles) => {
        if (emailError === 'Valid Email (づ￣ 3￣)づ') {
            emailDone = true;
            // console.log(allFiles)
            // console.log(eid)
            setEmailModal(true)
            pdfapi(files, eid)
        } else {
            emailDone = false;
            setShowModal(true)
            // console.log(emailDone)
            // console.log(files)
            // console.log(allFiles)
        }
            // pdfapi()
            // axios.post('http://
        // return allFiles.forEach(f => f.remove())
        console.log(files.map(f => f.file))
        allFiles.forEach(f => f.remove())
        
    }

    const pdfapi = (files,eid) => {
        var axios = require('axios');
        var FormData = require('form-data');
        // var fs = require('fs');
        var data = new FormData();
        files.map(f => data.append('image', f.file))
        data.append('email', eid);

        var config = {
        method: 'post',
        url: 'https://sads-apis-backend.herokuapp.com/api/imagetopdf/',
        headers: { 
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
    });


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
                    multiple
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
               {/*Modal Code*/}
               {showModal ? (
                    <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-2xl font-semibold text-gray-500">
                                Email Error
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Please enter a valid email before trying to make a PDF.
                                We send the PDF directly to that particular Email.
                            </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                {emailModal ? (
                    <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-2xl font-semibold text-gray-500">
                                Email Sent
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                We have sent you the Email with the PDF.
                                <br/>
                                Please check your Email and download the PDF. <br/>
                                ( •̀ ω •́ )✧
                            </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => navigate('/',{replace:true})}
                            >
                                Close
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
               
                <div className="container mx-auto px-6 flex items-start justify-center">
                    <div className="w-full">
                        {/* Card is full width. Use in 12 col grid for best view. */}
                        {/* Card code block start */}
                        <div className="flex flex-col lg:flex-row mx-auto bg-white drop-shadow-2xl rounded-lg">
                            <div className="w-full lg:w-1/2 px-12 flex flex-col items-center py-28">
                                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 flex items-center justify-center">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src={logo} alt="avatar" />
                                </div>
                                <h2 className="text-indigo-800 text-2xl tracking-normal font-semibold mb-1">SADS PDF</h2>
                                <p className="text-gray-600 text-sm tracking-normal font-normal mb-8 text-left w-10/12">Here is the PDFs API, Select the Images and press submit once it is compiled you will recieve an output in your mail.
                                <br/><br/>How to convert a PDF to JPG online:
                                <br/>
                                Follow these easy steps to change a JPG, PNG, or TIFF to PDF with the SADS converter:
                                <br/>
                                [*] Click beside, or drag and drop your PDF into the drop zone.
                                <br/>
                                [*] Select the Images you want to convert to a PDF with the help of SADS.
                                <br/>
                                [*] Enter the email address you want to send the PDF to.
                                <br/>
                                [*] Click Submit.</p>
                                <input id="email" className="text-gray-600 bg-white focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal w-3/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Enter Email" onChange={((e) => (validateEmail(e)))}/>
                                <span className="text-sm mt-1 text-gray-600 font-semibold">{emailError}</span>
                                {}
                            </div>
                            <div className="w-full lg:w-1/2 px-6 mr-10 border-t border-b lg:border-t-0 border-gray-300 flex flex-col justify-center py-6">
                            <Dropzone
                                onSubmit={onSubmit}
                                onChangeStatus={onFileChange}
                                InputComponent={selectFileInput}
                                getUploadParams={fileParams}
                                getFilesFromEvent={getFilesFromEvent}
                                accept="image/*"
                                maxFiles={5}
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

export default PdfCombiner;