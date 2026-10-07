// 修复 Node.js 14+ / 22+ 下 Hexo 3.9 渲染流提前触发 destroy 导致生成 0 字节空文件的兼容性问题
const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../node_modules/hexo/lib/plugins/console/generate.js');
if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  let changed = false;

  if (content.includes('CacheStream.prototype.destroy = function()')) {
    content = content.replace(
      /CacheStream\.prototype\.destroy\s*=\s*function\(\)\s*\{[\s\S]*?this\._cache\.length\s*=\s*0;[\s\S]*?\};/,
      'CacheStream.prototype.destroyCache = function() {\n  this._cache.length = 0;\n};'
    );
    changed = true;
  }

  if (content.includes('Reflect.apply(Transform, this, []);')) {
    content = content.replace(
      'Reflect.apply(Transform, this, []);',
      'Reflect.apply(Transform, this, [{autoDestroy: false}]);'
    );
    changed = true;
  }

  if (content.includes('cacheStream.destroy();')) {
    content = content.replace(
      'cacheStream.destroy();',
      'if (typeof cacheStream.destroyCache === "function") cacheStream.destroyCache();'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[fix-hexo] 已成功修复 Hexo generate.js 在高版本 Node.js 下的兼容性');
  }
}
