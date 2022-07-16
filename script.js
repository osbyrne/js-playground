
function polynomial_calculator(x, poly_list) {
    let y = 0;
    let n = 0;
    while (n < poly_list.length) {
        y += poly_list[n] * Math.pow(x, n);
        n += 1;
    }
    return y;
}

function prime_decompose(n) {
    let prime_list = [];
    let i = 2;
    while (i <= n) {
        if (n % i == 0) {
            prime_list.push(i);
            n = n / i;
        } else {
            i += 1;
        }
    }
    return prime_list;
}

// let N be a set of natural numbers from 1 to n
// let sumN be the set of all sums of elements of each subset of N
// let K be the number of elements of sumN divisible by p an element of N

/*
verify subsets of length 1 to n
verify all subsets of length k:
    f going from 1 to n:
    array of the element f + subsets of length k-1 not containing elements inferior to f 
*/

function get_number_of_subsets_divisible_by_p(p, set) {
    let total_subsets_sum_divisible = 0;
}



function walk_trough_all_subset_lengths(superset) {
    for (let length = 1; length < superset.length + 1; ++length) {
        subsets_fixed_size(superset, length);
    }
}

function subset_sum(subset) {
    let sum = 0;
    for (let i = 0; i < subset.length; ++i) {
        sum += subset[i];
    }
    return sum;
}

function subsets_fixed_size(superset, length, minimum_size = 0) {
    subsets = [];
    for (let i = 0; i < superset.length; ++i) {
        if (i > minimum_size) {
            subset = [superset[i]];
            subset.concat(subsets_fixed_size(superset, length, superset[i]))

            increment_result(check_sum_divisible_by_n(n, subset));
        }
    }
}

function increment_result(result) {
    if (result) {
        total_subsets_sum_divisible += 1;
    }
}

function build_set_of_integers_from_one_to_n(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; ++i) {
        arr[i] = i + 1;
    }
    return arr;
}

get_number_of_subsets_divisible_by_p(5, build_set_of_integers_from_one_to_n(6))