function findRotatedIndex(array, num) {
    // first, find pivot point. Pivot point = value in which the next value is lower than it.
    function findPivot(arr, low, high) {
        // base cases
        if (high < low)
            return -1;
        if (high == low)
            return low;

        let mid = Math.floor((low + high) / 2);
        if (mid < high && arr[mid] > arr[mid + 1])
            return mid;

        if (mid > low && arr[mid] < arr[mid - 1])
            return (mid - 1);

        if (arr[low] >= arr[mid])
            return findPivot(arr, low, mid - 1);

        return findPivot(arr, mid + 1, high);
    }

    function binarySearch(array, low, high, key) {
        if (high < low) return -1;

        let mid = Math.floor((low + high) / 2);
        if (key == array[mid]) return mid;

        if (key > array[mid]) return binarySearch(array, (mid + 1), high, key);

        return binarySearch(array, low, (mid - 1), key);
    }

    let pivotInd = findPivot(array, 0, array.length - 1);

    //cover base cases | if first / last / pivot, return index
    if (array[0] == num) return 0;
    if (array[array.length - 1] == num) return array.length - 1;
    if (array[pivotInd] == num) return pivotInd;

    // now cover all other cases
    let low = 0;
    let high = array.length - 1;

    if (num > array[low] && num < array[pivotInd]) {
        //num *should* be in first half of array
        return binarySearch(array, low, (pivotInd - 1), num);
    }
    else if (num < array[high] && num > array[pivotInd + 1]) {
        // num *should* be in second half of array
        return binarySearch(array, (pivotInd + 1), high, num);
    }
    else {
        // num is not in array
        return -1;
    }
}

module.exports = findRotatedIndex