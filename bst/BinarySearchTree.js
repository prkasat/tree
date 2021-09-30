const TreeNode = require('./TreeNode');

class BinarySearchTree {
  search(key) {
    let x = this.root;

    while (x !== null) {
      if (key < x.key) {
        x = x.left;
      } else if (key > x.key) {
        x = x.right;
      } else {
        return x.key;
      }
    }

    return null;
  }

  insert(key) {
    const newNode = new TreeNode(key);
    
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let x = this.root;
    let prev = null;

    while(x !== null) {
      if (key < x.key) {
        prev = x;
        x = x.left;
      } else if (key > x.key) {
        prev = x;
        x = x.right;
      } else {
        x.key = key;
      }
    }

    if (key < prev.key) {
      prev.left = node;
    } else {
      prev.right = node;
    }

    return this.root;
  }

  min() {
    if (this.root === null) {
      return null;
    }

    let x = root;
    while (x.left !== null) {
      x = x.left;
    }

    return x.key;
  }

  max() {
    if (this.root === null) {
      return null;
    }

    let x = root;
    while (x.right !== null) {
      x = x.right;
    }

    return x.key;
  }

  successor(p) {
    if (this.root == null) {
      return null;
    }

    // p has right subtree
    if (p.right !== null) {
      let curr = p.right;

      while(curr.left !== null) {
        curr = curr.left;
      }

      return curr;
    }

    // search for p starting from root
    let ancestor = null;
    let curr = this.root;

    while(curr.key !== p.key) {
      if (curr.key > p.key) {
        ancestor = curr;
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    
    return ancestor;
  }

  predecessor(p) {
    if (this.root == null) {
      return null;
    }

    if(p.left!== null) {
      let curr = p.left;

      while(curr.right !== null) {
        curr = curr.right;
      }

      return curr;
    }

    let ancestor =null;
    let curr = this.root;

    while(curr !== p.key) {
      if (curr.key < p.key) {
        ancestor = curr;
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    return ancestor;
  }


  delete(k) {
    let curr = this.root;
    let prev = null;

    while (curr !== null) {
      if (k < curr.key) {
        prev = prev.left;
        curr = curr.left;
      } else if (k > curr.key) {
        prev = prev.right;
        curr = curr.right;
      } else {
        break;
      }
    }

    if (curr === null) {
      return this.root;
    }

    // case 1: leaf node
    if (curr.left === null && curr.right === null) {
      // one node tree
      if (prev === null) {
        return null;
      }

      if(curr === prev.left) {
        prev.left = null;
      } else {
        prev.right = null;
      }
    }

    let child = null;

    // case 2: one child
    if (curr.left === null && curr.right !== null) {
      child = curr.right;
    } 

    if (curr.right === null && curr.left !== null) {
      child = curr.left;
    }

    if(child !== null) {
      if (prev === null) {
        this.root = child;
        return this.root;
      }

      if (curr === prev.left) {
        prev.left = child;
      } else {
        prev.right = child;
      }
    }

    let succ = null;
    let prev = null;

    // case 3: two child
    if (curr.left !== null && curr.right !== null) {
      succ = curr.right;
      prev = curr;
      while(succ.left !== null) {
        prev = succ;
        succ = succ.left;
      }

      curr.key = succ.key;

      if (succ === prev.left) {
        prev.left = succ.right;
      } else {
        prev.right = succ.right;
      }
    }

    return this.root;
  }
}