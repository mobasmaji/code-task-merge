import express from 'express';
import { mergeIntervals } from './api/IntervalMerge';
import { parseIntervalFromString } from './api/IntervalParser';
import { intervalToOutput } from './api/IntervalToOutput';

const app = express();
const port = 3000;


app.get('/:intervals', function (req, res) {
    // read intervals from URL
    const intervalsResponse = parseIntervalFromString(req.params.intervals);

    if (!intervalsResponse.isOk()) {
        res.send("Error while parsing intervals: " + intervalsResponse.getError());
    } else {
        const mergedIntervals = mergeIntervals(intervalsResponse.getData());
        // transfrom result to an output string for the user
        const output = intervalToOutput(mergedIntervals);
        res.send("Merged intervals are " + output);
    }
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});



