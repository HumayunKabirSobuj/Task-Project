"use client";
import React, { useEffect, useState } from "react";

const BankCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(storedCards);
  }, []);
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Bank Cards</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-400 border-opacity-35 "
              >
                <p className="text-gray-500 font-semibold">{card?.name}</p>
                <p className="text-gray-400">{card?.number}</p>
               
              </div>
            ))
          ) : (
            <li>No cards available. Add A new Card..</li>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankCards;
