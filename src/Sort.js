import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    let n = i - 1;

    while (n >= 0 && nums[n] > element ) {
      nums[n + 1] = nums[n];
      n--;
    }
    nums[n + 1] = element; 
  }
  snapshot(nums);
  return nums;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
