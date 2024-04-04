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
    <div className="w-screen bg-gray-800 text-white text-center text-2xl p-4">
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
    <div className="flex flex-col items-center">
      <p className="text-white">Name of {name}</p>
      <input
        value={name}
        type="text"
        onChange={onChange}
        className="text-center m-2 bg-zinc-500 text-white rounded-md shadow-lg"
      />
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
    <div className="flex flex-col items-center">
      <p className="text-white">Change score of team</p>
      <input
        value={score}
        type="number"
        onChange={onChange}
        className="text-center m-2 bg-zinc-500 text-white rounded-md shadow-lg"
      />
    </div>
  );
};

const TeamController = () => {};

export default function Home() {
  const [teamScore1, updateTeamScore1] = useState(0);
  const [teamScore2, updateTeamScore2] = useState(0);

  const [teamName1, updateTeamName1] = useState("Team 1");
  const [teamName2, updateTeamName2] = useState("Team 2");

  return (
    <div>
      <Header />
      <div className="flex flex-row justify-center align-middle ">
        <Team name={teamName1} score={teamScore1} />
        <Team name={teamName2} score={teamScore2} />
      </div>

      <div className="flex flex-row align-bottom items-end justify-center p-24 text-2xl">
        <ChangeNameInput
          name={teamName1}
          onChange={(e) => updateTeamName1(e.target.value)}
        />
        <ChangeScoreInput
          score={teamScore1}
          onChange={(e) => updateTeamScore1(parseInt(e.target.value))}
        />
        <ChangeNameInput
          name={teamName2}
          onChange={(e) => updateTeamName2(e.target.value)}
        />
        <ChangeScoreInput
          score={teamScore2}
          onChange={(e) => updateTeamScore2(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}
