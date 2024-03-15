// import React from 'react';

// const Return = () => {
//   return (
//     <div className="flex flex-wrap items-center justify-center bg-cyan-100">
//       <div className="w-full md:w-1/2 px-4 py-8">
//         <img
//           className="w-full h-auto"
//           src="https://img.freepik.com/free-vector/mechanism-teamwork-cartoon-characters-spinning-gears-together-coworking-collaboration-partnership-team-building-cooperation-technology_335657-287.jpg?w=740&t=st=1703783218~exp=1703783818~hmac=705ee3f689337499a71fe936c574ee8a4b54a8c68e857410033ad751f5fcfa53"
//           alt="Return Policy"
//         />
//       </div>
//       <div className="w-full md:w-1/2 px-4 py-8 border-l-4 border-cyan-300">
//         <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
//         <p className="text-gray-700 mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
//           nunc sit amet ligula convallis rutrum. Nullam fermentum nibh in
//           faucibus commodo. Ut efficitur metus eget ipsum dictum, sit amet
//           eleifend nunc fringilla.
//         </p>
//         <p className="text-gray-700 mb-6">
//           Aliquam id sagittis diam. Morbi euismod, enim ut fringilla euismod,
//           magna nunc rhoncus ante, nec mollis odio mauris quis purus. Donec
//           lacinia, mauris suscipit laoreet malesuada, nulla velit egestas
//           mauris, ac molestie velit purus quis nunc.
//         </p>
//         <p className="text-gray-700 mb-6">
//           Sed ac risus lacinia, consectetur ante vel, laoreet risus. Ut sit amet
//           mattis neque, ac hendrerit sapien. Maecenas quis odio et metus
//           maximus scelerisque. Nunc at ante nec neque lobortis tempus. Donec
//           ultricies mi in leo elementum, ac mattis nulla ultrices.
//         </p>
//         <p className="text-gray-700 mb-6">
//           In hac habitasse platea dictumst. Quisque tortor nunc, efficitur quis
//           consectetur id, pellentesque eu justo. Mauris ac leo ac odio varius
//           laoreet quis a ipsum. Praesent non dignissim massa.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Return;


import React from 'react';

function ReturnPolicyPage() {
  return (
    <div className="bg-cyan-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Return Policy</h1>
        <div className="bg-cyan-100 p-8 rounded-lg shadow-lg">
          <p className="mb-6">
            We want you to be completely satisfied with your purchase. If you need to return an item, please review the information below.
          </p>
          <h2 className="text-xl font-bold mb-4">Returns</h2>
          <p className="mb-6">
            You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
          </p>
          <p className="mb-6">
            Your item needs to have the receipt or proof of purchase.
          </p>
          <h2 className="text-xl font-bold mb-4">Refunds</h2>
          <p className="mb-6">
            Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.
          </p>
          <p className="mb-6">
            If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
          </p>
          <h2 className="text-xl font-bold mb-4">Shipping</h2>
          <p className="mb-6">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
          </p>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions on how to return your item to us, contact our customer service team at support@example.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReturnPolicyPage;