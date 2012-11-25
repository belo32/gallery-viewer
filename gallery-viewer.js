/**
* 
*/
var id = "qOlBw"; /* the album id of the imgur*/
var albumUrl = "http://api.imgur.com/2/album/"+id+".json";
$(document).ready(function(){ 
	$.getJSON(albumUrl,
		function(data){
			var images = data.album.images;
			$.each(images, function(i,item){
				var div = $("<div></div>").attr({
					id: "gallery-item",
					class: "grid_4"
			});
				$("<img/>").attr("src",item.links.large_thumbnail).appendTo(div);
				div.appendTo("#dynamic-gallery");
			});			
		});

});


