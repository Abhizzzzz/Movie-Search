$(document).ready(() =>{
	getMovieDetails();
})

let getMovieDetails = () =>{
	let link = " ";
	let title = $('#title').val();
	let year = $('#year').val();
	let id = $('#id').val();
	if(title == " " ){
		alert("hi");
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