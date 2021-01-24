enum GameChoice {
    ROCK = 'rock',
    PAPER = 'paper',
    SCISSORS = 'scissors'
}

enum GameResult {
    PLAYER_WON = 1,
    PLAYER_LOST = -1,
}

class Game {
  computerMove: GameChoice;

  play(playerMove: GameChoice): GameResult {
    throw new Error('Not implemented!');
  }
}
