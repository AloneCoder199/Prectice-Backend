// const Emittter = require("./emiter");
const Emitter = require("events");
const Evantemiter = require("./Config.js").events;

const emitter = new Emitter();
// console.log(Evantemiter);
emitter.on(Evantemiter.hook, function () {
    console.log("hook event triggered");
});

emitter.on(Evantemiter.hanji, function () {
    console.log("Hanji ma a gaya hu, tension na lo...");
});

// Pehla emit hanji ko call karega
emitter.emit(Evantemiter.hanji);

// Dusra emit hook ko trigger karega
emitter.emit(Evantemiter.hook);
