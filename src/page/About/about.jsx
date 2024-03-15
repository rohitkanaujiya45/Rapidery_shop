import React from "react";

function About() {
  const imageUrl = "https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=900&t=st=1702741190~exp=1702741790~hmac=a890852f843193c1f44c30042dc1bc1da21798d380382ffbd32c6872092ef62d"; // Replace with your image URL
//   https://img.freepik.com/free-photo/doctor-nurse-special-equipment_23-2148980713.jpg?w=826&t=st=1702741704~exp=1702742304~hmac=5025c1f5a8dd2e30c5dd51ecdb1ee763a5267aa047db341edc00c58bcbd99dc9
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 p-8 flex justify-center items-center gap-6">
      <div className="w-1/2 max-w-full text-center">
        <img src={imageUrl} alt="Doctor Group" className="w-4/5 h-auto mx-auto rounded-lg shadow-md" />
      </div>

      <div className="w-1/2">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
          <span className="relative">
            About Us
            <span className="absolute w-5/6 h-1 bg-cyan-600 rounded-lg bottom-0 left-0"></span>
          </span>
        </h3>
        <p className="mt-4 text-gray-600 font-light md:text-lg">
          Welcome to Med-Zippy, your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you.
        </p>

        <h4 className="font-bold text-xl md:text-2xl lg:text-3xl mt-6 mb-4 text-gray-800">
          Your Solutions
        </h4>

        {/* Solution Steps */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-600 text-white">
              1
            </div>
            <h5 className="ml-2 font-semibold text-lg text-gray-800">
              Choose a Specialist
            </h5>
          </div>
          <p className="text-gray-600 font-light">
            Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-600 text-white">
              2
            </div>
            <h5 className="ml-2 font-semibold text-lg text-gray-800">
              Make a Schedule
            </h5>
          </div>
          <p className="text-gray-600 font-light">
            Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-600 text-white">
              3
            </div>
            <h5 className="ml-2 font-semibold text-lg text-gray-800">
              Get Your Solutions
            </h5>
          </div>
          <p className="text-gray-600 font-light">
            Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.
          </p>
        </div>
        {/* End of Solution Steps */}
      </div>
    </div>
  );
}

export default About;
