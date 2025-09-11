import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import reactImg from "./assets/react.svg";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Date.now(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: reactImg, alt: "React logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
