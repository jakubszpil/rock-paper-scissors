export enum GameResult {
  Draw = "Draw",
  Win = "Win",
  Lose = "Lose",
}

export enum GameChoice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export function getGameResult(
  playerVal: GameChoice,
  computerVal: GameChoice
): GameResult {
  if (playerVal === computerVal) return GameResult.Draw;

  if (
    (playerVal === GameChoice.Rock && computerVal === GameChoice.Scissors) ||
    (playerVal === GameChoice.Scissors && computerVal === GameChoice.Paper) ||
    (playerVal === GameChoice.Paper && computerVal === GameChoice.Rock)
  )
    return GameResult.Win;

  return GameResult.Lose;
}
