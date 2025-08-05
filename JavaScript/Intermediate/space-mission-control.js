// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = []; // Array to hold one-time tasks
let monitoringTaskId; // Variable to hold the interval ID for continuous monitoring

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
  oneTimeTasks.push({ function: func, delay: delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  // TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
  oneTimeTasks.forEach((task) => {
    setTimeout(task.function, task.delay);
  });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  // TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
  console.log("Starting continuous monitoring...");

  monitoringTaskId = setInterval(function () {
    console.log("Monitoring in progress...");

    const shieldStatus = Math.random() > 0.5 ? "OK" : "FAIL";
    const fuelLevel = Math.floor(Math.random() * 100) + 1; // Random fuel level between 1 and 100
    const powerLevel = Math.floor(Math.random() * 100) + 1;
    const oxygenLevel = Math.floor(Math.random() * 100) + 1;
    console.log(
      `Shield Status: ${shieldStatus} | Fuel Level: ${fuelLevel}% | Power Level: ${powerLevel}% | Oxygen Level: ${oxygenLevel}%`
    );
  }, 5000); // Adjust the interval time as needed (e.g., every 5 seconds)
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  // TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
  clearInterval(monitoringTaskId);
  console.log("Monitoring stopped.");
  console.log("Final monitoring status: All systems nominal.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  // TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
  let time = duration;
  console.log(`Countdown started: ${time} seconds remaining.`);

  const countdownInterval = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(countdownInterval);
      console.log("We have liftoff!");
    } else {
      console.log(`${time} seconds remaining.`);
    }
  }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  // TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
  startMonitoring();

  addOneTimeTask(function () {
    console.log("Pre-launch system check initiated...");
  }, 1000);
  addOneTimeTask(function () {
    console.log("Pre-launch system check complete. All systems nominal.");
    stopMonitoring();
  }, 7500);
  addOneTimeTask(function () {
    console.log("Preparing for launch...");
    startCountdown(10); // 10 seconds countdown
  }, 10000);
  addOneTimeTask(function () {
    console.log("Mission launched successfully!");
  }, 25000);

  runOneTimeTasks();
}

scheduleMission(); // Starts the mission.
