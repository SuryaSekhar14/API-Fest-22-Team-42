import React from 'react';
import { Footer, Navbar } from '../../components';
import OcrComp from '../../components/OCR/OcrComp';

const Ocr = () => {
    return (
        <div>
        <Navbar/>
        <OcrComp />
        <Footer />
        </div>
    );
}
export default Ocr;
