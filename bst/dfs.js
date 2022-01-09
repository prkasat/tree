function dfs(node) {
  if (node.left) {
    dfs(node.left);
  }

  if (node.right) {
    dfs(node.right);
  }
}