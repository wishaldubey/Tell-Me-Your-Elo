import React from 'react';
import { Chessboard } from 'react-chessboard';

const ChessBoard = ({ pgn }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl">Chess Board</h2>
      <Chessboard position={pgn} />
    </div>
  );
};

export default ChessBoard;
