
$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $.ajax({
  	url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=723f7a1e0668f0b2a286b07a4d1bc50a&tags=lighthouse&format=json&jsoncallback=?',
  	dataType: 'jsonp',
  	success: function(image){
  		var counter = 0;
  		showPhoto(image.photos.photo[counter]);
      counter++;
  		setInterval(function(){
  		showPhoto(image.photos.photo[counter]);
      counter++;
     },9000);
  	}
  });
});

function showPhoto(image){
	var img_src = "http://farm" + image.farm + ".static.flickr.com/" + image.server + "/" + image.id + "_" + image.secret + "_m.jpg";
  var img = $("<img/>").attr("src", img_src).css("width", "300px").css("height", "300px")
  $(img).fadeIn(3000).appendTo(".show-photo");
  $(img).delay(3000).fadeOut(3000);
}


//https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&api_key=723f7a1e0668f0b2a286b07a4d1bc50a&jsoncallback=?