;(function($){
var popup = {
    init:function(){
        this.popupFn();
    },
    popupFn:function(){
        var space = /\s/g;

        function getCookieFn(cookieName){
            
            var cookie = document.cookie.replace(space,'').split(';');

            for(var i in cookie){
                var start = 0;
                var end = cookie[i].indexOf('=');

                if(cookie[i].slice(start,end) ==  cookieName){
                    start = cookie[i].indexOf('=')+1;
                    return cookie[i].slice(start);
                }
            }
            return '';
        }

        function windowPopFn(){
            var iscookie = getCookieFn('popup_20210528');

            if(iscookie == 'no'){
                return false;
            }
            else{
                window.open('./popup_1.html','popup_20210528','width=610, height=428, top=0, right=0');
            }
        }
        windowPopFn();
    }
  
}
popup.init();
})(jQuery)