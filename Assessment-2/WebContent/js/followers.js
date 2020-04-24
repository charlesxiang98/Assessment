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
		$.ajax({url:followerurl
	}).then(function(data){
			console.log(data);
			var table="<thead><tr><th scope='col'>id</th><th scope='col'>name</th><th scope='col'>Profile</th></tr></thead><tbody>";
			$.each(data,function(idx){
				table+="<tr><th scope='row'>"+data[idx].id+"</th><td>"
				+"<a href='http://localhost:8080/Assessment-2/followers.html?followers="+data[idx].followers_url+"'>"+data[idx].login+"</a></td><td>"
				+ "<img src='" + data[idx].avatar_url + "' width=50 height=50 />"+"</td></tr>";
			});
			table+="</tbody>"
			document.getElementById("result").innerHTML =table;
		});
	
	});
});