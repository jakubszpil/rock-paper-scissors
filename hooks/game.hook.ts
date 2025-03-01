import { useCallback, useMemo, useState } from "react";

import { GameChoice, GameResult, getGameResult } from "@/services/game.service";

export function useGame() {
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [playerChoice, setPlayerChoice] = useState<GameChoice | null>(null);
  const [computerChoice, setComputerChoice] = useState<GameChoice | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [round, setRound] = useState<number>(0);

  const choices = useMemo(
    () => [GameChoice.Rock, GameChoice.Paper, GameChoice.Scissors],
    []
  );

  const resetGame = useCallback(() => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setRound(0);
  }, []);

  const getComputerChoice = useCallback((): GameChoice => {
    return choices[Math.floor(Math.random() * choices.length)];
  }, [choices]);

  const playGame = useCallback(
    (playerChoice: GameChoice) => {
      const computerChoice = getComputerChoice();

      const gameResult = getGameResult(playerChoice, computerChoice);

      setPlayerChoice(playerChoice);
      setComputerChoice(computerChoice);
      setGameResult(gameResult);
      setRound((p) => p + 1);

      switch (gameResult) {
        case GameResult.Win: {
          setPlayerScore((playerScore) => playerScore + 1);
          break;
        }
        case GameResult.Lose: {
          setComputerScore((computerScore) => computerScore + 1);
          break;
        }
      }
    },
    [getComputerChoice]
  );

  return {
    player: {
      score: playerScore,
      choice: playerChoice,
    },
    computer: {
      score: computerScore,
      choice: computerChoice,
    },
    gameResult,
    resetGame,
    playGame,
    round,
  };
}

export { GameChoice, GameResult };
