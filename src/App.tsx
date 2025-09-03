import CourseGoal from "./components/CourseGoal.tsx";
import "./App.css";

function App() {
  return (
    <main>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
        id={1}
      />
    </main>
  );
}

export default App;
