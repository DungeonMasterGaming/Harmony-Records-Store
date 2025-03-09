async function fetchData(sheet = 'Item Database') {
  const url = 'https://script.google.com/macros/s/AKfycbyXDc0iMc2mWNxsCszUAADBHWG5WkBXrdI3b8WMMv86JBnea2kxK21_ns8ippDLNemdfQ/exec?sheet=' + encodeURIComponent(sheet);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

fetchData().then(data => {
  console.log(data);
  // Integrate data into your bookshelf UI here
});
