function sortedFrequency(array, num) {
    let leftInd = 0;
    let rightInd = array.length - 1;

    while (leftInd <= rightInd) {
        //find middleInd
        let middleInd = Math.floor((leftInd + rightInd) / 2);
        let middleVal = array[middleInd];

        if (middleVal < num) {
            // need to search further to the right
            leftInd = middleInd + 1;
        } else if (middleVal > num) {
            // need to search further to the left
            rightInd = middleInd - 1;
        } else {
            //middleVal === num. find leftmost and rightmost nums
            leftInd = middleInd - 1;
            while (array[leftInd] === num) {
                leftInd--;
            }
            rightInd = middleInd + 1;
            while (array[rightInd] === num) {
                rightInd++;
            }
            return (rightInd - leftInd - 1);
        }
    }
    return -1;
}

module.exports = sortedFrequency