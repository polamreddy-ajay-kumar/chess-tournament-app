import React from 'react';

interface Props {
  fen: string;
  selectedSquare: string | null;
  legalMoves: string[];
  onSquareClick: (square: string) => void;
}

const pieceMap: Record<string, string> = {
  'P': '♙',
  'p': '♟',
  'N': '♘',
  'n': '♞',
  'B': '♗',
  'b': '♝',
  'R': '♖',
  'r': '♜',
  'Q': '♕',
  'q': '♛',
  'K': '♔',
  'k': '♚',
};

const fileMap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export function ChessBoard({ fen, selectedSquare, legalMoves, onSquareClick }: Props) {
  const fenParts = fen.split(' ');
  const position = fenParts[0];
  const board: (string | null)[][] = [];

  const rows = position.split('/');
  rows.forEach((row) => {
    const boardRow: (string | null)[] = [];
    row.split('').forEach((char) => {
      if (char >= '1' && char <= '8') {
        for (let i = 0; i < parseInt(char); i++) {
          boardRow.push(null);
        }
      } else {
        boardRow.push(char);
      }
    });
    board.push(boardRow);
  });

  return (
    <div className="chess-board w-full h-full">
      {board.map((row, rowIdx) =>
        row.map((piece, colIdx) => {
          const square = `${fileMap[colIdx]}${8 - rowIdx}`;
          const isLight = (rowIdx + colIdx) % 2 === 0;
          const isSelected = selectedSquare === square;
          const isLegal = legalMoves.includes(square);
          const isCapture = isLegal && piece !== null;

          return (
            <button
              key={square}
              onClick={() => onSquareClick(square)}
              className={`chess-square ${
                isLight ? 'light' : 'dark'
              } ${
                isSelected ? 'selected' : ''
              } ${
                isLegal ? 'legal' : ''
              } ${
                isCapture ? 'capture' : ''
              }`}
              style={{ cursor: 'pointer' }}
            >
              {piece && <span className="chess-piece">{pieceMap[piece]}</span>}
            </button>
          );
        })
      )}
    </div>
  );
}
