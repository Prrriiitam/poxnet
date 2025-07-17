import React from 'react';

function Result({ prediction }) {
  if (!prediction) return null; // Hide if no prediction
  console.log({prediction})
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div
        style={{
          border: '2px dotted #555',
          padding: '15px 25px',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <h3 style={{ margin: 0 }}>
          Prediction Result:&nbsp;
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{prediction}</span>
        </h3>
      </div>
    </div>
  );
}

export default Result;
