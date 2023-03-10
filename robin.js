function convertDivsToTable() {
  // Skapa en ny <table>-element
  const table = document.createElement("table");
  table.classList.add("table");
  // Hitta <div>-elementet med id "page-container"
  const pageContainer = document.querySelector("#page-container");
  // Loopa igenom alla <div>-element som är barn till "page-container"
  pageContainer.querySelectorAll("div").forEach(div => {
    // Skapa ett nytt <tr>-element
    const tr = document.createElement("tr");
    // Loopa igenom alla <div>-element som är barn till det nuvarande <div>-elementet
    div.querySelectorAll("div").forEach(subDiv => {
      // Skapa ett nytt <td>-element
      const td = document.createElement("td");
      // Kopiera över alla attribut från <div>-elementet till <td>-elementet
      for (let i = 0; i < subDiv.attributes.length; i++) {
        const attr = subDiv.attributes[i];
        td.setAttribute(attr.name, attr.value);
      }
      // Flytta över alla barn-element från <div>-elementet till <td>-elementet
      while (subDiv.firstChild) {
        td.appendChild(subDiv.firstChild);
      }
      // Lägg till <td>-elementet som ett barn till <tr>-elementet
      tr.appendChild(td);
    });
    // Lägg till <tr>-elementet som ett barn till <tbody>-elementet i tabellen
    table.appendChild(tr);
  });
  // Ersätt <div id="page-container"> med den nya <table>-elementet i DOM:en
  pageContainer.parentNode.replaceChild(table, pageContainer);
}
convertDivsToTables('#page-container')
