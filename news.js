$(document).ready(function(){
  
  

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

  

  getTable();

  $("#search").keyup(function(e){
    if(e.keyCode == 13){
      document.getElementById('pagenum').style.display = 'none'
      var k = $(this).val();
      $("#my-table>tbody>tr").hide();
      var title = $("#my-table>tbody>tr>td:contains('"+k+"')");
      $(title).parent().show();
      console.log("서치 함수 실행");
     }
  });


    
  
  })



function getPaging(){
  const rowsPerPage = 10; //한 페이지에 담을 개수
  const rows = document.querySelectorAll('#my-table>tbody>tr');
  // console.log(rows);

  //pageNation 버튼 개수
  const rowsCount = rows.length;
  const pageCount = Math.ceil(rowsCount/rowsPerPage);//page 숫자 만들기 위한 계산 변수
  const numbers = document.querySelector('#numbers');

  //화살표 버튼
  const prev = document.querySelector('.nav .fa-arrow-left');
  const next = document.querySelector('.nav .fa-arrow-right');

  let pageActiveIdx = 0;
  let maxPageNum = 5;


  
  for(let i=1; i <= pageCount;i++){
      numbers.innerHTML += `<li class="page-num"><a href="#">${i}</a></li>`;
  };
  const numberBtn = numbers.querySelectorAll('a');
  // console.log(numberBtn);

  for(nb of numberBtn){
      nb.style.display='none';
  };

  numberBtn.forEach((item,index)=>{
      item.addEventListener('click',(e)=>{
          e.preventDefault();

          //table 출력 함수
          displayRow(index);
          // console.log(index);
      });
  });

  const displayRow = (index)=>{
      //slice => slice(start, end번호 뒷자리까지);
      let rowsArray = [...rows];
      // console.log(rowArray);
      for(ra of rowsArray){
          ra.style.display='none';
      }
      let start = index*rowsPerPage;
      let end = start + rowsPerPage;
      let newRows = rowsArray.slice(start, end);

      for(nr of newRows){
          nr.style.display = "";
      }

      for(nb of numberBtn){
          nb.classList.remove('active');
      }
      numberBtn[index].classList.add('active');
  }
  displayRow(0);

  //페이지네이션 그룹표시
  const displayPage = (num)=>{
      for(nb of numberBtn){
          nb.style.display='none';
      }
      let totalPageCount = Math.ceil(pageCount/maxPageNum);

      let pageArray = [...numberBtn];

      let start = num*maxPageNum;
      let end = start + maxPageNum;
      let pageListArray = pageArray.slice(start, end);

      for(item of pageListArray){
          item.style.display = 'block';
      }

      if(pageActiveIdx == 0){
          prev.style.display = 'none';
      }
      else{
          prev.style.display = 'block';
      }
      if(pageActiveIdx == totalPageCount -1){
          next.style.display = 'none';
      }
      else{
          next.style.display = 'block';
      }
  };
  displayPage(0);

  next.addEventListener('click', ()=>{
      let nextPageNum = pageActiveIdx*maxPageNum+maxPageNum;
      displayRow(nextPageNum);
      ++pageActiveIdx;
      displayPage(pageActiveIdx);
  });

  prev.addEventListener('click', ()=>{
      let nextPageNum = pageActiveIdx*maxPageNum-maxPageNum;
      displayRow(nextPageNum);
      --pageActiveIdx;
      displayPage(pageActiveIdx);
  });
};




function getTable() {
    
  $('#tableBody').empty();
  $('#numbers').empty();

   
  var param = { "datasets" : [
    { "NAME" : "테스트1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "테스트2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "테스트3", "from" : "기타", "date" : "2023-01-25", "cnt" : 4523, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목2", "from" : "시설원", "date" : "2023-01-24", "cnt" : 123, "link": "https://lms.kau.ac.kr/login.php?errorcode=4"},
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" },
    { "NAME" : "공지사항 제목1", "from" : "미래교육혁신원", "date" : "2023-01-23", "cnt" : 2234, "link": "https://lms.kau.ac.kr/login.php?errorcode=4" }


  ]}
  
  for(var i = 0; i < param.datasets.length; i++) {
    var tableTd = '<tr>';
    tableTd += '<td class="title-menu">'+ '<a href="' + param.datasets[i].link + '">' + param.datasets[i].NAME +'</a>'+  '</td>';
    tableTd += '<td class="tb-menu">' + param.datasets[i].from + '</td>';
    tableTd += '<td>' + param.datasets[i].date + '</td>';
    tableTd += '<td class="tb-menu">' + param.datasets[i].cnt + '</td>';
    tableTd += '</tr>';
  
    $('#tableBody').append(tableTd);
  }

  getPaging();
    
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

/*
$(document).ready(function(){
  $("#search").keyup(function(){
    var k = $(this).val();
    $("tableBody>tbody").hide();
    var title = $("tableBody>tbody>tr>td:nth-child(7n+3):contains('"+k+"')");
    $(title).parent().show();
  })
})

function search(){
    var k = $("#search").val();
    $("#my-table>tbody>tr").hide();
    var title = $("#my-table>tbody>tr>td:contains('"+k+"')");
    $(title-menu).parent().show();
    console.log("서치 함수 실행");
  
}*/


