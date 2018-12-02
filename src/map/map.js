/* eslint-disable class-methods-use-this */
import HtmlMap from './htmlmap';
import HtmlLine from './htmlline';
import './map.scss';


let INT_ID = 0;

class SmartMap {
  constructor(sourceData, interval) {
    this.map = document.createElement('div');
    this.interval = interval;
    this.sourceData = sourceData;
    this.htmlData = '<div class= values>';
    for (let n = 0; n < 8; n += 1) {
      this.htmlData += `<p class="value${n}">${sourceData[n]}</p>`;
    }
    this.htmlData += '</div>';
    this.htmlLine = new HtmlLine();
    this.htmlMap = new HtmlMap();

    this.value = 0;
    this.chunk = 0;
  }

  outData(value) {
    document.querySelector('.map-out-data').innerHTML = `<p>${value}</p>`;
  }

  change() {
    if (this.chunk < 8) {
      document.querySelectorAll(`.st${this.chunk}`).forEach((element) => {
        element.classList.add(`sst${this.chunk}`);
      });
      this.value = this.sourceData[this.chunk];
      this.chunk += 1;
      this.outData(this.value);
    } else if (this.chunk === 8) {
      for (let i = 0; i < 8; i += 1) {
        document.querySelectorAll(`.st${i}`).forEach((element) => {
          element.classList.remove(`sst${i}`);
        });
      }
      this.value = 0;
      this.chunk = 0;
      this.outData(this.value);
    }
  }

  start() {
    INT_ID = setInterval(
      () => {
        this.change();
      }, this.interval,
    );
  }


  stop() {
    clearInterval(INT_ID);
  }

  getCurrentPointValue() {
    return this.value;
  }

  render() {
    document.body.querySelector('.map-container').innerHTML = this.htmlMap.getMap() + this.htmlLine.getHtml() + this.htmlData;
    this.outData('0');
    this.start();
  }
}

export default SmartMap;
