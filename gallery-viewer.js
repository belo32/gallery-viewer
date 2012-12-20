/**
* 
*/

var id = "qOlBw";
var albumUrl = "http://api.imgur.com/2/album/"+id+".json";
var albumUrl2 =" https://api.imgur.com/3/album/"+id+"/images?callback=0";
var auth="Client-ID 54a3f7332a8786f";
var facebook= "https://graph.facebook.com/233975233402550/photos";
$(document).ready(function(){
	$("#dynamic-gallery").html("launch");
	//getJSON(albumUrl2);
	getAjaxJSON(facebook);
});


function getJSON(albumUrl){
	$("#dynamic-gallery").html("launch");
	$.getJSON(albumUrl,
		function(data){
			$("\#dynamic-gallery").append("test"+data.images);
			/*var images = data.album.images;
			$.each(images, function(i,item){
				var div = $("<div></div>").attr("id","gallery-item");
				$("<img/>").attr("src",item.links.large_thumbnail).appendTo(div);
				div.appendTo("#dynamic-gallery");
			});	*/		
		});
}

function getAjaxJSON(albumUrl){
$.ajax({
    url: albumUrl,
    success: function(json) {
        $("#dynamic-gallery").html("json.length=" + json.length);
        
    },
    error: function (xhr, textStatus, errorThrown) {
        $("#dynamic-gallery").html(xhr.responseText);
    }
	});

}


