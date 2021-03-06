import { Interval } from "../utils/Interval";



/**
 * An function to merge intervals based on the following algorithm:
 * Sort intervals accodring to their start number. Add the first intervals to a stack,
 * then compare the top of the stack with the new interval. 
 * If overlapping then merge, if containing each other then delete the smaller one.
 * Else Just add the new interval.
 * @param intervals intervals to merge
 * @returns An array of Interval containing the merged intervals
 */
export const mergeIntervals = (intervals: Interval[]): Interval[] => {

    // In typescript a stack can be emulated with push and pop
    const mergedIntervals: Interval[] = [];
    // First sort the array
    const sortedIntervals: Interval[] = intervals.sort((a, b) => a.start - b.start);
    
    // Compare each new coming interval with the top of the merged intervals. Merge if overlapping.
    mergedIntervals.push(sortedIntervals[0]);
    for (let i = 1; i < sortedIntervals.length; i++) {

        const top = mergedIntervals[mergeIntervals.length - 1];

        if (top.end < sortedIntervals[i].start) {
            // top ends before the start of the new interval => Nothing to merge.
            mergedIntervals.push(sortedIntervals[i]);
        } else if (top.end < sortedIntervals[i].end) {
            // merge when the end of top is in [start, end] of the new interval.
            top.end = sortedIntervals[i].end;
            mergedIntervals.pop();
            mergedIntervals.push(top);
        }
        // The last case, where the new interval is inside the top interval,
        // there is no need to add it to the merged intervals
    }

    return mergedIntervals;

}

