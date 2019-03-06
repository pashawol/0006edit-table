 

// function generateTable() {
// 	$('.table-block__item--js textarea').each(function() {

// 		var th = $(this);
// 		var data = th.val(); 
// 		var rows = data.split("\n"); 
// 		var table = th.parents('.table-block__col--js');
// 		// table.empty();
		
// 		for (var y in rows) {
// 			var cells = rows[y].split("\t");
// 			// var row = $('.table-block__item--js'); 
// 			for (var x in cells) {
				
// 				// table.find('.table-block__item--js').remove();
// 				// .slice(0, y); 
// 				table.append('<div class="table-block__item table-block__item--body table-block__item--js"><textarea>' + cells[x] + '</textarea></div>'); 
// 				// console.log("cell count" + x);
// 			}
// 			// table.append(row);
// 		}
		
// 		// Insert into DOM
// 		// $(this).input( function(){ });
// 	})
// }
	// $('table-block--js tbody').html(table);
	$(document).on('input', '.table-block__item--js textarea',  function() {
			var th = $(this); 
			var data = th.val();  
			var rows = data.split("\n");  
			var table = th.parents('.table-block__col--js');
			var col = th.parent();
			var colCount = col.index(); 
			
			for (var y = 0 ; y < rows.length; ++y) {
				table.find('.table-block__item--js').eq(colCount + y).children().val(rows[y]).addClass('edit'); 
				console.log(y)
			} 
		});