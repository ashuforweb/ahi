google.load("visualization", "1", {
  packages: ["timeline"]
});
//    google.setOnLoadCallback(drawChart);
var arrVal = new Array();


function drawChart(arri) {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({
    type: 'string',
    id: 'empire'
  });
  dataTable.addColumn({
    type: 'string',
    id: 'emperor'
  });
  dataTable.addColumn({
    type: 'date',
    id: 'Start'
  });
  dataTable.addColumn({
    type: 'date',
    id: 'End'
  });
  console.log('1');
  //dataTable.addRows([e1,e2,new Date(e3,0,0),new Date(e4,0,0)]);
  dataTable.addRows(arri);
  chart.draw(dataTable);
}

function fnAdd() {
  var divclass = 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent time-error';
  var empire = document.getElementById('empire').value;
  var emperor = document.getElementById('emperor').value;
  var startyear = document.getElementById('startyear').value;
  var endyear = document.getElementById('endyear').value;
  setTimeout(function() {
    document.getElementById('div-error').style.display='none';
    document.getElementById('div-error').className = '';
    document.getElementById('div-error').className = divclass;

  },3000);
  if (empire.length == 0 || emperor.length == 0 || startyear.length == 0 || endyear.length == 0) {
    console.log("fnadd");
    document.getElementById('div-error').innerHTML = 'Please enter all the fields before saving';
    document.getElementById('div-error').className = '';
    document.getElementById('div-error').className = divclass;
    document.getElementById('div-error').style.display = 'block';
    document.getElementById('div-error').className = document.getElementById('div-error').className + ' show';
  } else if (startyear.length < 4 || endyear.length < 4) {
    document.getElementById('div-error').innerHTML = '';
    document.getElementById('div-error').innerHTML = 'Please Enter correct Years';
    document.getElementById('div-error').className = '';
    document.getElementById('div-error').className = divclass;
    document.getElementById('div-error').style.display = 'block';
    document.getElementById('div-error').className = document.getElementById('div-error').className + ' show';

  } else if (endyear < startyear) {
    document.getElementById('div-error').innerHTML = 'End Year shouldn\'t be less than Start Year';
    document.getElementById('div-error').className = '';
    document.getElementById('div-error').className = divclass;
    document.getElementById('div-error').style.display = 'block';
    document.getElementById('div-error').className = document.getElementById('div-error').className + ' show';

  } else {
    //    arrVal.push(empire,emperor,new Date(startyear,01,01),new Date(endyear,01,01));
    var arris = new Array();
    arris.push(empire, emperor, new Date(startyear, 01, 01), new Date(endyear, 01, 01));
    arrVal.push(arris);
    console.log(arrVal);
    drawChart(arrVal);
    document.getElementById('empire').value = '';
    document.getElementById('divemp').className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-demo is-upgraded';
    document.getElementById('emperor').value = '';
    document.getElementById('divempr').className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-demo is-upgraded';
    document.getElementById('startyear').value = '';
    document.getElementById('divsy').className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-demo is-upgraded';
    document.getElementById('endyear').value = '';
    document.getElementById('divey').className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-demo is-upgraded';
  }

}
