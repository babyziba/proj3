// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Change the main title text when the page loads
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Add the required data-action attribute to the toggle button
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Highlight all list items in blue on page load
function highlightListItems() {
  // Select all <li> elements inside the list
  const listItems = document.querySelectorAll("#item-list li");

  // Loop through each item and change its text color
  listItems.forEach(function (item) {
    item.style.color = "blue";
  });
}

// Run this once when the script loads
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Helper function for Task 8: create and append a timestamp span
function createTimestamp() {
  const span = document.createElement("span");
  // Add a space before time so timestamps separate nicely
  span.innerHTML = " " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Main toggle function for the status div
function toggleStatus(e) {
  // Task 6: Prevent default anchor behavior (no page jump/reload)
  e.preventDefault();

  // Task 5: Toggle the "hidden" class on the status-output div
  statusOutput.classList.toggle("hidden");

  // Check if the status div is currently visible
  const isVisible = !statusOutput.classList.contains("hidden");

  // Task 7: Change main title background when visible/hidden
  if (isVisible) {
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: When status becomes visible, append a new timestamp
    createTimestamp();
  } else {
    // Reset background color when hidden
    mainTitle.style.backgroundColor = "";
  }
}

// Add click event listener to the toggle button
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---

// Start flashing the control panel every 500ms
function startFlashing() {
  // Avoid starting multiple intervals
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

// Stop the flashing animation
function stopFlashing() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  // Make sure the control panel is visible after stopping
  controlPanel.classList.remove("hidden");
}

// Click starts flashing
timerButton.addEventListener("click", startFlashing);

// Double-click stops flashing
timerButton.addEventListener("dblclick", stopFlashing);
