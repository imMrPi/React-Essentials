import React, { useState } from 'react';
import Card from './Cards/component/card';
import './Cards/component/style.css';
function App() {
  const [cards, setCards] = useState([
    { title: 'Card 1', body: 'Hello, this is card 1' },
    { title: 'Card 2', body: 'Hello, this is card 2' },
    { title: 'Card 3', body: 'Hello, this is card 3' },
    { title: 'Card 4', body: 'Hello, this is card 4' }
  ]);
  const handleDelete = (index) => {
        console.log("its work");
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
   
  };


  return (
    <div className='card-container'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          body={card.body}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default App;
