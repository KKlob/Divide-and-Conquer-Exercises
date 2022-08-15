function findFloor(array, num) {
    let low = 0;
    let high = array.length - 1;

    if (array[low] == num) return array[low];
    if (array[high] == num) return array[high];
    if (array[high] < num) return array[high];
    if (array[low] > num) return -1;

    while (low <= high) {
        // cover base cases
        mid = Math.floor((low + high) / 2);
        if (array[mid] == num) return array[mid];

        // perform binary search
        if (array[mid] < num && array[high] > num) {
            //floor will be between mid and high. If mid is the index below high return array[mid]
            if (mid + 1 == high) return array[mid];
            low = mid;
        }

        if (array[mid] > num && array[low] < num) {
            //floor is between low and mid. if mid is the index above low return array[low]
            if (low + 1 == mid) return array[low];
            high = mid;
        }
    }
    return -1;
}

module.exports = findFloor