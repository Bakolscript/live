var ccount={'yntv':{c:4,u:1},'net':{c:19,u:16},'ynstreaming':{c:6,u:2},'yntdownload':{c:15,u:12},'gtv':{c:52,u:13},'rtv':{c:35,u:15},'rcti':{c:38,u:12},'tvri':{c:8,u:7},'antv':{c:17,u:6},'sctv':{c:16,u:8},'tvone':{c:16,u:9},'trans':{c:29,u:16},'inews':{c:8,u:4},'metro':{c:12,u:10},'trans7':{c:18,u:13},'kompas':{c:11,u:8},'indosiar':{c:22,u:9},'mnc':{c:12,u:7},'beritasatu':{c:4,u:2},'okeytv':{c:3,u:2},'tvdua':{c:14,u:5},'tvsatu':{c:4,u:1},'1news':{c:3,u:2},'':{}};

// Outputs a formatted number to the browser
function ccount_write(sum)
{
	document.write(sum.formatThousands('US'));
}

// Displays total clicks for an ID
function ccount_display(id)
{
	ccount_write(ccount[id]['c']);
}

// Displays unique clicks for an ID
function ccount_unique(id)
{
	ccount_write(ccount[id]['u']);
}

// Sums total clicks for IDs passed as arguments
function ccount_sum()
{
	var sum = 0;

	for (var i=0; i<arguments.length; i++) { // >
		if (typeof ccount[arguments[i]]!=='undefined') {
			sum += ccount[arguments[i]]['c'];
		}
	}

	ccount_write(sum);
}

// Sums unique clicks for IDs passed as arguments
function ccount_sum_unique()
{
	var sum = 0;

	for (var i=0; i<arguments.length; i++) { // >
		if (typeof ccount[arguments[i]]!=='undefined') {
			sum += ccount[arguments[i]]['u'];
		}
	}

	ccount_write(sum);
}

// Displays total clicks count
function ccount_total()
{
	var sum = 0;

	for (var key in ccount) {
		if (ccount.hasOwnProperty(key) && key !== '') {
			sum += ccount[key]['c'];
		}
	}

	ccount_write(sum);
}

// Displays total unique clicks count
function ccount_total_unique()
{
	var sum = 0;

	for (var key in ccount) {
		if (ccount.hasOwnProperty(key) && key !== '') {
			sum += ccount[key]['u'];
		}
	}

	ccount_write(sum);
}

// Adds a thousands separator to a number
Number.prototype.formatThousands = function(notation)
{
	var n = this, separator = "";
	switch (notation)
	{
		case "US":
			separator = ",";
			break;
		case "UK":
			separator = ".";
			break;
		case "FR":
			separator = " ";
			break;
		default:
			return n;
	}
	n = parseInt(n) + "";
	j = (j = n.length) > 3 ? j % 3 : 0;
	return (j ? n.substr(0, j) + separator : "") + n.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + separator);
}
