import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-cyan-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-1024.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"A smooth transaction from start to finish! DL. Gupta here, and I'm really happy with the quick delivery and effectiveness of the medicine I bought from this platform. Highly recommended!"





</p>
                                <span className="inline-block h-1 w-10 rounded bg-cyan-400 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Pf. Manoj Sharma</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Leader</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportfemale-2-1024.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">"Impressive experience! This is Emily, and I'm delighted with the prompt delivery and the medicine's efficiency I found on this platform. Definitely worth recommending!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-cyan-400 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Emily</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">CTO</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.rahejahospital.com//assets/images/doctor/63e09d0180143_dr-profile-male.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">


"Exceptional service! I'm Smith, and I'm thoroughly impressed by the swift delivery and the medicine's effectiveness from this platform. I highly recommend it!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-cyan-400 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Dr. Smith</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Senior heart surgeon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial


// https://cdn-icons-png.flaticon.com/128/2763/2763444.png