import type { PropsWithChildren } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as Goal } from "../App.tsx";

type CourseGoalListProps = PropsWithChildren<{
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}>;

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
