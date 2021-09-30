function bfs(root) {
  const results = [];

  if (!root) {
    return results;
  }

  const q = [];
  q.push(root);

  while (q.length > 0) {
    const result = [];
    
    const node = q.shift();
    results.push(node.val);

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right);
    }
  }

  return results;
}
