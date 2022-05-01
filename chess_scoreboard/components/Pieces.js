import React from "react";

// Show the pieces according to color

export default function Pieces(props) {
  const [score, setScore] = React.useState(0);
  const [pieces, setPieces] = React.useState({
    pawns: 8,
    knights: 2,
    rooks: 2,
    bishops: 2,
    queen: 1,
  });

  function handlePawns() {
    if (pieces.pawns > 0) {
      setScore((prev_score) => prev_score + 1);
      setPieces((prev_pieces) => {
        return {
          ...prev_pieces,
          pawns: prev_pieces.pawns - 1,
        };
      });
    }
  }
  function handleKnights() {
    if (pieces.knights > 0) {
      setScore((prev_score) => prev_score + 3);
      setPieces((prev_pieces) => {
        return {
          ...prev_pieces,
          knights: prev_pieces.knights - 1,
        };
      });
    }
  }
  function handleRooks() {
    if (pieces.rooks > 0) {
      setScore((prev_score) => prev_score + 5);
      setPieces((prev_pieces) => {
        return {
          ...prev_pieces,
          rooks: prev_pieces.rooks - 1,
        };
      });
    }
  }

  function handleBishops() {
    if (pieces.bishops > 0) {
      setScore((prev_score) => prev_score + 3);
      setPieces((prev_pieces) => {
        return {
          ...prev_pieces,
          bishops: prev_pieces.bishops - 1,
        };
      });
    }
  }

  function handleQueen() {
    if (pieces.queen > 0) {
      setScore((prev_score) => prev_score + 9);
      setPieces((prev_pieces) => {
        return {
          ...prev_pieces,
          queen: prev_pieces.queen - 1,
        };
      });
    }
  }

  // Display pieces if sum of pieces > 0, otherwise
  const pieces_sum = Object.values(pieces).reduce((a, b) => a + b);

  if (pieces_sum > 0) {
    return (
      <div className="flex flex-col justify-evenly align-center mx-3 my-3 bg-slate-300 p-1 w-1/2 h-1/2 rounded-xl">
        <button className="w-fit" onClick={handlePawns}>
          <i
            className={`fa-solid fa-chess-pawn fa-2x ${
              props.color === "white" ? "white" : ""
            }`}
          ></i>
        </button>
        <button className="w-fit" onClick={handleKnights}>
          <i
            className={`fa-solid fa-chess-knight fa-2x ${
              props.color === "white" ? "white" : ""
            }`}
          ></i>
        </button>
        <button className="w-fit" onClick={handleRooks}>
          <i
            className={`fas fa-chess-rook fa-2x ${
              props.color === "white" ? "white" : ""
            }`}
          ></i>
        </button>
        <button className="w-fit" onClick={handleBishops}>
          <i
            className={`fa-solid fa-chess-bishop fa-2x ${
              props.color === "white" ? "white" : ""
            }`}
          ></i>
        </button>
        <button className="w-fit" onClick={handleQueen}>
          <i
            className={`fas fa-chess-queen fa-2x ${
              props.color === "white" ? "white" : ""
            }`}
          ></i>
        </button>
        <h3>{`${
          props.color === "black" ? "white" : "black"
        } score is ${score}`}</h3>
      </div>
    );
  } else {
    if (pieces_sum === 0 && props.color === "black") {
      return alert("White won the game");
    } else {
      return alert("Black won the game");
    }
  }
}
