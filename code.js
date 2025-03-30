function permutations(arr) {
    // Base case: single-element array has one permutation (itself)
    if (arr.length === 1) return [arr];

    let perms = permutations(arr.slice(1)); // Returns an array of permutations for subarray after first element
    let first_elem = arr[0];
    let result = [];

    // Insert first element into all possible insertion spots for all permutations of arr[1:]
    for (let i = 0; i < perms.length; i++) {
        let p = perms[i];

        for (let j = 0; j <= p.length; j++) {
            let to_push = [...p];

            to_push.splice(j, 0, first_elem);

            result.push(to_push);
        }
    }

    return result;
}

function permutationSort(a) {
    let perms = permutations(a);
    let perms_tried = 0

    // Iterate through every permutation
    for (let i = 0; i < perms.length; i++) {
        let p = perms[i];
        let is_sorted = true;
        perms_tried++;

        // Iterate through every position in that permutation, checking for ordering
        for (let j = 0; j < p.length - 1; j++) {
            if (p[j] > p[j + 1]) {
                is_sorted = false;
                break;
            }
        }

        

        if (is_sorted) {
            return perms_tried;
        }
    }
}