// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable for Task 10
let intervalId = null;

// Grab all needed elements
const mainTitle = document.getElementById("main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.getElementById("status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

/* ================================
   Task 3: Modify Content on Load
================================ */
mainTitle.innerHTML = "DOM Project: Ready!";

/* ================================
   Task 4: Manipulate Attributes
================================ */
toggleButton.setAttribute("data-action", "status-toggle");

/* ================================
   Task 8: Dynamic Element Creation
================================ */
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = " " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

/* ================================
   Tasks 5, 6, 7, 8: Toggle Function
================================ */
function toggleStatus(e) {
  // Task 6: stop the link from jumping
  e.preventDefault();

  // Task 5: show/hide the status div
  statusOutput.classList.toggle("hidden");

  // Check visibility (no .hidden means visible)
  const isVisible = !statusOutput.classList.contains("hidden");

  // Task 7 + 8
  if (isVisible) {
    // yellow background when visible
    mainTitle.style.backgroundColor = "yellow";
    // add a timestamp each time it becomes visible
    createTimestamp();
  } else {
    // reset background when hidden
    mainTitle.style.backgroundColor = "";
  }
}

// Run toggleStatus when the link is clicked
toggleButton.addEventListener("click", toggleStatus);

/* ================================
   Task 9: Loops and Node Lists
================================ */
function highlightListItems() {
  // grab all <li> in the list
  const items = document.querySelectorAll("#item-list li");

  // make them all blue
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "blue";
  }
}

// run once when the page loads
highlightListItems();

/* ================================
   Task 10: The Flashing Timer
================================ */
function startFlashing() {
  // don't start another interval if one is already running
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

  // make sure the panel is visible after stopping
  controlPanel.classList.remove("hidden");
}

// click = start flashing
timerButton.addEventListener("click", startFlashing);

// double-click = stop flashing
timerButton.addEventListener("dblclick", stopFlashing);
