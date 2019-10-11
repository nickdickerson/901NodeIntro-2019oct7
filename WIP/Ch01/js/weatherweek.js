
let temps = [
    { day: "Monday", high: 80,low: 60 },
    { day: "Tuesday", high: 81,low: 61 },
    { day: "Wednesday", high: 82,low: 62 },
    { day: "Thursday", high: 83,low: 63 },
    { day: "Friday", high: 84,low: 64 },
    { day: "Saturday", high: 85,low: 65 },
    { day: "Sunday", high: 86,low: 66 },
];

let low = temps.reduce((low, cur)=>{
    return low.low <= cur.low ? low : cur;
}, temps[0]);
console.log(`The lowest temperature this week was on ${low.day} and it was ${low.low}`);

let high = temps.reduce((high, cur)=>{
    return high.high >= cur.high ? high : cur;
}, temps[0]);
console.log(`The highest temperature this week was on ${high.day} and it was ${high.high}`);

