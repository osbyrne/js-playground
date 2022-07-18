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

function tree_runner(tree) {}

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

console.log(subset_tree(set_of_integers_from_one_to_n(4)));
