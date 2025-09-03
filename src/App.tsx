import CourseGoal from "./components/CourseGoal.tsx";
import "./App.css";
import reactImg from "./assets/react.svg";
import Header from "./components/Header.tsx";

function App() {
  return (
    <main>
      <Header image={{ src: reactImg, alt: "React logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from scratch</p>
      </CourseGoal>
    </main>
  );
}

export default App;
