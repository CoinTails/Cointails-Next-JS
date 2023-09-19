"use client"
import React, { useRef } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
}

const Slider: React.FC = () => {
  const cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
    { id: 3, title: 'Card 3', description: 'This is the third card.' },
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  // const scrollLeft:number = () => {
  //   sliderRef.current?.scrollLeft -= 200; // Safe navigation using the optional chaining operator
  // };

  // const scrollRight = () => {
  //   sliderRef.current?.scrollLeft += 200; 
  //   // Safe navigation using the optional chaining operator
  // };

  return (
    <div className="relative">
      <div className="flex overflow-x-auto" ref={sliderRef}>
        {cards.map((card) => (
        <div key={card.id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md mx-4 p-6">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        // onClick={scrollLeft}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        // onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;