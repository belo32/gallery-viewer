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
				var div = $("\<a\>\<\/a\>").attr({
					id: "gallery-item",
					href: item.links.large_thumbnail,
					sytle: "background-image:url("+item.links.large_thumbnail+")"
					/*class: "grid_4"*/
				});
				div.addClass("grid_4");
				$("\<img\/\>").attr("src",item.links.large_thumbnail).appendTo(div);
				div.appendTo("\#dynamic-gallery");
			});	
			$(function(){
     $('\#dynamic-gallery a').touchTouch();

});		
		});

});


