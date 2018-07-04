let search = 0;
$(document).ready(() =>{
	$('#search1').click(() =>{
		search = 1;
		getMovieDetails();
	});
	$('#search2').click(() =>{
		search = 2;
		getMovieDetails();
	});
	$('#search3').click(() =>{
		search = 3;
		getMovieDetails();
	});
})

let getMovieDetails = () =>{
	let link;
	let title;
	let year;
	if(search == 1){
		title = $('#title1').val();
		if(title == ""){
			alert("Enter movie title");
		}
		else{
		link = `http://www.omdbapi.com/?apikey=2ea2f91b&t=${title}`;
		console.log(link);
		}
	}
	else if(search == 2){
		title = $('#title2').val();
		year =  $('#year').val();
		if(title == "" && year ==""){
			alert("Enter movie title and year");
		}
		else if(title == ""){
			alert("Enter movie title");
		}
		else if(year == ""){
			alert("Enter movie year");
		}
		else{
		link = `http://www.omdbapi.com/?apikey=2ea2f91b&t=${title}&y=${year}`;
		console.log(link);
		}
	}
	else if(search == 3){
		id = $('#id').val();
		if(id == ""){
			alert("Enter movie id");
		}
		else{
		link = `http://www.omdbapi.com/?apikey=2ea2f91b&i=${id}`;
		console.log(link);
		}
	}
	else{

	}




	
	$.ajax({
		type:'GET',
		dataType:'json',
		async: true,
		url:link,
		success: (data) =>{
			console.log(data);
			
			
			

		}
	})
}