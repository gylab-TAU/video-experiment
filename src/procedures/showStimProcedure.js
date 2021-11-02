import * as stimTrial from "../components/videoSliderComponent";
import "jspsych/jspsych";

export class showStimProcedure {
    constructor(stimFolder, stimImageName, numOfStims, fileExtension) {
        this.stimFolder = stimFolder;
        this.stimImageName = stimImageName;
        this.numOfStims = numOfStims;
        this.fileExtension = fileExtension;
    }

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

        for (let i = 0; i < 10; i++) {
            let path = "media/videos/video.mp4";
            let variableObject = {
                path: path,
                start: i * 60 == 0 ? null : i * 60,
                stop: (i+1) * 60
            };

            timelineVariables.push(variableObject);
        }
        console.log(timelineVariables)

        return timelineVariables;
    }
}