$("input[type='number']").inputSpinner();

$("#translates input").each(function () {
	$(this).val(randomNum(0, 200));
});

$("#rotations input").each(function () {
	$(this).val(randomNum(0, 180));
});

$("input[name='translateZ']").val(0);

$("input[type='number']").on("change", function (evt) {
	let transform = '';
	$("input[type='number']").each(function () {
		const elem = $(this);
		const unit = (elem.attr("name").substr(0, 1) === 'r') ? 'deg' : 'px';
		transform += `${elem.attr("name")}(${elem.val()}${unit}) `;
	});
	console.log(transform);
	$('.cube').css('transform', transform);
});

setTimeout(function(){$("input[type='number']").last().trigger("change");
}, 500);

// var cube = document.querySelector('.cube');
// var radioGroup = document.querySelector('.radio-group');
// var currentClass = '';
//
// function changeSide() {
// 	var checkedRadio = radioGroup.querySelector(':checked');
// 	var showClass = 'show-' + checkedRadio.value;
// 	if ( currentClass ) {
// 		cube.classList.remove( currentClass );
// 	}
// 	cube.classList.add( showClass );
// 	currentClass = showClass;
// }
// // set initial side
// changeSide();
//
// radioGroup.addEventListener( 'change', changeSide );


function randomNum(min, max) {
	return Math.ceil((max - min) * Math.random()) + min;
}
