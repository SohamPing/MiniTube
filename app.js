$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});

$(document).ready(function(){
	var API_KEY= 'AIzaSyDXIgLfTHzhyq66ioRpS9xBQ2GIJWuuUIo';
	var video=[];
	var videos = $('#videos')

	// document.getElementById('searchbutton').addEventListener('click',myfunction())
	$('#submitform').submit(function(event){
		event.preventDefault();
		var searchkeyword = $('#inpt_search').val()
		
		searchvideo(API_KEY,searchkeyword,5);
	})

	function searchvideo(key,search,videonumber){
        $('#videos').append('<h2 style="color:yellow; margin-left:24px; font-style: italic;"><u>Our Search Results</u></h2>');
		$.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCmUrKMbdRpvJFJBQtIwk_7PW-qnWm9GDI&part=snippet&type=video&maxResults='+videonumber+'&q='+search,function(data){
            
			console.log(data)
			data.items.forEach(item  => {
				
				video.push(`<iframe width="480" height="360" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				)
				

			});
			console.log( "Inside video array= "+ video)
			$('#videos').append(video + '<br/>');
		})

	}
})

