import React, { useState } from 'react';
import codeB from '../assets/httpskraftechnology.com.png'

const ComponentName = () => {        
    return (
        <div className="bg-white">
        <section className="py-10 sm:py-16 lg:py-24 font-google">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Building Next-Gen Solutions 
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Kraf Technology, we turn your digital dreams into reality. Let's reshape and elevate your online presence together.</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-black border rounded-full transition-all duration-200  hover:bg-[#15a885]" role="button"> Discover More <ion-icon name="chevron-forward-outline"></ion-icon></a>

                        <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 border px-10 py-4 rounded-full hover:bg-[#15a885] gap-2">
                            Schedule a Call <ion-icon name="call-sharp"></ion-icon>
                        </a>
                    </div>
                </div>

                <div>
                    <img className="w-full" src='https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8192.jpg?t=st=1734139553~exp=1734143153~hmac=c9619520430fa42b0722eec648ca734c979efbd59dddc0e8d36be9fb79614a12&w=1480' alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    )
}
export default ComponentName;