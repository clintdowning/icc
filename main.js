
var json_data = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

$.each(json_data, function(i, field){
	add(field.name, field.date, field.assigned);
});

$("#submit").click(function(){  // Add entry on submit.
	if ( fieldsReady() ) {
		$('#error').css("display","none");
		add($("#name").val(), formatDate($("#date").val()), $("#assigned").val());
	} else {
		$('#error').css("display","block");
	}
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

function fieldsReady (  ) {
	return $("#name").val() && $("#date").val() && $("#assigned").val();
}

var direction = 'left';
var index = 0;
