import { series } from './data.js';

console.log("Cargando series...");

function renderSeriesInTable(): void {
  const tableBody = document.getElementById('series-table') as HTMLElement;
  const serieDetails = document.getElementById('serie-details') as HTMLElement;

  let totalSeasons = 0;  
  const seriesCount = series.length;  

  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="serie-link">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    row.addEventListener('click', () => {
      showSerieDetails(serie);
    });

    tableBody.appendChild(row);


    totalSeasons += serie.seasons;
  });

  const averageSeasons = totalSeasons / seriesCount;

  const averageRow = document.createElement('tr');
  averageRow.innerHTML = `
    <td colspan="4" style="text-align: center; font-weight: bold;">
      Seasons average: ${averageSeasons.toFixed(2)}
    </td>
  `;
  tableBody.appendChild(averageRow);
  function showSerieDetails(serie: any) {
    serieDetails.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <p><strong>Channel:</strong> ${serie.channel}</p>
          <p><strong>Seasons:</strong> ${serie.seasons}</p>
        </div>
      </div>
    `;
  }
}

renderSeriesInTable();