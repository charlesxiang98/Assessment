$(document).ready(function(){
	$("#getButton").click(function() {
		$.getJSON("https://api.github.com/users", function(jsonDoc){
			var table="<thead><tr><th scope='col'>id</th><th scope='col'>name</th><th scope='col'>Github link</th></tr></thead><tbody>";
			$.each(jsonDoc,function(idx){
				table+="<tr><th scope='row'>"+jsonDoc[idx].id+"</th><td>"
				+"<a href='http://localhost:8080/Assessment-2/followers.html?followers="+jsonDoc[idx].followers_url+"'>"+jsonDoc[idx].login+"</a></td><td>"
				+ jsonDoc[idx].url+"</td></tr>";
			});
			table+="</tbody>"
			document.getElementById("result").innerHTML =table;
		});
	
	});
});