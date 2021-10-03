import { Interval } from "../utils/Interval";


/**
 * a function to transform the intervals to an output string.
 * @param intervals The intervals to be transformed
 * @returns The output string
 */
export const intervalToOutput = (intervals: Interval[]): string => {
    let output: string = "";
    for (const item of intervals) {
        output += `[${item.start},${item.end}]`;
    }
    return output;
}