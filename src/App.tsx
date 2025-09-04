import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import reactImg from "./assets/react.svg";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Date.now(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: reactImg, alt: "React logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}

export default App;
