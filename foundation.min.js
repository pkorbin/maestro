  // Författare: Robin Svensson
  // Datum: 2023-02-27


   // Hitta alla span-taggar på sidan
  var spans = document.querySelectorAll('span');

  // Loopa genom varje span-tag och lägg till innehållet till "föräldern"
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    var parent = span.parentNode;

    // Kontrollera om "föräldern" redan innehåller span-taggens innehåll
    if (!parent.innerHTML.includes(span.innerHTML)) {
      // Lägg till span-taggens innehåll till "föräldern"
      parent.innerHTML = parent.innerHTML.replace(span.outerHTML, span.innerHTML);
    } else {
      // Ta bort span-taggen eftersom innehållet redan finns i "föräldern"
      parent.removeChild(span);
    }
  }
