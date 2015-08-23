$(document).ready(function()
{

	$('#button').click(function(){

		var Addthis = $('input[name="item"]').val();
		$('.list').append("<div class='itemadd'>"+ Addthis + "</div>");

	});

	$(document).on('click','.itemadd',function()
		{
			$(this).css("text-decoration","line-through");
		});

$(document).on('click','#clear',function()
		{
			$('.itemadd').css("display","none");
		});

});