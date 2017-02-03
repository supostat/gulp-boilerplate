import {a} from './views/view';
import _ from 'lodash';
import moment from 'moment';

// const g = 9.81;

class Main {
  constructor() {
    console.log(_.join(['a', 'b', 'c'], '///'))

    console.log(moment().subtract(20, 'weeks').format('Do MMM YYYY'))
  }

  getName() {
    return this.a;
  }
}

let main = new Main();


console.log(main.getName());
