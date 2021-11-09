import "jspsych/plugins/jspsych-video-slider-response";

class videoSliderComponent {

    static getTrial(videos, start, stop) {
        let trial = {
            type: "video-slider-response",
            stimulus: videos,
            prompt: '<p> some question </p>',
            min: 1,
            max: 10,
            labels: [1,2,3,4,5,6,7,8,9,10].reverse(),
            slider_start: 6,
            require_movement: true,
            start: start,
            stop: stop,
            response_allowed_while_playing: false,
            width: window.screen.availWidth * 0.6,
            height: window.screen.availHeight * 0.6
        };

        return trial;
    }
}

export default videoSliderComponent;