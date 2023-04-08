
/*$(window).ready(function(){
	alert('It is working!!!');
});
*/
$('#header');
$('li');
$('ul li');
$('.student');
$('a.test:first');
$('tr:odd');

$('#myForm :input');
$('div:visible');
$('div:gt(2)');
$('div:animated');

$('#btn').click(function(){
	console.log($('#h1').text());
	$('#h1').text('Testing text');
	$('#h1').append(' Extra text');
});

$('ul li').click(function(){
	alert('clicked');
});

$('#btn2').on('click', function(){
	console.log('Second button is clicked');
});

$('#myDiv')
.click(function(){
	$(this).addClass('clicked');
})
.find('span')
.attr('title','Hover over me');


$("#btn3").click(function(){
    //$(".hidden").show();
    // $(".hidden").show(3000);
     $(".hidden").show('slow');
  });

  $("#btn4").click(function(){
    $(".hidden").hide();
  });

  $("#btn5").click(function(){
     $(".fade").fadeIn();
  });

  $("#btn6").click(function(){
    $(".fade").fadeOut();
  });




  $('#square').click(function(){

	$('#square').animate({
		'width': '200px',
		'height': '200px'

	});

});

$('.testing').click(function(){

	$('.testing').animate({
		'left': '+=50px',
		'opacity': 0.25,
		'fontSize': '30px'

	},
	300,
	function(){
		console.log("Animation is complete");
	}
	);
});
