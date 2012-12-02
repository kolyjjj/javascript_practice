var url = "http://www.ora.com:80/goodparts?q#fragment";
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?:(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var result = parse_url.exec(url);
var names = ['url','scheme','slash','host','port','path','query','hash'];
var blanks = '      ';
var i;

for (i = 0; i < names.length; i++) {
	console.log(names[i] + ':' + blanks.substring(names[i].length), result[i]);
}