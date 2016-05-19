if(!window.jQuery) {
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);
}

$.fn.pluralize = function() {
	var nums = +this.match(/\d+(?=\s\w+)/g);
	var ctro = this.match(/\d+ \K\w+/g);
	var ctrs = this.match(/\d+ \K\w+/g);
	for (n = 0; n < nums.length; n++) {
		ctrs[n] = (nums[n] == 1) ? ctrs[n].replace(\w+\Ks, "") : ((ctrs[n].search(\w+\Ks) == -1) ? ctrs[n] + "s" : ctrs[n]);
	}
	for (n = 0; n < nums.length; n++) {
		this.replace(String(ctro[n]),String(ctrs[n]));
	}
}
