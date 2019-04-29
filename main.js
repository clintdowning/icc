
$.getJSON("data.json", function(json) {  // Populate existing fields.
	$.each(json, function(i, field){
		add(field.name, field.date, field.assigned);
	});
});

$("#submit").click(function(){  // Add entry on submit.
	add($("#name").val(), formatDate($("#date").val()), $("#assigned").val());
});

function add(name, date, assigned ){  // General add.
	$("table").prepend("<tr><td>" + name + "</td><td>" + date + "</td><td>" + assigned + "</td></tr>");
}

function formatDate ( date ) {  // Format date from date input field.
	var year = date.substring(0,4);
	var month = date.substring(5,7);
	var day = date.substring(8,10);
	var fixed_date = month + "/" + day + "/" + year;
	return fixed_date;
}
