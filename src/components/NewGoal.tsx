import { type FormEvent, useRef } from "react";

export default function NewGoal() {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSumit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const _goal = goal.current!.value;
    const _summary = summary.current!.value;
  }

  return (
    <form onSubmit={handleSumit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
