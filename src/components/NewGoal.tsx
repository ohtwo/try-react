import type { FormEvent } from "react";

export default function NewGoal() {
  function handleSumit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSumit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
