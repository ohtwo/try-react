import { useState } from "react";

import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import reactImg from "./assets/react.svg";
import "./App.css";

type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {}

  return (
    <main>
      <Header image={{ src: reactImg, alt: "React logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from scratch</p>
      </CourseGoal>
    </main>
  );
}

export default App;
