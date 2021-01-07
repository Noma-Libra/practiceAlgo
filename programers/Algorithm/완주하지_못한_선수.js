//solution #1
var solution= (participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

//solution #2
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let idx = 0; idx < participant.length; idx++){
        if(participant[idx] !== completion[idx]) {
            return participant[idx];
        }
    }
}