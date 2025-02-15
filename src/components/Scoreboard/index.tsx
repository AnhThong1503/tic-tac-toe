import { useGame, Mark } from "../../hooks/useGame";
import { O, X } from "../Board/styles";
import { Container, PlayerBoard, Player } from "./styles";

interface BoardProps {
  currentMark: Mark;
}

export function Scoreboard({ currentMark }: BoardProps) {
  const {
    state: { playerX, playerO },
  } = useGame();

  return (
    <Container>
      <PlayerBoard>
        <Player isCurrentMark={currentMark === "x"}>
          <X size={2} />
          <div>
            {playerX.avatar && (
              <img
                src={playerX.avatar}
                alt="Player X avatar"
                width={48}
                height={48}
              />
            )}
            <small>{playerX.name}</small>
          </div>
          <strong>{playerX.score}</strong>
        </Player>
        <div>
          {currentMark === "x" && <span>Your Turn</span>}
        </div>
      </PlayerBoard>

      <PlayerBoard>
        <Player isCurrentMark={currentMark === "o"}>
          <O size={2} />
          <div>
            {playerX.avatar && (
              <img
                src={playerO.avatar}
                alt="Player X avatar"
                width={48}
                height={48}
              />
            )}
            <small>{playerO.name}</small>
          </div>
          <strong>{playerO.score}</strong>
        </Player>
        <div>
          {currentMark === "o" && <span>Your Turn</span>}
        </div>
      </PlayerBoard>
    </Container>
  );
}
