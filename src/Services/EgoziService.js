import httpService from "./httpService";
import NutellaService from "./NutellaService";

class EgoziService {
    static sendDataToEgozi(experimentName, experimenterName, results, participantId) {
        let data = {
            "action": 'insertExperimentResultsToDb',
            "experimentName": experimentName,
            "experimenterName": experimenterName,
            "subjectId": participantId,
            "results": [JSON.stringify([results]).toString(), "", ""]
        }
        console.log(data)
        let success = (res) => {
            console.log("egozi succeded");

            NutellaService.sendDataToNutella(experimentName, experimenterName, results, participantId)
        }

        let error = (err) => {
            console.log(err);
        }

        httpService.sendPostRequest("http://egozi.tau.ac.il/experiments/router.php", data, error, success);
    }
}

export default EgoziService;
