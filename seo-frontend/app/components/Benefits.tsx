"use client";


import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";

interface BenefitType {
    icon:string,
    title:string,
    description:string
}

const benefits:BenefitType[]=[
    {
        icon:"FaShippingFast",
        title:"Fast Shipping",
        description:"We ensure quick delivery of your orders with reliable shipping partners."
    },
    {
        icon:"FaHeadset",
        title:"24/7 Support",
        description:"Our support team is available around the clock to assist you."
    },
    {
        icon:"FaShieldAlt",
        title:"Secure Payment",
        description:"Your transactions are safe with our secure payment gateways."  
    },
    {
        icon:"FaShippingFast",
        title:"Quality Assurance",
        description:"We guarantee the quality of our products with rigorous testing."
    }
]

export default function Benefits(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 max-w-7xl mx-auto px-6 ">
            {benefits.map((benefit, index)=>(
                <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform transition-transform duration-300 ease-in-out hover:bg-[lab(83.27_8.65_108.89_/_0.99)] hover:scale-105 hover:-translate-y-1">
                    <div className="text-4xl mb-4 text-blue-600">
                        {benefit.icon === "FaShippingFast" && <FaShippingFast />}
                        {benefit.icon === "FaHeadset" && <FaHeadset />} 
                        {benefit.icon === "FaShieldAlt" && <FaShieldAlt />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>  
                </div>
            ))}

        </div>
    )
}