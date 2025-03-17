import React from 'react';

function App() {
  const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  return (
    <div style={{  marginTop: '50px' }}>
      <h1>Ordered List Example</h1>
      {/* Ordered list with type "A" */}
      <ol type="A" >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
