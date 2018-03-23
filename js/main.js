var userLang;

if(localStorage.getItem('lang') === 'undefined') {
	userLang = navigator.language || navigator.userLanguage;
} else {
	userLang = localStorage.getItem('lang');
}

if($('[lang="' + userLang + '"]').length) {
	$('[lang]').hide();
	$('[lang="' + userLang + '"]').show();
	$('[data-lang="' + userLang + '"]').addClass('active');
} else {
	$('[data-lang="en-US"]').addClass('active');
	$('[lang="en-US"]').show();
}

$('.language-switch li').on('click', function(e) {

	$('.language-switch li').removeClass('active');
	$(this).addClass('active');

	$('[lang]').hide();
	$('[lang="' + $(this).data('lang') + '"]').show();

	localStorage.setItem('lang', $(this).data('lang'));

});