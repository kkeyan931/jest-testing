function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = isAnagram;
