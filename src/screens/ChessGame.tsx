import React, { useState, useCallback, useMemo } from 'react';
import { Chess } from 'chess.js';
import { ChessBoard } from '../components/ChessBoard';

interface Props {
  tournamentId?: string;
  playerId?: string;
  onExit: () => void;
}

export function ChessGame({ tournamentId, playerId, onExit }: Props) {
  const game = useMemo(() => new Chess(), []);
  const [gameState, setGameState] = useState({ fen: game.fen() });
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [legalMoves, setLegalMoves] = useState<string[]>([]);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'checkmate' | 'stalemate' | 'draw'>('playing');
  const [modal, setModal] = useState<'none' | 'draw' | 'resign' | 'checkmate'>('none');

  const handleSquareClick = useCallback(
    (square: string) => {
      const piece = game.get(square);

      if (selectedSquare && legalMoves.includes(square)) {
        const move = game.move({ from: selectedSquare, to: square, promotion: 'q' });
        if (move) {
          setMoveHistory([...moveHistory, move.san]);
          setGameState({ fen: game.fen() });
          setSelectedSquare(null);
          setLegalMoves([]);

          // Check game status
          if (game.isCheckmate()) {
            setGameStatus('checkmate');
            setModal('checkmate');
          } else if (game.isStalemate()) {
            setGameStatus('stalemate');
            setModal('draw');
          } else if (game.isDraw()) {
            setGameStatus('draw');
            setModal('draw');
          }
        }
        return;
      }

      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setLegalMoves(moves.map((m) => m.to));
      } else {
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    },
    [game, selectedSquare, legalMoves, moveHistory],
  );

  const handleNewGame = useCallback(() => {
    game.reset();
    setGameState({ fen: game.fen() });
    setSelectedSquare(null);
    setLegalMoves([]);
    setMoveHistory([]);
    setGameStatus('playing');
    setModal('none');
  }, [game]);

  const handleUndo = useCallback(() => {
    if (game.undo()) {
      setGameState({ fen: game.fen() });
      setMoveHistory(moveHistory.slice(0, -1));
      setSelectedSquare(null);
      setLegalMoves([]);
      setGameStatus('playing');
    }
  }, [game, moveHistory]);

  return (
    <div className="flex flex-col h-screen w-full max-w-[430px] mx-auto bg-[#2c110d]">
      {/* Game Header */}
      <div className="bg-[linear-gradient(180deg,_#d08742_0%,_#c56d2d_12%,_#8d4923_100%)] border-b-4 border-[#7d3d17] px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="text-[#fff] font-black text-xl hover:opacity-80 transition"
          >
            ← Back
          </button>
          <div className="font-display font-black text-white text-xl">
            {tournamentId?.toUpperCase()} GAME
          </div>
          <div className="text-[#fff] font-bold text-sm">
            {game.turn() === 'w' ? '⚪ White' : '⚫ Black'}
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="w-full aspect-square max-w-[100%]">
          <ChessBoard fen={gameState.fen} selectedSquare={selectedSquare} legalMoves={legalMoves} onSquareClick={handleSquareClick} />
        </div>
      </div>

      {/* Game Controls */}
      <div className="bg-[rgba(90,40,20,0.7)] border-t-4 border-[#7d3618] px-4 py-3 flex gap-2">
        <button
          onClick={handleUndo}
          disabled={moveHistory.length === 0}
          className="flex-1 bg-[linear-gradient(180deg,#f2b346,#e7861f)] text-white font-black py-3 rounded-[12px] border-[4px] border-[#efb54d] shadow-[inset_0_-5px_0_rgba(132,68,18,0.55),0_5px_0_rgba(78,32,10,0.55)] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition"
        >
          ↶ Undo
        </button>
        <button
          onClick={handleNewGame}
          className="flex-1 bg-[linear-gradient(180deg,#f2b346,#e7861f)] text-white font-black py-3 rounded-[12px] border-[4px] border-[#efb54d] shadow-[inset_0_-5px_0_rgba(132,68,18,0.55),0_5px_0_rgba(78,32,10,0.55)] hover:opacity-90 transition"
        >
          🔄 New Game
        </button>
        <button
          onClick={() => setModal('draw')}
          className="flex-1 bg-[linear-gradient(180deg,#f2b346,#e7861f)] text-white font-black py-3 rounded-[12px] border-[4px] border-[#efb54d] shadow-[inset_0_-5px_0_rgba(132,68,18,0.55),0_5px_0_rgba(78,32,10,0.55)] hover:opacity-90 transition"
        >
          Draw
        </button>
      </div>

      {/* Move History */}
      <div className="bg-[#2c110d] border-t-2 border-[#7d3618] px-4 py-2 max-h-20 overflow-y-auto">
        <div className="text-xs font-bold text-[#f8d485] mb-1">Moves:</div>
        <div className="text-sm text-[#fff5e6] flex flex-wrap gap-2">
          {moveHistory.map((move, idx) => (
            <span key={idx} className="bg-[#5a1c11] px-2 py-1 rounded">
              {move}
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal !== 'none' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#f4ede5] rounded-[16px] border-4 border-[#f3d6b3] p-6 max-w-sm mx-4 shadow-lg">
            <button
              onClick={() => setModal('none')}
              className="absolute top-2 right-2 w-8 h-8 bg-[linear-gradient(180deg,#ff6a52,#f43d2b)] text-white rounded-full text-xl font-black shadow-[0_4px_0_rgba(89,10,10,0.5)]"
            >
              ×
            </button>
            <h2 className="text-center font-display text-3xl font-black text-[#2d2a28] mb-4">
              {gameStatus === 'checkmate' ? 'CHECKMATE' : gameStatus === 'stalemate' ? 'STALEMATE' : 'Draw?'}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setModal('none')}
                className="flex-1 bg-[#f2ead8] font-bold py-2 rounded-[12px] text-sm shadow-[inset_0_-3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition"
              >
                Continue
              </button>
              <button
                onClick={handleNewGame}
                className="flex-1 bg-[linear-gradient(180deg,#f2f5fc,#dfe5f8)] font-bold py-2 rounded-[12px] text-sm shadow-[inset_0_-3px_0_rgba(0,0,0,0.1)] hover:opacity-90 transition text-[#222]"
              >
                New Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
