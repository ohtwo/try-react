import Button from "./components/Button";
import Container from "./components/Container.tsx";

function App() {
  return (
    <main>
      <p>
        <Container as={Button}>Click me</Container>
      </p>
    </main>
  );
}

export default App;
