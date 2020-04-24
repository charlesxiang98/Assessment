(function($){
	$.getUrlParam = function(name)
	{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
	}
	})(jQuery);
$(document).ready(function(){
	$(function() {
		var followerurl = $.getUrlParam('followers');
		$.getJSON(followerurl, function(jsonDoc){
			console.log(jsonDoc);
			var table="<thead><tr><th scope='col'>id</th><th scope='col'>name</th><th scope='col'>Profile</th></tr></thead><tbody>";
			$.each(jsonDoc,function(idx){
				table+="<tr><th scope='row'>"+jsonDoc[idx].id+"</th><td>"
				+"<a href='http://localhost:8080/Assessment-2/followers.html?followers="+jsonDoc[idx].followers_url+"'>"+jsonDoc[idx].login+"</a></td><td>"
				+ "<img src='" + jsonDoc[idx].avatar_url + "' width=50 height=50 />"+"</td></tr>";
			});
			table+="</tbody>"
			document.getElementById("result").innerHTML =table;
		});
	
	});
});