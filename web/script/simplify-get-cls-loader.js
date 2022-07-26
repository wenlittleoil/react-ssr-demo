const assert = require('assert');
const fs = require('fs');

module.exports = function(...params) {
  assert(params.length === 1);
  const rewriteCode = `
    // custom webpack loader: simplify-get-cls-loader
    var cssLocals = exports._getContent().default.locals;
    if (typeof cssLocals === 'object') {
      // 将css类名映射直接注入到导出对象中
      Object.keys(cssLocals).forEach(function(originalCssCls) {
        // 预防命名冲突
        if (!exports[originalCssCls]) {
          exports[originalCssCls] = cssLocals[originalCssCls];
        }
      });
    }
  `;
  const newCode = params[0] + '\n' + rewriteCode + '\n';
  fs.writeFileSync('custom-loader.txt', newCode);
  return newCode;
}
