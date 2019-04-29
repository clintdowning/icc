
$.getJSON("data.json", function(json) {  // Populate existing fields.
	$.each(json, function(i, field){
		add(field.name, field.date, field.assigned);
	});
});

$("#submit").click(function(){  // Add entry on submit.
	add($("#name").val(), formatDate($("#date").val()), $("#assigned").val());
});

function add(name, date, assigned ){  // General add.
	var pos = direction == 'left' ? '-' : '' ;
	pos += '1000px';
	direction = direction == 'left' ? 'right' : 'left' ;
	var index_id = "index_" + index;
	$("table").prepend("<tr id=\"" + index_id + "\" style=\"left: " + pos + "\"><td>" + name + "</td><td>" + date + "</td><td>" + assigned + "</td></tr>");
	$("#"+index_id).animate({height: '38px'},250);
	$("#"+index_id).animate({left: '0px'},500);
}

function formatDate ( date ) {  // Format date from date input field.
	var year = date.substring(0,4);
	var month = date.substring(5,7);
	var day = date.substring(8,10);
	var fixed_date = month + "/" + day + "/" + year;
	return fixed_date;
}

var direction = 'left';
var index = 0;
