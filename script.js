//your code here
const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'The Rolling Stones', 'Anthrax'];

// Define articles to exclude
const articles = ['a', 'an', 'the'];

// Sort band names in lexicographic order while excluding articles
const sortedBandNames = bandNames.sort((a, b) => {
  a = a.replace(/^(a |an |the )/i, '').trim();
  b = b.replace(/^(a |an |the )/i, '').trim();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

// Display sorted band names as list items inside ul#band
const bandList = document.querySelector('#band');
sortedBandNames.forEach((bandName) => {
  const listItem = document.createElement('li');
  listItem.textContent = bandName;
  bandList.appendChild(listItem);
});
