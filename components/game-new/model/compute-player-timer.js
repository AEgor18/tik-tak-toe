export function computePlayerTimer(gameState, playerSymbol) {
  console.log(playerSymbol);
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentMove
        ? gameState.currentMoveStart
        : undefined,
  };
}
