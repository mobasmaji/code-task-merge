import { Interval } from "../utils/Interval";
import { MResponse, RequestStatus } from "../utils/MResponse";


/**
 * A function to parse intervals from an input string consisting of intervals.
 * @param input The string in the format: "[number,number][number,number]...""
 * @returns 
 */
export const parseIntervalFromString = (input: string): MResponse<Interval[]> => {
    let splittedString = input.split("]");

    // after splitting the string at ']', the last element is an empty string and is not needed
    splittedString.pop(); 

    // check if after splitting each string start with the opening bracket '['
    for (let item of splittedString) {
        if (item.charAt(0) !== "[") {
            return new MResponse({ status: RequestStatus.ERROR, error: "Wrong order of brackets" });
        }
    }

    // remove the first bracket from each string
    splittedString = splittedString.map(item => item.substring(1));

    let intervals: Interval[] = [];
    for (const item of splittedString) {
        const twoNumbers = item.split(","); // for example "23,25" => [23,25]
        if (twoNumbers.length !== 2) {
            return new MResponse({ status: RequestStatus.ERROR, error: "Wrong amount of numbers in interval(s)" });
        }
        let interval: Interval = { start: 0, end: 0 };

        try {
            const start: number = parseInt(twoNumbers[0]);
            const end: number = parseInt(twoNumbers[1]);
            interval.start = start;
            interval.end = end;
        } catch (error) {
            return new MResponse({ status: RequestStatus.ERROR, error: error });
        }

        if (interval.start > interval.end) {
            return new MResponse({ status: RequestStatus.ERROR, error: "start should not be greater than end" });
        }

        intervals.push(interval);
    }
    return new MResponse({ status: RequestStatus.OK, data: intervals });

}




