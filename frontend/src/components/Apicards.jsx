import {useNavigate} from 'react-router-dom'


const obdec = require('../assets/img/features1.png')
const trans = require('../assets/img/translate.jpg')
const pdf = require('../assets/img/pdf.jpg')
const aiartists = require('../assets/img/aiartist.jpg')
const barterlink = require('../assets/img/barterlink.jpg')
const products = [
    {
      id: 1,
      name: 'Optical Character Recognition API',
      href: '/apipage/ocr',
      imageSrc: obdec,
      imageAlt: "Upload and Image and get a list of objects present in the image",
      price: '$ 0.00 (PS: We are free!)',
      color: '#000000',
    },
    {
        id: 2,
        name: 'Translate API',
        href: '/apipage/translate',
        imageSrc: trans,
        imageAlt: "Enter a text to see the translate live",
        price: '$ 0.00 (PS: We are free!)',
        color: '#000000', 
    },
    {
        id: 3,
        name: 'We ♥️ PDFs',
        href: '/apipage/pdf',
        imageSrc: pdf,
        imageAlt: "Upload Images and get a pdf as output",
        price: '$ 0.00 (PS: We are free!)',
        color: '#000000',
    },
    {
        id: 4,
        name: 'AI Generated Art',
        href: '/apipage/aiartist',
        imageSrc: aiartists,
        imageAlt: "AI Generated Art using VQGAN and CLIP",
        price: '$ 0.00 (PS: We are free!)',
        color: '#000000',
    },
    {
        id: 5,
        name: 'BarterLink',
        href: '/api/barterlink',
        imageSrc: barterlink,
        imageAlt: "BarterLink, a place for all your crypto needs.",
        price: '$ 0.00 (PS: We are free!)',
        color: '#000000',
    },
    // More products...
  ]
 
const Apicards = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-gray-100">
        <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="text-4xl font-semibold tracking-tight text-indigo-600 -mt-16">Application Providing Interfaces</h2> */}

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div className="shadow-2xl rounded-lg">
                <div key={product.id} onClick={(e)=>navigate(product.href,{replace:true})} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover rounded-lg lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-center text-center">
                    <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        <a href={product.href}>
                        <span aria-hidden="true" className="" />
                        {product.name}
                        </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-700">{product.price}</p>
                    <p className="text-sm font-base text-gray-500 mb-4 mt-2 mr-4 ml-4">{product.imageAlt}</p>
                    </div>
                </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}
export default Apicards;  