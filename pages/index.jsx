import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  UseGameState,
} from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount] = useState(2);

  const { cells, currentMove, nextMove, handleCellClick, winnerSequence } =
    UseGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  );
}
