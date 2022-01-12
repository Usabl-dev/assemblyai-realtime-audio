// required dom elements
const buttonEl = document.getElementById("button");
const messageEl = document.getElementById("message");
const titleEl = document.getElementById("real-time-title");

// set initial state of application variables
messageEl.style.display = "none";
let isRecording = false;

// runs real-time transcription and handles global variables
const run = async () => {
  // TODO -> update this code to transcribe text as the user talks and display it in the messageEl
  // You can fetch an AssemblyAI token from localhost:5000/
  isRecording = !isRecording;
  buttonEl.innerText = isRecording ? "Stop" : "Record";
  titleEl.innerText = isRecording
    ? "Click stop to end recording!"
    : "Click start to begin recording!";
};

buttonEl.addEventListener("click", () => run());
