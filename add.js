import _ from "lodash";


export function add (a, b) {
    if (_.isInteger(a) && _.isInteger(b)){
        return a + b;
    } else {
        return NaN;
    }
}