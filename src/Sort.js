import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let arrayLength = nums.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; nums[j] > nums[i]; j++) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    }
  }
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
