// // // // import React, { useContext } from 'react'
// // // // import myContext from '../../context/data/myContext'

// // // // function Filter() {
// // // //     const context = useContext(myContext)
// // // //     const { mode, searchkey, setSearchkey,filterType, setFilterType,
// // // //         filterPrice, setFilterPrice, product  } = context

// // // //     return (
// // // //         <div>
// // // //            <div className=' container mx-auto px-4 mt-5 '>
// // // //                 <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
// // // //                     style={{
// // // //                         backgroundColor: mode === 'dark' ? '#282c34' : '',
// // // //                         color: mode === 'dark' ? 'white' : '',
// // // //                     }}>
// // // //                     <div className="relative">
// // // //                         <div className="absolute flex items-center ml-2 h-full">
// // // //                             <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                                 <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
// // // //                             </svg>
// // // //                         </div>
// // // //                         <input
// // // //                             type="text"
// // // //                             name="searchkey"
// // // //                             id="searchkey"
// // // //                             value={searchkey}
// // // //                         onChange={e => setSearchkey(e.target.value)}
// // // //                             placeholder="Search here"
// // // //                             className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }} />
// // // //                     </div>
// // // //                     <div className="flex items-center justify-between mt-4">
// // // //                         <p className="font-medium">
// // // //                             Filters
// // // //                         </p>
// // // //                         <button className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" style={{ color: mode === 'dark' ? 'white' : '' }}>
// // // //                             Reset Filter
// // // //                         </button>
// // // //                     </div>
// // // //                     <div>
// // // //                         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
// // // //                         <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// // // //                             {product.map((item, index) => {
// // // //                                 return (
// // // //                                     <option value={item.category}>{item.category}</option>
// // // //                                 )
// // // //                             })}
// // // //                         </select>
// // // //                         <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// // // //                             {product.map((item, index) => {
// // // //                                 return (
// // // //                                     <option value={item.price}>{item.price}</option>
// // // //                                 )
// // // //                             })}
// // // //                         </select>

// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     )
// // // // }

// // // // export default Filter


// // // import React, { useContext, useState, useEffect } from 'react';
// // // import myContext from '../../context/data/myContext';

// // // function Filter() {
// // //     const context = useContext(myContext);
// // //     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

// // //     // State for speech recognition
// // //     const [listening, setListening] = useState(false);
// // //     const [spokenText, setSpokenText] = useState('');

// // //     // Function to handle speech recognition
// // //     const handleSpeechRecognition = () => {
// // //         const recognition = new window.webkitSpeechRecognition(); // for Chrome
// // //         recognition.lang = 'en-US';
// // //         recognition.start();

// // //         recognition.onstart = () => {
// // //             setListening(true);
// // //         };

// // //         recognition.onresult = (event) => {
// // //             const transcript = event.results[0][0].transcript;
// // //             setSpokenText(transcript);
// // //             setSearchkey(transcript); // Set spoken text as search key
// // //         };

// // //         recognition.onend = () => {
// // //             setListening(false);
// // //         };
// // //     };

// // //     // Start speech recognition when listening state changes
// // //     useEffect(() => {
// // //         if (listening) {
// // //             handleSpeechRecognition();
// // //         }
// // //     }, [listening]);

// // //    // ... (previous code remains unchanged)

// // // return (
// // //     <div>
// // //         {/* ...Your existing code */}
// // //         <div className="relative">
// // //             <div className="absolute flex items-center ml-2 h-full">
// // //                 {/* Your existing search icon */}
// // //             </div>
// // //             <input
// // //                 type="text"
// // //                 name="searchkey"
// // //                 id="searchkey"
// // //                 value={searchkey}
// // //                 onChange={(e) => setSearchkey(e.target.value)}
// // //                 placeholder="Search here"
// // //                 className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
// // //                 style={{
// // //                     backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '',
// // //                     color: mode === 'dark' ? 'white' : '',
// // //                 }}
// // //             />
// // //             <button
// // //                 onClick={() => setListening(!listening)}
// // //                 className="absolute top-1/2 right-4 transform -translate-y-1/2 px-3 py-2 bg-blue-500 text-white rounded-md shadow-md"
// // //                 style={{
// // //                     // Add your custom styles here
// // //                 }}
// // //             >
// // //                 {listening ? 'Stop Listening' : 'Start Listening'}
// // //             </button>
// // //         </div>
// // //         {/* ...Rest of your code */}
// // //     </div>
// // // );
// // // // ... (rest of the code remains unchanged)

// // // }

// // // export default Filter;


// // import React, { useContext, useState } from 'react';
// // import myContext from '../../context/data/myContext';

// // function Filter() {
// //     const context = useContext(myContext);
// //     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

// //     const [listening, setListening] = useState(false);

// //     const handleSpeechRecognition = () => {
// //         const recognition = new window.webkitSpeechRecognition(); // for Chrome
// //         recognition.lang = 'en-US';
// //         recognition.start();

// //         recognition.onstart = () => {
// //             setListening(true);
// //         };

// //         recognition.onresult = (event) => {
// //             const transcript = event.results[0][0].transcript;
// //             setListening(false);
// //             setSearchkey(transcript);
// //         };

// //         recognition.onend = () => {
// //             setListening(false);
// //         };
// //     };

// //     const handleImageUpload = (e) => {
// //         const file = e.target.files[0];
// //         // Process the uploaded image as needed
// //     };

// //     return (
// //         <div className='container mx-auto px-4 mt-5'>
// //             <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
// //                 style={{
// //                     backgroundColor: mode === 'dark' ? '#282c34' : '',
// //                     color: mode === 'dark' ? 'white' : '',
// //                 }}
// //             >
// //                 <div className="relative">
// //                     <div className="absolute flex items-center ml-2 h-full">
// //                         {/* Your search icon */}
// //                     </div>
// //                     <input
// //                         type="text"
// //                         name="searchkey"
// //                         id="searchkey"
// //                         value={searchkey}
// //                         onChange={(e) => setSearchkey(e.target.value)}
// //                         placeholder="Search here"
// //                         className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
// //                         style={{
// //                             backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '',
// //                             color: mode === 'dark' ? 'white' : '',
// //                         }}
// //                     />
// //                 </div>
// //                 <div className="flex items-center justify-between mt-4">
// //                     <p className="font-medium">
// //                         Filters
// //                     </p>
// //                     <button
// //                         className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
// //                         style={{ color: mode === 'dark' ? 'white' : '' }}
// //                         onClick={() => {
// //                             setFilterType('');
// //                             setFilterPrice('');
// //                         }}
// //                     >
// //                         Reset Filter
// //                     </button>
// //                 </div>
// //                 <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
// //                     {/* Filter options */}
// //                 </div>
// //                 <div className="mt-4">
// //                     <button
// //                         onClick={() => setListening(!listening)}
// //                         className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md mr-4"
// //                         style={{ color: mode === 'dark' ? 'white' : '' }}
// //                     >
// //                         {listening ? 'Stop Listening' : 'Start Listening'}
// //                     </button>
// //                     <label htmlFor="imageUpload" className="block font-medium">
// //                         Upload Image
// //                     </label>
// //                     <input
// //                         type="file"
// //                         accept="image/*"
// //                         id="imageUpload"
// //                         onChange={(e) => handleImageUpload(e)}
// //                         className="mt-2"
// //                     />
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Filter;



// import React, { useContext, useState } from 'react';
// import { BsMic, BsFillImageFill } from 'react-icons/bs'; // Import required icons from react-icons
// import myContext from '../../context/data/myContext';

// function Filter() {
//     const context = useContext(myContext);
//     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

//     const [listening, setListening] = useState(false);

//     const handleSpeechRecognition = () => {
//         // Your speech recognition logic
//     };

//     const handleImageUpload = (e) => {
//         // Your image upload logic
//     };

//     return (
//         <div className='container mx-auto px-4 mt-5'>
//             <div className="p-5 rounded-lg bg-gray-100 shadow-xl border border-gray-200 dark:bg-gray-800 dark:text-white">
//                 <div className="relative flex items-center">
//                     <BsMic className="absolute ml-2 text-gray-600 dark:text-white" onClick={handleSpeechRecognition} style={{ cursor: 'pointer' }} />
//                     <input
//                         type="text"
//                         name="searchkey"
//                         id="searchkey"
//                         value={searchkey}
//                         onChange={(e) => setSearchkey(e.target.value)}
//                         placeholder="Search here"
//                         className="pl-10 py-3 w-full rounded-md bg-violet-0 border-transparent outline-none text-sm dark:bg-gray-700 dark:text-white"
//                     />
//                 </div>
//                 {/* Other sections of your code */}
//                 <div className="mt-4">
//                     <button
//                         onClick={() => setListening(!listening)}
//                         className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md mr-4 dark:bg-gray-700 dark:text-white"
//                     >
//                         {listening ? 'Stop Listening' : 'Start Listening'}
//                     </button>
//                     <label htmlFor="imageUpload" className="block font-medium flex items-center">
//                         <BsFillImageFill className="mr-2 text-gray-600 dark:text-white" />
//                         Upload Image
//                     </label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         id="imageUpload"
//                         onChange={(e) => handleImageUpload(e)}
//                         className="mt-2"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Filter;


import React, { useContext, useState } from 'react';
import { BsMic, BsFillImageFill } from 'react-icons/bs';
import myContext from '../../context/data/myContext';

function Filter() {
  const context = useContext(myContext);
  const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

  const [listening, setListening] = useState(false);

  const handleSpeechRecognition = () => {
    // Add your speech recognition logic here
  };

  const handleImageUpload = (e) => {
    // Add your image upload logic here
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="p-5 rounded-lg bg-white shadow-lg border border-gray-200">
        <div className="relative flex items-center">
          <img
            src="https://logos-download.com/wp-content/uploads/2022/01/Zippy_Logo-1536x472.png"
            alt="Google Logo"
            className="h-12 mr-3"
          />
          <input
            type="text"
            name="searchkey"
            id="searchkey"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            placeholder="Search Medicine"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <BsMic
            className="ml-2 text-gray-600 cursor-pointer"
            onClick={handleSpeechRecognition}
          />
        </div>
        {/* Other sections of your code */}
        <div className="mt-4">
          <button
            onClick={() => setListening(!listening)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md mr-4"
          >
            {listening ? 'Stop Listening' : 'Start Listening'}
          </button>
          <label htmlFor="imageUpload" className="block font-medium flex items-center">
            <BsFillImageFill className="mr-2 text-gray-600" />
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            onChange={(e) => handleImageUpload(e)}
            className="mt-2"
          />
        </div>
        {/* Additional sections of your code */}
      </div>
    </div>
  );
}

export default Filter;