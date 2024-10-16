// import React from 'react';
// import hero from '../Assest/video2.mp4';

// function Herosection() {
//   return (
//     <div>
//       <div className="relative min-h-[70vh] flex items-center justify-center z-[-2] rounded-xl">
//         <video
//           className="w-full h-full object-cover absolute top-0 left-0 rounded-xl" 
//           autoPlay
//           muted
//           loop
//         >
//           <source src={hero} type="video/mp4" />
//         </video>
//         <div className="hero-overlay absolute w-full h-full bg-black bg-opacity-10" />
//         <div className="hero-content text-center text-neutral-content relative z-10">

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Herosection;






import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Herosection = () => {
  
  return (
    
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full mx-auto ">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let's change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://striveme.com/img/%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/%D9%86%D8%B3%D8%A7%D8%A6%D9%8A%D8%A9.jpg",
  },
  {
    id: 2,
    src: "https://taqatoil.com/wp-content/uploads/2023/12/714J7AopaCL._AC_SX679_.jpg",
  },
  {
    id: 3,
    src: "https://nzoi.com/wp-content/uploads/2024/01/medium_8_551cbb3648-300x300.jpg",
  },
  {
    id: 4,
    src: "https://img.joomcdn.net/c56f08110679f2b7ca0c019386832d6768fe7782_original.jpeg",
  },
  {
    id: 5,
    src: "https://striveme.com/img/article/19074/%D8%A7%D9%83%D8%B3%D8%B3%D9%88%D8%A7%D8%B1%D8%A7%D8%AA_%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9.jpg",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_FLqn3F1etEeYzas-1j1qdTU86qudr_AYw&s",
  },
  {
    id: 7,
    src: "https://media.zid.store/thumbs/020ece03-e6ae-4699-abfb-0f1555a52ce7/335b5b8c-e7e3-4b86-82d8-757b684c85fc-thumbnail-1000x1000-70.jpg",
  },
  {
    id: 8,
    src: "https://media.zid.store/thumbs/2d1b4a2e-5d16-4da4-a8fc-bc23f55be859/638da764-b155-47c1-8282-b5ca1e18a24a-thumbnail-1000x1000-70.jpg",
  },
  {
    id: 9,
    src: "https://cdn.mafrservices.com/sys-master-root/h1e/hdc/27010538536990?im=Resize=480",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
    
  );

};

export default Herosection;