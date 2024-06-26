// Event Listener für Klick auf "Bild hinzufügen" Button
document.getElementById('add-image-button').addEventListener('click', function() {
  document.getElementById('image-upload').click(); // Klickt auf das versteckte Datei-Upload-Element
});

// Event Listener für Änderungen im Datei-Upload-Element
document.getElementById('image-upload').addEventListener('change', function() {
  var file = this.files[0]; // Die ausgewählte Datei aus dem Upload-Element
  if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('uploaded-image').src = e.target.result; // Zeigt das hochgeladene Bild an
          document.getElementById('uploaded-image').style.display = 'block'; // Macht das Bild sichtbar
      }
      reader.readAsDataURL(file); // Liest die Datei als Daten-URL
  }
});
