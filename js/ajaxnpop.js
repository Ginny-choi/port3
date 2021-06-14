

;(function($){
    var ajaxnpop = {
        init:function(){
            this.noticeFn();  
            
        },
        noticeFn:function(){
            var a = [];
            var txt ='';
            var $tbody = $('#sub5-1 tbody');
            var $btnNum = $('.button-list-wrap ul li a');
      
            var total = null;
            var list = 10;
            var pageNum = Math.ceil(total/list);
      
            var dataIndexStart = 0; //게시글 인덱스 시작
            var dataIndexEnd = list; //게시글 인덱스 끝번호
      
      
            function boardFn(){
              $.ajax({
                url:'../../data/board.json',
                dataType:'json',
                success:function(result){
      
                  $.each(result.notice, function(idx,obj){
                    a[idx] = [];
                    a[idx][0] = obj.번호; 
                    a[idx][1] = obj.내용;
                    a[idx][2] = obj.등록일;
                  });
                  total = a.length;
                  
                  function recordListFn(){
                    txt = '';
                    $tbody.html('');
      
                    for(var i=dataIndexStart;i<dataIndexEnd;i++){
                      txt += '<tr>';
                      for(var j=0;j<3;j++){
                        txt += '<td>' + a[i][j] + '</td>';
                      }
                      txt += '</tr>';
                    }
                    $tbody.html(txt);
      
                    pageNum = Math.ceil(total/list);
                  }
                  recordListFn();
      
                  $btnNum.each(function(idx){
                    $(this).on({
                      click:function(e){
                        e.preventDefault();
                        $btnNum.removeClass('addColor');
                        $(this).addClass('addColor');
                        dataIndexStart =parseInt(($(this).text())-1) * list;
                        dataIndexEnd = dataIndexStart + list;
      
                        if( dataIndexEnd>total ){
                          dataIndexEnd=total;
                        }
                        recordListFn();
                      }
                    });
                  });
      
                },
                error:function(){
                  alert('fail');
                }
              })
            }
            boardFn();
          }
    }
    ajaxnpop.init();
})(jQuery);