$(document).ready(function(){
	$("#btn").click(function() {
		$.ajax({url:"https://api.github.com/users"})
		.then(function(data){
			var table="<thead><tr><th scope='col'>id</th><th scope='col'>name</th><th scope='col'>Github link</th></tr></thead><tbody>";
			$.each(data,function(idx){
				table+="<tr><th scope='row'>"+data[idx].id+"</th><td>"
				+"<a href='http://localhost:8080/Assessment-2/followers.html?followers="+data[idx].followers_url+"'>"+data[idx].login+"</a></td><td>"
				+ data[idx].url+"</td></tr>";
			});
			table+="</tbody>"
			document.getElementById("result").innerHTML =table;
		})
	
	})
})