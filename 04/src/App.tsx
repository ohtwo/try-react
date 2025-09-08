import Input from "./components/Input.tsx";
import Form from "./components/Form.tsx";
import Button from "./components/Button.tsx";

function App() {
  function handleSave(data: unknown) {
    const extracted = data as {
      name: string;
      age: string;
    };
    console.log(extracted);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
