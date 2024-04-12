"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type HeaderProps = {};

type TeamProps = {
  name: string;
  score: number;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="w-screen bg-gray-800 text-white text-center text-2xl p-4 mb-20">
      Game clock
    </div>
  );
};

const Team = ({ name, score }: TeamProps) => {
  return (
    <div className="flex flex-col w-1/2 items-center text-white">
      <p className="text-2xl">{name}</p>
      <p>Score: {score || 0}</p>
    </div>
  );
};

const ChangeNameInput = ({
  name,
  onChange,
}: {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex flex-col items-center m-2">
      <p className="text-white">Name of {name}</p>
      <input value={name} type="text" onChange={onChange} />
    </div>
  );
};

const ChangeScoreInput = ({
  score,
  onChange,
}: {
  score: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex flex-col items-center m-2">
      <p className="text-white">Change score of team</p>
      <input value={score} type="number" onChange={onChange} />
    </div>
  );
};

export default function Home() {
  const [gameClock, setGameClock] = useState({
    team1: {
      name: "Team 1",
      score: 0,
    },
    team2: {
      name: "Team 2",
      score: 1,
    },
  });

  return (
    <div>
      <Header />
      <div className="flex flex-row justify-center align-middle ">
        <Team name={gameClock.team1.name} score={gameClock.team1.score} />
        <Team name={gameClock.team2.name} score={gameClock.team2.score} />
      </div>

      <div className="flex flex-row align-bottom items-end justify-center p-24 text-2xl">
        <ChangeNameInput
          name={gameClock.team1.name}
          onChange={(e) =>
            setGameClock({
              ...gameClock,
              team1: { ...gameClock.team1, name: e.target.value },
            })
          }
        />
        <ChangeScoreInput
          score={gameClock.team1.score}
          onChange={(e) =>
            setGameClock({
              ...gameClock,
              team1: { ...gameClock.team1, score: parseInt(e.target.value) },
            })
          }
        />
        <ChangeNameInput
          name={gameClock.team2.name}
          onChange={(e) =>
            setGameClock({
              ...gameClock,
              team2: { ...gameClock.team2, name: e.target.value },
            })
          }
        />
        <ChangeScoreInput
          score={gameClock.team2.score}
          onChange={(e) =>
            setGameClock({
              ...gameClock,
              team1: { ...gameClock.team2, score: parseInt(e.target.value) },
            })
          }
        />
      </div>
    </div>
  );
}
