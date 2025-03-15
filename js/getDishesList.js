export async function fetchDishesList(sheetIdGlobal) {
  const sheetId = sheetIdGlobal;
  const proxyUrl = "https://menu-pro.interactivemenuqr.workers.dev";
  const type = 'tableGet';
  try {
    let fullResponse = await fetch(`${proxyUrl}/${type}?${sheetId}`);
    let fullData = await fullResponse.json();
    const objectData = JSON.parse(fullData)
    const processedData = processData(objectData.values);
    return processedData;
  } catch (error) { 
    const apiKey = "AIzaSyAoqUP1XTXL7Y5zXyQ9rfEgMy4d30qDC-Q"; 
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      return processData(data.values); 
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
      return [];
    }
  }
}

function processData(data) {
  const keys = data[0];
  const objectsArray = data.slice(2).map(row => {
    let obj = {};
    row.forEach((value, index) => {
      obj[keys[index]] = value;
    });   
    return obj;
  });
  return objectsArray;
}



