var fdb = new ForerunnerDB();
var db = fdb.db("SR");
var scoreCollection = db.collection('score');
var studentCollection = db.collection('student');
studentCollection.save();
studentCollection.load();
function show(){
  for(var i=0;i<studentCollection.find().length;i++){
    $("tbody").text("");
	  var name = "<tr><td>"+studentCollection.find().number+"</td><td><input type='text' class='inputs'></td></tr>";
	  $("tbody").append(name);
	}
}
$("#create").on("click",show);
