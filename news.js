$(document).ready(function(){
  
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

    getTable();
  
  })




function getTable() {
    
  $('#tableBody').empty();
   
  var param = { "datasets" : [
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목3", "from" : "기타", "date" : "2023-01-25", "cnt" : 4523, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" }
  ]}
  
  for(var i = 0; i < param.datasets.length; i++) {
    var tableTd = '<tr>';
    tableTd += '<td>'+ '<a href="' + param.datasets[i].link + '">' + param.datasets[i].NAME +'</a>'+  '</td>';
    tableTd += '<td class="tb-menu">' + param.datasets[i].from + '</td>';
    tableTd += '<td>' + param.datasets[i].date + '</td>';
    tableTd += '<td class="tb-menu">' + param.datasets[i].cnt + '</td>';
    tableTd += '</tr>';

  
    $('#tableBody').append(tableTd);

    
  }
    
}


function getTable2() {
    
  $('#tableBody2').empty();
  
  var param = { "datasets" : [
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234 },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123},
    { "NAME" : "공지사항 제목3", "from" : "기타", "date" : "2023-01-25", "cnt" : 321 }
  ]}

  for(var i = 0; i < param.datasets.length; i++) {
    var tableTd = '<tr>';
    tableTd += '<td>' + param.datasets[i].NAME + '</td>';
    tableTd += '<td>' + param.datasets[i].from + '</td>';
    tableTd += '<td>' + param.datasets[i].date + '</td>';
    tableTd += '<td>' + param.datasets[i].cnt + '</td>';
    tableTd += '</tr>';

    $('#tableBody2').append(tableTd);
  }
  
}

