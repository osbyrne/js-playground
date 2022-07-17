/*----------------------------------------------------------------

let N be a set of natural numbers from 1 to n
let sumN be the set of all sums of elements of each subset of N
let K be the number of elements of sumN divisible by p an element of N

verify subsets of length 1 to n
verify all subsets of length k:
    f going from 1 to n:
    array of the element f + subsets of length k-1 not containing elements inferior to f 

1- given an integer n, make a set containing all integers from 1 to n
2- given a set of integers, make a set of all subsets of length 1

*/

function all_subsets(set) {
  let subsets = [];
  for (let i = 1; i < set.length; ++i) {
    subsets_length_i = get_subsets_length_i(set, i);
    subsets.push(subsets_length_i);
  }
  return subsets;
}

function get_subsets_length_i(set, i) {
  let subsets_length_i = [];
  for (let j = 1; j < set.length; ++j) {
    subsets_length_i_starting_j = get_subsets_of_length_i(set, i - 1);
    for (let k = 0; k < subsets_length_i_starting_j.length; ++k) {
      subsets_length_i_starting_j.unshift(j);
    }
  }
  return subsets_length_i;
}

function check_sum_divisible_by_n(p, subset) {
  if (subset_sum(subset) % p == 0) {
    return true;
  }
  return false;
}

function subset_sum(subset) {
  let sum = 0;
  for (let i = 0; i < subset.length; ++i) {
    sum += subset[i];
  }
  return sum;
}

function build_set_of_integers_from_one_to_n(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; ++i) {
    arr[i] = i + 1;
  }
  return arr;
}

function nice_array_printer(array) {
  for (let i = 0; i < array.length; ++i) {
    if (typeof array[i] == "number") {
      console.log(array[i]);
    } else {
      nice_array_printer(array[i]);
    }
  }
}

nice_array_printer(all_subsets(build_set_of_integers_from_one_to_n(4)));
