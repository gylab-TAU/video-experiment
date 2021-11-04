import * as stimTrial from "../components/videoSliderComponent";
import "jspsych/jspsych";
import TimeService from "../Services/TimeService";

export class showStimProcedure {
    getProcedure() {
        let procedure = {
            timeline: [stimTrial.default.getTrial()],
            timeline_variables: this.getTimelineVariables(),
            randomize_order: false
        }

        return procedure;
    }

    getTimelineVariables() {
        let timelineVariables = [];

        let times = new TimeService().getStopTimes();
        
        for (let i = 0; i < times.length; i++) {
            let start = i == 0 ? null : times[i - 1];
            let stop = i == times.length ? null : times[i]
            let path = "media/videos/video.mp4";
            let variableObject = {
                path: path,
                start: start,
                stop: stop
            };

            timelineVariables.push(variableObject);
        }

        console.log(timelineVariables)

        return timelineVariables;
    }
}