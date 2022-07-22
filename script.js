function set_of_integers_from_one_to_n(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; ++i) {
    arr[i] = i + 1;
  }
  return arr;
}

function array_removed_first_val(set) {
  let arr = [];
  for (let i = 0; i < set.length - 1; ++i) {
    arr[i] = set[i + 1];
  }
  return arr;
}

function tree_runner(tree, root = 0) {
  let subsets_validity_count = 0;
  for (let i = 0; i < tree.length; ++i) {
    if (typeof tree[i] === "number") {
      subsets_validity_count += check_n_divisibility(tree[i] + root);
    } else {
      subsets_validity_count += tree_runner(tree[i], root + tree[i - 1]);
    }
  }
  return subsets_validity_count;
}

function check_n_divisibility(n) {
  if (n % 5 === 0) {
    return 1;
  }
  return 0;
}

function subset_tree(set) {
  let tree = [];
  let next_set = set;
  for (let i = 0; i < set.length; ++i) {
    tree.push(set[i]);
    next_set = array_removed_first_val(next_set);
    if (next_set.length !== 0) {
      tree.push(subset_tree(next_set));
    }
  }
  return tree;
}

let n = 5;
let set = subset_tree(set_of_integers_from_one_to_n(n));
console.log("our set is:", set);
console.log("subsets validity count :", tree_runner(set));
