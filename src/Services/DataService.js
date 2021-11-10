class DataService {
    static getDataAsArray(data) {
        let cleanData = data.filter({trial_type: "video-slider-response"}).ignore('internal_node_id').values();
        console.log(cleanData)

        let headers = [Object.keys(cleanData[0])];
        let arr = headers.concat(cleanData.map(item => Object.values(item)));

        let otherInfo = data.filterCustom(function(trial){
            return trial.trial_type != "video-slider-response"
        }).ignore('internal_node_id').values();

        arr = arr.concat(otherInfo);

        return arr;
    }
}

export default DataService;