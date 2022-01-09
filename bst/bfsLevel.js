function bfs(root) {
  const results = [];
    
  if (!root) {
      return results;
  }
  
  const q = [];

  q.push(root);
  
  while (q.length > 0) {
    const n = q.length;
    const temp = [];
      
    for (let i = 0; i< n; i++) {
        const node = q.shift();
        temp.push(node.val);

        if (node.left) {
           q.push(node.left);
        }

        if (node.right) {
           q.push(node.right);
        }
    }
      
    results.push(temp);
  }
  
  return results;
}