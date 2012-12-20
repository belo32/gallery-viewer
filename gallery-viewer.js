/**
* 
*/

var id = "qOlBw";
var albumUrl = "http://api.imgur.com/2/album/"+id+".json";
var albumUrl2 =" https://api.imgur.com/3/album/"+id+"/images?callback=0";
var auth="Client-ID 54a3f7332a8786f";
var facebook= "https://graph.facebook.com/233975233402550/photos";
$.support.cors = true;
$(document).ready(function(){
	$("#dynamic-gallery").append("document ready");
	//getJSON(albumUrl2);
	getAjaxJSON(facebook);

});


function getJSON(albumUrl){
	$("#dynamic-gallery").append("getJson");
	$.getJSON(albumUrl,
		function(data){
			$("\#dynamic-gallery").append("data " +data);
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
    dataType: "json",
    type: "GET",
    success: function(json) {
        $("#dynamic-gallery").append("success "+json);
        
    },
    error: function (xhr, textStatus, errorThrown) {
        $("#dynamic-gallery").append(" error " + textStatus);
        
    },
    complete: function(data){
    	$("#dynamic-gallery").append(" complete "+data);
    }
	});

}


