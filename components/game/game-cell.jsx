import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-400 flex items-center justify-center bg-transparent -ml-px -mt-px",
        isWinner && "bg-red-400",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
