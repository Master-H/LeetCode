const inorderTraversal = (root) => {
  // 1. 设置结果集
  const result = [];

  // 2. 递归
  const inorderTraversal = (root) => {
    const result = [];
    function recursion  (root)  {
      if (!root) {
        return;
      }
      recursion(root.left);
      result.push(root.val);
      recursion(root.right);
    };
    recursion(root);
    return result;
  };
  
