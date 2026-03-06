import { unit7_ch4 } from './src/data/unit7-ch4-hcf/index';

console.log('Unit Name:', unit7_ch4.name);
console.log('SQP Count:', unit7_ch4.sqp ? unit7_ch4.sqp.length : 'undefined');
if (unit7_ch4.sqp && unit7_ch4.sqp.length > 0) {
    console.log('First Question ID:', unit7_ch4.sqp[0].id);
}
