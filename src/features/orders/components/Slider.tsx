// import { useState } from "react";
// import Slider from "react-slick";

// const ProductCarousel = () => {
//   const totalProducts = 100;
//   const productsPerPage = 20;
//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   const [currentPage, setCurrentPage] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     afterChange: (current) => setCurrentPage(current),
//   };

//   const renderProducts = () => {
//     const products = [];
//     const startIndex = currentPage * productsPerPage;
//     const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

//     for (let i = startIndex; i < endIndex; i++) {
//       products.push(<div key={i}>Product {i + 1}</div>); // כאן יהיה הקוד לתצוגת מוצרים האמיתיים
//     }

//     return products;
//   };

//   return (
//     <div>
//       <Slider {...settings}>{renderProducts()}</Slider>
//       <div>
//         Page {currentPage + 1} of {totalPages}
//       </div>
//     </div>
//   );
// };

// export default ProductCarousel;
