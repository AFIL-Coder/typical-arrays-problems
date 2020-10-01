
exports.min = function min (array) {
    result = 0;
    if (array !== undefined && array.length > 0) {
        for (i = 0; i < array.length; i++) {
            if (array[i] < result) {
            result = array[i];
            }
        }
    return result;
    } else {
        return 0;
    } 
}

exports.max = function max (array) {
    result = 0;
    if (array !== undefined && array.length > 0) {
        for (i = 0; i < array.length; i++) {
            if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
    } else {
        return 0;
    } 
}

exports.avg = function avg (array) {
    result = 0;
    if (array !== undefined && array.length > 0) {
        for (i = 0; i < array.length; i++) {
        result += array[i];
        }
    result = result / array.length;
    return result;
    } else {
        return 0;
    }    
}
