import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { PassBanner } from './components/PassBanner';
import { TournamentLobby } from './screens/TournamentLobby';
import { ChessGame } from './screens/ChessGame';

export type AppScreen = 'lobby' | 'game';

interface GameState {
  tournamentId?: string;
  playerId?: string;
}

function App() {
  const [screen, setScreen] = useState<AppScreen>('lobby');
  const [gameState, setGameState] = useState<GameState>({});

  const handleJoinTournament = (tournamentId: string) => {
    setGameState({ tournamentId, playerId: 'Player_' + Math.random().toString(36).substr(2, 9) });
    setScreen('game');
  };

  const handleExitGame = () => {
    setScreen('lobby');
    setGameState({});
  };

  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-[radial-gradient(circle_at_top,_rgba(255,153,72,0.32),_rgba(0,0,0,0)_30%),linear-gradient(180deg,_#5a1c11_0%,_#2b0f0d_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
      {screen === 'lobby' ? (
        <>
          <TopBar />
          <PassBanner />
          <TournamentLobby onJoinTournament={handleJoinTournament} />
        </>
      ) : (
        <ChessGame tournamentId={gameState.tournamentId} playerId={gameState.playerId} onExit={handleExitGame} />
      )}
    </div>
  );
}

export default App;
