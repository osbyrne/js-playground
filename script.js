function set_of_integers_from_one_to_n(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; ++i) {
    arr[i] = i + 1;
  }
  return arr;
}

function subset_tree(set, minimum_size = 0) {
  let tree = [];
  for (let i = 0; i < set.length; ++i) {
    tree.push(set[i]);
  }
  for (let i = 0; i < set.length; ++i) {}
  return tree;
}

console.log(subset_tree(set_of_integers_from_one_to_n(4)));
