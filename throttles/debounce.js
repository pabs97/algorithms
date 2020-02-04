

function log(arg) {
  const timestamp = new Date().getSeconds();
  console.log(timestamp, arg);
}

function delay(time) {
  setTimeout(() => {
    debounce(() => log(`call ${time}`));
  }, time);
}

const threshold = 2000;
const { now } = Date;
let timeLastCalled = 0;

function debounce(fn) {
  const timeCurrent = now();

  if (timeCurrent - timeLastCalled > threshold) {
    fn();
  }

  timeLastCalled = now();
}

delay(1);
delay(2);
delay(3);
delay(3001);
delay(3002);
delay(4001);
delay(4002);
delay(4003);
delay(8001);
delay(8002);