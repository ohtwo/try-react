import type { PropsWithChildren } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as Goal } from "../App.tsx";

type CourseGoalListProps = PropsWithChildren<{
  goals: Goal[];
}>;

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
