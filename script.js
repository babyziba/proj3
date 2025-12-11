// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable for Task 10
let intervalId = null;

// Select main elements once (used in multiple tasks)
const mainTitle = document.getElementById("main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.getElementById("status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

/* ======================================= */
/* Task 3: Modify Content on Load          */
/* ======================================= */
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
/* Task 4: Manipulate Attributes           */
/* ======================================= */
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
/* Task 8: Dynamic Element Creation        */
/* ======================================= */
function createTimestamp() {
  // create a new <span>
  const span = document.createElement("span");
  // set its innerHTML to the current time
  span.innerHTML = " " + new Date().toLocaleTimeString();
  // append to the status-output div
  statusOutput.appendChild(span);
}

/* ======================================= */
/* Tasks 5, 6, 7 & 8: Toggle Functionality */
/* ======================================= */
function toggleStatus(e) {
  // Task 6: prevent default anchor behavior
  e.preventDefault();

  // Task 5: toggle the "hidden" class on the status div
  statusOutput.classList.toggle("hidden");

  // Check if status is visible (does NOT have .hidden)
  const isVisible = !statusOutput.classList.contains("hidden");

  // Task 7: change title background when visible/hidden
  if (isVisible) {
    mainTitle.style.backgroundColor = "yellow";
    // Task 8: add a timestamp whenever status becomes visible
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

// Bind the click event to the toggle button
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
/* Task 9: Loop and Apply Changes          */
/* ======================================= */
function highlightListItems() {
  const items = document.querySelectorAll("#item-list li");

  // you can use either a for loop or forEach; here’s a simple for loop
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "blue";
  }
}

// run once on page load
highlightListItems();

/* ======================================= */
/* Task 10: The Flashing Timer             */
/* ======================================= */
function startFlashing() {
  // avoid starting multiple intervals
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  // make sure panel is visible after stopping
  controlPanel.classList.remove("hidden");
}

// click starts flashing
timerButton.addEventListener("click", startFlashing);
// double-click stops flashing
timerButton.addEventListener("dblclick", stopFlashing);
