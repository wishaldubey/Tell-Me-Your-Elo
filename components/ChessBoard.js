import React, { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { RiSkipRightLine, RiSkipLeftLine } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

let moveSound, captureSound, castleSound, promoteSound, checkSound;

if (typeof window !== "undefined") {
  // Only initialize sounds in the browser
  moveSound = new Audio("/sounds/move.mp3");
  captureSound = new Audio("/sounds/capture.mp3");
  castleSound = new Audio("/sounds/castle.mp3");
  promoteSound = new Audio("/sounds/promote.mp3");
  checkSound = new Audio("/sounds/check.mp3");
}

const ChessBoard = ({ pgn, whitePlayer, blackPlayer }) => {
  const [game, setGame] = useState(new Chess());
  const [currentPosition, setCurrentPosition] = useState("start");
  const [moves, setMoves] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [winner, setWinner] = useState(null);
  const [showPopup, setShowPopup] = useState(true); 

  useEffect(() => {
    if (pgn) {
      const newGame = new Chess();
      newGame.loadPgn(pgn);
      const movesList = newGame.history();
      setMoves(movesList);
      setGame(newGame);
      setCurrentMoveIndex(0);
      setCurrentPosition("start");

      // Determine the winner
      const finalResult = newGame.pgn().split(" ").pop();
      if (finalResult === "1-0") {
        setWinner(whitePlayer.username);
      } else if (finalResult === "0-1") {
        setWinner(blackPlayer.username);
      } else if (finalResult === "1/2-1/2") {
        setWinner("Draw");
      }
    }
  }, [pgn, whitePlayer, blackPlayer]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNextMove();
      } else if (event.key === "ArrowLeft") {
        handlePreviousMove();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentMoveIndex, moves]);

  const playSound = (move) => {
    if (typeof window !== "undefined") {
      if (move.includes("x")) {
        captureSound.play(); 
      } else if (move === "O-O" || move === "O-O-O") {
        castleSound.play(); 
      } else if (move.includes("=")) {
        promoteSound.play(); 
      } else {
        moveSound.play(); 
      }

      if (move.includes("+")) {
        checkSound.play(); 
      }
    }
  };

  const updatePosition = (index) => {
    const newGame = new Chess();
    for (let i = 0; i < index; i++) {
      const move = moves[i];
      newGame.move(move);
      playSound(move); 
    }
    setCurrentPosition(newGame.fen());
    setGame(newGame);
  };

  const handleNextMove = () => {
    if (currentMoveIndex < moves.length) {
      const nextIndex = currentMoveIndex + 1;
      setCurrentMoveIndex(nextIndex);
      updatePosition(nextIndex);
    }
  };

  const handlePreviousMove = () => {
    if (currentMoveIndex > 0) {
      const prevIndex = currentMoveIndex - 1;
      setCurrentMoveIndex(prevIndex);
      updatePosition(prevIndex);
    }
  };

  const handleRestart = () => {
    setGame(new Chess());
    setCurrentPosition("start");
    setCurrentMoveIndex(0);
    setShowPopup(false); 
  };

  const handleEndGame = () => {
    setCurrentMoveIndex(moves.length);
    updatePosition(moves.length); 
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div className="flex flex-col items-center mt-6 relative">
      {/* Player Names and Ratings */}
      <div className="flex flex-col mb-1">
        <div className="text-center">
          <p>{blackPlayer.username} ({blackPlayer.rating})</p>
        </div>
      </div>

      {/* Chessboard */}
      <div className="w-80 h-80 md:w-[450px] md:h-[450px] relative"> 
        <Chessboard position={currentPosition} />

        {/* Popup card for the winner */}
        {currentMoveIndex === moves.length && winner && showPopup && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 z-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white relative max-w-xs">
              <button 
                onClick={closePopup} 
                className="absolute top-2 right-2 text-gray-300 hover:text-white"
              >
                <AiOutlineClose className="text-xl" />
              </button>
              <FaTrophy className="text-yellow-500 text-6xl mb-3 mx-auto" />
              <h2 className="text-2xl font-bold">{winner} WON!</h2>
              <p className="text-sm text-gray-400 mt-2">Congratulations on the victory!</p>
            </div>
          </div>
        )}
      </div>

      {/* White Player Information */}
      <div className="flex flex-col mb-2">
        <div className="text-center">
          <p>{whitePlayer.username} ({whitePlayer.rating})</p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleRestart}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          title="Restart"
        >
          <RiSkipLeftLine className="h-6 w-6" />
        </button>
        <button
          onClick={handlePreviousMove}
          className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition ${
            currentMoveIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentMoveIndex === 0}
          title="Previous Move"
        >
          <MdNavigateBefore className="h-6 w-6" />
        </button>
        <button
          onClick={handleNextMove}
          className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition ${
            currentMoveIndex === moves.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentMoveIndex === moves.length}
          title="Next Move"
        >
          <MdNavigateNext className="h-6 w-6" />
        </button>
        <button
          onClick={handleEndGame}
          className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition ${
            currentMoveIndex === moves.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentMoveIndex === moves.length}
          title="Jump to End"
        >
          <RiSkipRightLine className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ChessBoard;
