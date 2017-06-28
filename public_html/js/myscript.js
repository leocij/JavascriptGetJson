var request = new XMLHttpRequest();
var url = "https://ppi2v2v3.herokuapp.com/multas/";
request.open('GET', url, true);
request.onload = function(){
    var data = JSON.parse(this.response);
    var texto = "";
    texto += "<table border='1'>";
    texto += "<thead>";
    texto += "<tr>";
    texto += "<th>Identifier</th>";
    texto += "<th>Descrição</th>";
    texto += "</tr>";
    texto += "</thead>";
    texto += "<tbody>";
    
    for(var i=0; i<data.length; i++){
        texto += "<tr>";
        texto += "<td>" + data[i].identifier + "</td>";
        texto += "<td>" + data[i].descricao + "</td>";
        texto += "</tr>";
    }
    texto += "</tbody>";
    texto += "</table>";
    document.getElementById("show-data").innerHTML = texto;
};
request.send();