import {useNavigate} from 'react-router-dom'


const obdec = require('../assets/img/obdec.jpg')


const products = [
    {
      id: 1,
      name: 'Object Detection API',
      href: '/',
      imageSrc: obdec,
      imageAlt: "Upload and Image and get a list of objects present in the image",
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
                <div key={product.id} onClick={(e)=>navigate(product.href,{replace:true})} className="group shadow-xl rounded relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-center">
                    <div>
                    <h3 className="text-2xl text-gray-900 mb-1">
                        <a href={product.href}>
                        <span aria-hidden="true" className="" />
                        {product.name}
                        </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-700">{product.price}</p>
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