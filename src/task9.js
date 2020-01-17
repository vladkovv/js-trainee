function createCell(row) {
    var newCell = row.insertCell(-1);
    newCell.className = 'created';
    setTimeout(function() {
      newCell.className = 'new';
    }, 100);
    setTimeout(function() {
      newCell.className = '';
    }, 500);
  }
 
 function createRow(table) {
        var newRow = table.insertRow(-1);
        var colsLength = table.tBodies[0].rows[0].cells.length;
        for (var i = 0; i < colsLength; i++) {
          createCell(newRow);
        }
      }

      function createColumn(table) {
        var rows = table.tBodies[0].rows;
        for (var i = 0, l = rows.length; i < l; i++) {
          createCell(rows[i]);
        }
      }


     document.addEventListener('DOMContentLoaded', function() {
        var table = document.querySelector('table#tb1');
        document.querySelector('#addcolumnbtn').onclick = function() {
          createColumn(table);
        }
        document.querySelector('#addrowbtn').onclick = function() {
          createRow(table);
        }
      });