// Emphasis.tsx
import React from 'react';

interface EmphasisProps {
  text: string;
  onClick: () => void;
  pointer?: boolean;
}

const Emphasis: React.FC<EmphasisProps> = ({ text, onClick, pointer }) => {
  return (
    <b 
      onClick={onClick} 
      className={`font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 
        ${pointer ? 'cursor-pointer' : ''}`}
    >
      {text}
    </b>
  );
};

export default Emphasis;
