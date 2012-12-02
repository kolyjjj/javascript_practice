var url = window.location.href.toLowerCase();

if (url.indexOf('www.google.com.hk') >= 0 || 
	url.indexOf('www.google.com')>=0 || url.indexOf('/search')>=0)
	{
		var all = document.getElementsByTag('a');
		for (var i = 0; i < all.length; i++) {
			all[i].setAttribute('onmousedown','');
		};
	}