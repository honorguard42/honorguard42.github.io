$(document).ready(function() {
    fillCopy();
    setTimeout(fade('.title'),1);
});

function fade(el, i = 0) {
    $(el + ':eq(' + i + ')').fadeIn(700).fadeOut(2000, function() {
        if (i < $(el).length - 1) {
            fade(el, i + 1);
        } else {
            fade(el, 0);
        }
    });
}

function fillCopy(){
	var copy = [
		{card:"bash",content:"copy"},
		{card:"docker",content:"copy"},
		{card:"node",content:"copy"},
		{card:"less",content:"copy"},
		{card:"sysadmin",content:"copy"}
	]
	for(i=0;i < copy.length; i++){
		$('.'+copy[i].card+' .copy').each(function(index,el){
			$(this).text(copy[i].content);
		});
	}
}