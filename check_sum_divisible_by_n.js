function check_sum_divisible_by_n(p, subset) {
    if (subset_sum(subset) % p == 0) {
        return true;
    }
    return false;
}
