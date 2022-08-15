function countZeroes(array) {
    let leftInd = 0;
    let rightInd = array.length - 1;

    while (leftInd <= rightInd) {
        // find middle value
        let middleInd = Math.floor((leftInd + rightInd) / 2);
        if (array[middleInd] !== 0) {
            //set leftInd and run again
            leftInd = middleInd + 1;
        }
        else {
            //push leftInd up until the value is 0
            if (array[leftInd] !== 0) {
                leftInd++;
            } else {
                return (array.length - leftInd);
            }
        }
    }

    return 0;
}

module.exports = countZeroes