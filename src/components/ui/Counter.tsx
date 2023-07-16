import { useState } from "react";
import { Button } from "../../components";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return <Button onClick={handleClick}>Click {counter} Times</Button>;
}
