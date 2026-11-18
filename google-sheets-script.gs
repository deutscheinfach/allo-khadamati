// Google Sheets > Extensions > Apps Script > الصق هاد الكود
// Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone
// نسخ رابط Web App وحطو فـ CONFIG.SHEET_URL داخل index.html
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date', 'Produit', 'Nom', 'Téléphone', 'Ville', 'Adresse', 'Quantité', 'Total (DH)']);
  }
  sheet.appendRow([p.date, p.product, p.name, p.phone, p.city, p.address, p.qty, p.total]);
  return ContentService.createTextOutput('OK');
}
