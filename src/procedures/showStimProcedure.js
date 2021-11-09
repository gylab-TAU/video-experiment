import * as stimTrial from "../components/videoSliderComponent";
import "jspsych/jspsych";
import TimeService from "../Services/TimeService";

export class showStimProcedure {
    getProcedure(videos) {
        let procedure = {
            timeline: this.getTrials(videos),
            randomize_order: false
        }

        return procedure;
    }

    getTrials(videos) {
        let trials = [];

        let times = new TimeService().getStopTimes();

        for (let i = 0; i < times.length; i++) {
            let start = i == 0 ? null : times[i - 1];
            let stop = i == times.length ? null : times[i]
            let trial = stimTrial.default.getTrial(videos, start, stop)

            trials.push(trial);
        }

        return trials;
    }
}