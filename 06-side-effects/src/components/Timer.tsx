import { useEffect, useState } from "react";

import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1_000);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);
  }, []);

  const formattedRemainingTime = (remainingTime / 1_000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1_000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
