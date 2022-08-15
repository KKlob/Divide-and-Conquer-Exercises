function findRotationCount(array) {
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

    let pivot = findPivot(array, 0, (array.length - 1));
    return pivot + 1;
}

module.exports = findRotationCount