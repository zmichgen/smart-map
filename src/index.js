import './base.scss';
import SmartMap from './map/map';

const arr = [100, 200, 300, 400, 500, 600, 700, 800];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const map = new SmartMap(arr, 2500);

let i = 0;
function startstop() {
  if (i === 0) {
    map.stop();
    i = 1;
  } else
  if (i === 1) {
    map.start();
    i = 0;
  }
  console.log(map.getCurrentPointValue());
}

document.getElementById('startStop').addEventListener('click', startstop);
map.render();
