# code-task-merge
This simple program is made with npm, typescript and express. (npm is needed to start the program).

- Before starting run `npm install` to install the dependencies.
- To test the program run `npm start`. The server will start in localhost:3000.
- To send a request to merge intervals, type in the browser url the following: `localhost:3000/<intervals>`
- `<intervals>` should come in the following format (no spaces): [n1,n2][n3,n4][n5,n6]..

The time complexity is O(n) plus the time needed by the sort algorithm used in the browser
(In Chrome and Firefox it's O(n log (n))).

- Time complexity = O(n) + O(n log(n)) = O(n log(n)) since it's the dominant term. 

Space requirments of the `mergeIntervals()` algorithm is O(n) for sortedIntervals and O(n) for mergedIntervals.
- In total linear in O(2n) = O(n) 

