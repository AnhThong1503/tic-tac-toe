import { ReactNode, createContext, useContext, useReducer } from "react";

export interface Player {
  name: string;
  score: number;
  avatar: string;
}

type GameStateObject = {
  [key: string]: any;
};

export interface GameState extends GameStateObject {
  playerX: Player;
  playerO: Player;
  isGameModaVisible: boolean;
  isGameEnd: boolean;
  hasDraw: boolean;
}

interface GameProviderProps {
  children: ReactNode;
}

export enum GameActions {
  setIsGameModaVisible,
  setPlayers,
  setIsGameEnd,
  setHasDraw,
  incrementScore,
  resetGame,
}

interface Action {
  type: GameActions;
  payload?: any;
}

export type Mark = "" | "x" | "o";

interface Context {
  state: GameState;
  dispatch: (action: Action) => void;
  getCurrentPlayer: (mark: Mark) => Player;
}

function GameReducer(state: GameState, action: Action) {
  switch (action.type) {
    case GameActions.setIsGameModaVisible:
      return { ...state, isGameModaVisible: action.payload };
    case GameActions.setPlayers:
      const { playerX, playerO } = action.payload;
      return { ...state, playerX, playerO };
    case GameActions.setIsGameEnd:
      return { ...state, isGameEnd: action.payload };
    case GameActions.setHasDraw:
      return { ...state, hasDraw: action.payload };
    case GameActions.incrementScore:
      return { ...state, ...action.payload };
    case GameActions.resetGame:
      return initialState;
    default:
      return state;
  }
}

const GameContext = createContext({} as Context);

const initialState: GameState = {
  playerX: { name: "", score: 0, avatar: ""},
  playerO: { name: "", score: 0, avatar: ""},
  isGameModaVisible: true,
  isGameEnd: false,
  hasDraw: false,
};

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  function getCurrentPlayer(mark: Mark): Player {
    const player = `player${mark.toUpperCase()}`;
    return state[player];
  }

  const value = { state, dispatch, getCurrentPlayer };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  return context;
}
