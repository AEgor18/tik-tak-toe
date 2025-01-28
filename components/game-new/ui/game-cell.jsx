import clsx from "clsx";
import { GameSymbol } from "../../game/game-symbol";
import { memo } from "react";

export const GameCell = memo(function GameCell({ onClick, isWinner, disabled, symbol, index }) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="h-5 w-5" />}
    </button>
  );
}
)


