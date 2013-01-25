/**
* JQuery script for loading images from the facebook page album providing the album id as follows:
* <div class="fb-album" data-id="{ALBUM_ID}"></div>
* images will be added in the following format <div class="fb-image"><img src="{image_source}"/>
* Author: Bilal Al-Hajjar
*/
var facebookUrl = "https://graph.facebook.com/";
var photosExt = "/photos?fields=source";
$.support.cors = true;
$(document).ready(function(){
	var id =$('.fb-album').attr('data-id');
	var albumUrl = facebookUrl + id + photosExt 
	getAjaxJSON(albumUrl);



});

function getAjaxJSON(albumUrl){
$.ajax({
    url: albumUrl,
    dataType: "json",
    cache: false,
    type: "GET",
    success: function(data) {
        
        var dataArray = data.data;
        $.each(dataArray, function(i,item){
        	console.log(item.source);
        	var div = $("<div></div>").attr({
                class:"fb-image"  
            });

            var ref =$("<a></a>").attr({
                
                href: item.source,
               
                }).appendTo(div);
        	$("<img/>").attr("src",item.source).appendTo(ref);
				div.appendTo(".fb-album");
        });
        console.log(dataArray);
        
    },
    error: function (xhr, textStatus, errorThrown) {
        console.log("error "+ textStatus);
        
    },
    complete: function(data){
    	console.log("complete");
    }
	});

}


