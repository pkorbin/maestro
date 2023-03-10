function convertDivsToTables() {
  const divs = document.querySelectorAll("#page-container > div");
  divs.forEach((div) => {
    const table = document.createElement("table");
    table.className = div.className;
    table.id = div.id;
    div.parentNode.replaceChild(table, div);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    const childDivs = div.querySelectorAll("div");
    childDivs.forEach((childDiv) => {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      const td = document.createElement("td");
      td.className = childDiv.className;
      td.id = childDiv.id;
      tr.appendChild(td);
      while (childDiv.firstChild) {
        td.appendChild(childDiv.removeChild(childDiv.firstChild));
      }
    });
  });
}
convertDivsToTables('#page-container')
