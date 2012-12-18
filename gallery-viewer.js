/**
* 
*/

var id = "qOlBw";
var albumUrl = "http://api.imgur.com/2/album/"+id+".json";
var albumUrl2 =" https://api.imgur.com/3/album/"+id+"/images";
var client_id="client_id: 54a3f7332a8786f";
$(document).ready(function(){
	//getJSON(albumUrl2);
	getAjaxJSON(albumUrl2);
});


function getJSON(albumUrl){
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
		type: "POST",
    url: albumUrl,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    
    beforeSend: function ( xhr ) {
    xhr.setRequestHeader('Authorization', client_id);
  },
    
    success: function(json) {
        $("#dynamic-gallery").html("json.length=" + json.length);
        
    },
    error: function (xhr, textStatus, errorThrown) {
        $("#dynamic-gallery").html(xhr.responseText);
    }
	});
}


