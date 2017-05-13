function show(){
  for(var i=0;i<studentCollection.find().length;i++){
    $("tbody").text("");
	  var name = "<tr><td>"+studentCollection.find().number+"</td><td><input type='text' class='inputs'></td></tr>";
	  $("tbody").append(name);
	}
}
$("#record").on("click",show);
