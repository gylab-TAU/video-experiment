/**
 * @title check jspsych
 * @description 
 * @version 0.1.0
 *
 * The following lines specify which media directories will be packaged and preloaded by jsPsych.
 * Modify them to arbitrary paths (or comma-separated lists of paths) within the `media` directory,
 * or delete them.
 * @imageDir images
 * @miscDir html
 * @videoDir videos
 */

// You can import the custom stylesheets you use (.scss or .css).
import "../styles/main.scss";

// jsPsych plugins
import "jspsych/plugins/jspsych-html-keyboard-response";
import "jspsych/plugins/jspsych-fullscreen";
import "jspsych/plugins/jspsych-call-function";
import "jspsych/jspsych";
import "jspsych/plugins/jspsych-preload";


import * as consent from "./components/consentComponent";
import * as id from "./components/idComponent";
import * as instructions from "./components/instructionsComponent";
import * as participantDetails from "./components/participantDetailsComponent";

import EgoziService from "./Services/EgoziService";
import NutellaService from "./Services/NutellaService";

import { showStimProcedure } from "./procedures/showStimProcedure";

import axios from "axios";
/**
 * This is where you define your jsPsych timeline.
 *
 * @param input A custom object that can be specified via the JATOS web interface ("JSON study
 *              input").
 */

export function createTimeline(input = {}) {
  let timeline = [];

  timeline.push(id.default.getTrial());
  timeline.push(participantDetails.default.getTrial());
  timeline.push(consent.default.getConsentTrial())

  // Switch to fullscreen
  timeline.push({
    type: "fullscreen",
    fullscreen_mode: true,
  });

  document.addEventListener("fullscreenchange", fullScreenChangeHandler)

  timeline.push(instructions.default.getTrial());

  timeline.push({
    type: "preload",
    video: ["./media/videos/video.mp4"]
  });

  timeline.push((new showStimProcedure()).getProcedure());


  let sendData = {
    type: 'call-function',
    func: () => { 
      document.removeEventListener("fullscreenchange", fullScreenChangeHandler)

      let first_trial = jsPsych.data.get().values()[0];
      let participantId = first_trial["participantId"];
      console.log("---- jspsych data ---")
      console.log(jsPsych.data.get().values())
      sendData("galit", "jspsych-try", jsPsych.data.get().values(), participantId);
     }
  }

  timeline.push(sendData);

  let endMessage = {
    type: 'html-keyboard-response',
    stimulus: '<p style="font-size: 48px;">Thank you!</p>',
    choices: jsPsych.NO_KEYS
  };

  timeline.push(endMessage)

  return timeline;
}

function fullScreenChangeHandler() {
  if (!document.fullscreenElement) {
    jsPsych.endExperiment("You can no longer participate in this experiment");
  }
}

function sendData(experimenterName, experimentName, data, participantId) {
  NutellaService.sendDataToNutella(experimentName, experimenterName, data, participantId);
  EgoziService.sendDataToEgozi(experimentName, experimenterName, data, participantId);
}

export function on_finish() {
  
}

// Whatever you `export` from this file will be passed to `jsPsych.init()` (except for `timeline`,
// which is determined using `createTimeline()`)

// Note: `preload_images`, `preload_audio`, and `preload_video` will be set automatically if you
// don't export them.
