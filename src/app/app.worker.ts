/// <reference lib="webworker" />

import { calculate } from "./core/helpers/calculate";

addEventListener('message', ({ data }) => {
  const result = calculate(data);
  
  postMessage(result);
});
