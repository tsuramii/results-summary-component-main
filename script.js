let listItems = '';

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        listItems += `
        <li class="bg-${element.color}/10 ">
            <p class="font-bold ">
              <span class="text-${element.color}"><img src="${element.icon}" class="inline px-2 h-5"
                  alt="reaction icon">${element.category}</span>
              <span class="text-darkgrayblue"> ${element.score} <span class="text-darkgrayblue/50"> / 100</span></span>
              </span>
            </p>
        </li>
        `
    });
    document.getElementById('summaryList').innerHTML = listItems;
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });