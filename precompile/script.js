$(document).ready(function() {
    fillCopy();
    zoom();
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
		{card:"bash",content:"Knows how to create a custom bash environment that improves efficiency and that looks awesome. Look at that sweet terminal!"},
		{card:"docker",content:"Uses docker to emulate various development tools on windows as well as creating easy to distribute apps."},
		{card:"node",content:"Engine to speed up my development and testing process. I like gulp, webpack, browser-sync, bower, and so on."},
		{card:"less",content:"Uses less to standardize CSS files, Variables in css are super useful for development in my opinion."},
		{card:"sysadmin",content:"Knows way around servers. Some examples are: Server maintenance, SharePoint, DNS, AD/DS, SQL, etc."}
	]
	for(i=0;i < copy.length; i++){
		$('.'+copy[i].card+' .copy').each(function(index,el){
			$(this).text(copy[i].content);
		});
	}
}

function zoom(){
	$('.thumbnail').each(function(index,el){
		$(this).click(function(){
			$('.modal-content').html($($(this), 'img').html());
			$('#modal').modal('show')
		});
	});
}