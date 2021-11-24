class TimeService {
    constructor() {
        this.timeStringArray = [{"ID": "A", "times": ["00:06",	"00:22",	"00:33",	"02:02",	"03:51",	"04:37",	"05:12",	"05:36",	"05:41",	"05:45"]}, {"ID": "B", "times":	["00:38",	"00:47",	"03:29",	"03:54",	"06:10",	"06:26",	"06:39",	"06:50",	"08:17",	"10:14"]}, {"ID": "C", "times":	["03:55",	"06:54",	"06:59",	"07:05",	"07:52",	"08:06",	"08:55",	"09:54"]}, {"ID": "D", "times":	["02:17",	"04:42",	"04:54",	"05:05",	"07:21",	"07:57",	"08:33",	"08:42",	"08:47"]}, {"ID": "E", "times":	["01:13",	"01:18",	"01:32",	"01:41",	"02:14",	"02:23"]}, {"ID": "F", "times":	["02:11",	"09:38",	"09:53",	"09:57"]}, {"ID": "G" , "times":	["03:33",	"04:07",	"04:10"]}, {"ID": "H", "times":	["04:17",	"04:23",	"06:25",	"06:30",	"06:46",	"07:04"]}, {"ID":"I", "times":	["04:40",	"05:14",	"05:24",	"05:34",	"05:38",	"05:48",	"05:54",	"06:02"]}, {"ID": "J", "times":	["06:53",	"06:58",	"07:07",	"07:13"]}, {"ID": "K", "times":	["08:04",	"08:25",	"08:39",	"08:44",	"09:22",	"09:47",	"10:00"]},	{"ID": "L", "times": ["08:13",	"08:15",	"08:27",	"08:31",	"09:01",	"09:20",	"10:04",	"10:10"]}];
    }

    getStopTimes() {
        let stopTimes = [];

        for (let id = 0; id < this.timeStringArray.length; id++){
            let times = this.timeStringArray[id].times;
            let name = this.timeStringArray[id].ID;

            for(let i = 0; i < times.length; i++) {
                let timeString = times[i];
                console.log(timeString)

                let minutes = parseInt(timeString.split(":")[0]);
                let seconds = parseInt(timeString.split(":")[1]);

                stopTimes.push({"ID": name, "time": minutes * 60 + seconds});
            }
        }

        stopTimes.sort((a, b) => a.time-b.time);

        return stopTimes;
    }
}

export default TimeService;