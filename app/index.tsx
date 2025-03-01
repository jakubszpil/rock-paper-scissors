import { View, Text, StyleSheet } from "react-native";

import Button from "@/components/button";
import { colors } from "@/config/colors";
import { GameChoice, useGame } from "@/hooks/game.hook";

export default function Index() {
  const { player, computer, gameResult, playGame, resetGame, round } =
    useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock, Paper, Scissors</Text>
      <View style={styles.actions}>
        <Button onPress={() => playGame(GameChoice.Rock)} icon="👊">
          Rock
        </Button>
        <Button onPress={() => playGame(GameChoice.Paper)} icon="✋">
          Paper
        </Button>
        <Button onPress={() => playGame(GameChoice.Scissors)} icon="✌️">
          Scissors
        </Button>
      </View>
      {round === 0 ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Click on one of the above options to start the game 😎
          </Text>
        </View>
      ) : (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Game result: {gameResult}</Text>
          <Text style={styles.scoreText}>Your choice: {player.choice}</Text>
          <Text style={styles.scoreText}>
            Computer's choice: {computer.choice}
          </Text>
          <Text style={styles.scoreText}>Your score: {player.score}</Text>
          <Text style={styles.scoreText}>
            Computer's score: {computer.score}
          </Text>
          <Button
            style={{
              minHeight: 36,
              minWidth: 156,
              marginTop: 12,
              maxHeight: 48,
            }}
            onPress={resetGame}
          >
            Reset game
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral["800"],
    color: colors.neutral["50"],
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.primary["500"],
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",
    maxWidth: 36 * 12,
    gap: 12,
    padding: 12,
  },
  scoreContainer: {
    gap: 6,
    alignItems: "center",
    flexDirection: "column",
  },
  scoreText: {
    color: colors.neutral["50"],
    fontSize: 16,
    textAlign: "center",
  },
});
