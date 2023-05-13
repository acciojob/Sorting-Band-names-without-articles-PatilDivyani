const bandNames = ["The Beatles", "Led Zeppelin", "The Rolling Stones", "Pink Floyd", "Aerosmith", "Queen", "Anthrax"];

// Define a function to remove articles from the beginning of band names
function removeArticles(name) {
  const articles = ["a ", "an ", "the "];
  for (let article of articles) {
    if (name.toLowerCase().startsWith(article)) {
      return name.slice(article.length);
    }
  }
  return name;
}

// Sort the band names in lexicographic order (excluding articles)
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create an unordered list in HTML format and insert the sorted band names as list items
const ul = document.createElement("ul");
ul.setAttribute("id", "band");
for (let name of sortedBandNames) {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
}

// Append the unordered list to the document body
document.body.appendChild(ul);
