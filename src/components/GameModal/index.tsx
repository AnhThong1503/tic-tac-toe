import { useState } from "react";
import { useGame, GameActions, Player } from "../../hooks/useGame";
import { Button } from "../Button";
import { getAvatar } from "../../utils/getAvatar";
import { Container, Content } from "./styles";

export function GameModal() {
  const { state, dispatch } = useGame();
  const [playerXName, setPlayerXName] = useState("");
  const [playerOName, setPlayerOName] = useState("");

  function setPlayers(players: { playerX: Player; playerO: Player }) {
    dispatch({ type: GameActions.setPlayers, payload: players });
  }

  function closeModal() {
    dispatch({ type: GameActions.setIsGameModaVisible, payload: false });
    setPlayerXName("");
    setPlayerOName("");
  }

  function handleMultiplayerFormButtonClick() {
    const playerX = {
      name: playerXName.trim(),
      score: 0,
      avatar: getAvatar(),
    };
    const playerO = {
      name: playerOName.trim(),
      score: 0,
      avatar: getAvatar(),
    };

    setPlayers({ playerX, playerO });
    closeModal();
  }

  if (!state.isGameModaVisible) return;

  return (
    <Container>
      <h1>
        T<span>i</span>c <span>T</span>a<span>c</span> T<span>o</span>e
      </h1>
      <Content animate={{ y: [700, 0] }}>
        <h2>Please set name for player</h2>

        <label htmlFor="player-x-name">Player X:</label>
        <input
          type="text"
          id="player-x-name"
          value={playerXName}
          onChange={({ target }) => setPlayerXName(target.value)}
          autoFocus
        />

        <label htmlFor="player-x-name">Player O:</label>
        <input
          type="text"
          id="player-circle-name"
          value={playerOName}
          onChange={({ target }) => setPlayerOName(target.value)}
        />

        <Button
          title="Play"
          isDisabled={!playerXName || !playerOName}
          onClick={handleMultiplayerFormButtonClick}
        />

      </Content>
    </Container>
  );
}
