import _ from "lodash";

export function divide (a, b) {
    if (_.isInteger(a) && _.isInteger(b)){
        return a / b;
    } else {
        return NaN;
    }
}