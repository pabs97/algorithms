

const threshold = 5000;
let timeout = null;
let { now } = Date;
let timeLastRan = 0;

/**
 * Only run function if enough time has passed, without storing last function 
 * @param {Function} fn
 */
function throttle(fn, args) {
  const timeCurrent = now();
  const callImmediately = timeCurrent - timeLastRan > threshold;

  // 20 - 14 > 5
  if (callImmediately && !timeout) {
    fn()
    timeLastRan = now();
  } else {
    clearTimeout(timeout);
    // 5 - (20 - 17)
    timeout = setTimeout(() => {
      fn();
      timeLastRan = now();
    }, threshold - timeCurrent + timeLastRan);
  }
}

function log(arg) {
  const timestamp = new Date()
    .getSeconds()
    .toString()
    .padStart(3, '0');
  console.log(timestamp, arg);
}

function delay(time) {
  setTimeout(() => {
    throttle(() => log(`call ${time}`));
  }, time);
}

delay(1); // called immediately, logged immediately
delay(2); // called immediately, cancelled
delay(3); // called immediately, logged after 5s
delay(6001); // called after 6s, cancelled
delay(6002); // called after 6s, cancelled
delay(6003); // called after 6s, logged after 11s
delay(12001); // called after 12s, logged after 16s

// needs to return functions 