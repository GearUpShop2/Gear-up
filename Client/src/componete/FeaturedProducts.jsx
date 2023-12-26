import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <section className="flex items-center font-poppins bg-gray-100 lg:h-auto">
        <div className="container p-4 mx-auto">
          <h2 className="pb-2 text-2xl font-bold text-center text-gray-800 md:text-4xl dark:text-gray-400">
            Top rated
          </h2>
          <div className="w-20 mx-auto mb-6 border-b border-black dark:border-gray-400" />

          <div className="flex flex-wrap mb-20 -mx-3">
            {products.map((product, index) => (
              <div key={index} className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
                <div
                  className="relative w-full h-64 mb-6 bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url(${product.imageUrl})`,
                  }}
                >
                  {/* ... existing code ... */}
                  <a className="absolute inset-0 flex items-end" href="#">
                    <div className="pb-12 pl-12">
                      <h2 className="mb-2 text-3xl font-bold text-white ">
                        {product.name}
                      </h2>
                      <p className="text-xl font-bold text-white ">
                        <span>${product.price}</span>
                        {/* <span className="text-sm font-normal line-through">{product.oldPrice}</span> */}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProducts;
