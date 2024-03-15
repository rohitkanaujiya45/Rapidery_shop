// // import React from 'react';

// // function PrivacyPolicyPage() {
// //   return (
// //     <div className="container mx-auto px-4 py-8 bg-cyan-100">
// //       <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
// //       <p className="mb-4">
// //         Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
// //       </p>
// //       <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
// //       <p className="mb-4">
// //         We may collect personal information such as your name and email address when you voluntarily submit it to us through our website.
// //       </p>
// //       <p className="mb-4">
// //         We may also collect non-personal information, such as your browser type, IP address, and the pages you visit on our site, for statistical purposes to improve our services.
// //       </p>
// //       <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
// //       <p className="mb-4">
// //         We may use the information we collect from you to:
// //       </p>
// //       <ul className="list-disc pl-4 mb-4">
// //         <li>Provide and maintain our services</li>
// //         <li>Respond to your inquiries and provide customer support</li>
// //         <li>Send you promotional or marketing communications (if you have opted in)</li>
// //         <li>Improve our website and services</li>
// //         <li>Comply with legal obligations</li>
// //       </ul>
// //       <h2 className="text-2xl font-bold mb-2">Information Sharing</h2>
// //       <p className="mb-4">
// //         We may share your personal information with third parties only in the following circumstances:
// //       </p>
// //       <ul className="list-disc pl-4 mb-4">
// //         <li>With your consent</li>
// //         <li>To comply with legal obligations</li>
// //         <li>To protect and defend our rights and property</li>
// //         <li>With service providers who help us deliver our services (e.g., hosting providers, payment processors)</li>
// //       </ul>
// //       <h2 className="text-2xl font-bold mb-2">Security</h2>
// //       <p className="mb-4">
// //         We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.
// //       </p>
// //       <h2 className="text-2xl font-bold mb-2">Changes to This Privacy Policy</h2>
// //       <p className="mb-4">
// //         We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
// //       </p>
// //       <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
// //       <p>
// //         If you have any questions about our privacy policy, please contact us at privacy@example.com.
// //       </p>
// //     </div>
// //   );
// // }

// // export default PrivacyPolicyPage;


import React from 'react';

function PrivacyPolicyPage() {
  return (
            <div className="bg-cyan-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">PRIVACY POLICY</h1>

{/* 
    <div className="container mx-auto px-4 py-8 bg-white-100">
      <div className="bg-cyan-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1> */}
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">
        <p className="mb-6">
          Your privacy is imp to us. It is our policy to respect your privacy regarding any info we may collect from you across our website.
        </p>
        </section>
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information such as your name and email address when you voluntarily submit it to us through our website.
        </p>
        <p className="mb-6">
          We may also collect non-personal information, such as your browser type, IP address, and the pages you visit on our site, for statistical purposes to improve our services.
        </p>
        </section>
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-8 mb-6">
          <li className="mb-2">Provide and maintain our services</li>
          <li className="mb-2">Respond to your inquiries and provide customer support</li>
          <li className="mb-2">Send you promotional or marketing communications (if you have opted in)</li>
          <li className="mb-2">Improve our website and services</li>
          <li className="mb-2">Comply with legal obligations</li>
        </ul>
        </section>
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
        <ul className="list-disc pl-8 mb-6">
          <li className="mb-2">With your consent</li>
          <li className="mb-2">To comply with legal obligations</li>
          <li className="mb-2">To protect and defend our rights and property</li>
          <li className="mb-2">With service providers who help us deliver our services (e.g., hosting providers, payment processors)</li>
        </ul>
        </section>
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Security</h2>
        <p className="mb-6">
          We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.
        </p>
        </section>
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
        </p>
        </section>
        <section className="bg-cyan-100 shadow-md rounded-lg px-8 py-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions about our privacy policy, please contact us at privacy@example.com.
        </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;


// import React from 'react';

// const APP_NAME = "My Name";

// const Privacy = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-3xl font-bold mb-8 text-center">PRIVACY POLICY</h1>

//                 <section className="bg-white shadow-md rounded-lg px-8 py-6 mb-8">
//                     <h2 className="text-xl font-bold mb-4">Welcome to {APP_NAME}!</h2>
//                     <p className="text-sm">
//                         Welcome to our privacy policy. We are committed to protecting your privacy and ensuring you have a positive experience using {APP_NAME}.
//                         {/* Add your content here */}
//                     </p>
//                 </section>

//                 <section className="bg-white shadow-md rounded-lg px-8 py-6 mb-8">
//                     <h2 className="text-xl font-bold mb-4">What Information We Collect</h2>
//                     <p className="text-sm">
//                         Our primary goal in collecting information is to improve our services and administer your use of {APP_NAME}. We collect only necessary information to provide the services you use.
//                         {/* Add your content here */}
//                     </p>
//                 </section>

//                 <section className="bg-white shadow-md rounded-lg px-8 py-6 mb-8">
//                     <h2 className="text-xl font-bold mb-4">Personal Information</h2>
//                     <p className="text-sm">
//                         Your use of our Site and Services is voluntary. We may ask you to provide certain personally identifiable information. This includes your name, email, photos, and more.
//                         {/* Add your content here */}
//                     </p>
//                     <p className="text-sm mt-2">
//                         All payment information for Story Contests is handled by our payment processor, Stripe. Please refer to Stripe’s privacy policy for details.
//                     </p>
//                 </section>

//                 {/* Add more sections as needed */}

//             </div>
//         </div>
//     );
// };

// export default Privacy;
