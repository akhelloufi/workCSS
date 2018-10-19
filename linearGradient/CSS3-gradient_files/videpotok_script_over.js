function Check_Vidadv_Visibility(el, top, bottom, width_el, height_el, width_roll, height_roll, measure_wl){
    if(!is_closed_vid_roll){
        var topD = window.pageYOffset;
        var bottomD = topD + window.innerHeight;
        var trigger_y = top+((bottom - top)*52)/100;
        var div_zag = document.getElementById('videpotok_over_float_zagl');
        if(trigger_y > topD && trigger_y < bottomD){
            el.style.position = 'relative';
            el.style.top = 0;
            el.style.left = 0;
            el.style.width = width_el+measure_wl;
            el.style.height = height_el+'px';
            div_zag.style.width = 0;
            div_zag.style.height = 0;
            try{document.getElementById("adv_kod_frame").style.width="100% !important";}catch(b){}
            try{document.getElementById("adv_kod_frame").style.height="100% !important";}catch(b){}
        }else{
            el.style.position = 'fixed';

            if(el.hasAttribute('vid_el_top') && parseInt(el.getAttribute('vid_el_top')) > 0){
                el.style.top = 0;
            }else{
                if(!document.doctype)el.style.top = (parseInt(document.body.clientHeight)-parseInt(height_roll))+'px';
                else el.style.top = (parseInt(document.documentElement.clientHeight)-parseInt(height_roll))+'px';
            }
            if(el.hasAttribute('vid_el_locate') && parseInt(el.getAttribute('vid_el_locate')) > 0){
                el.style.left = '0px';
            }else{
                el.style.left = (parseInt(document.documentElement.clientWidth)-parseInt(width_roll))+'px';
            }
            el.style.width = width_roll+'px';
            el.style.height = height_roll+'px';
            div_zag.style.width = width_el+'px';
            div_zag.style.height = height_el+'px';
            try{document.getElementById("adv_kod_frame").style.width="100% !important";}catch(b){}
            try{document.getElementById("adv_kod_frame").style.height="100% !important";}catch(b){}
            el.style.zIndex = 100000000;
        }
    }
}
function Closed_vid_Roll() {
    try{document.getElementById("adv_kod_frame").style.display="none";}catch(b){}
    try{document.getElementById("adv_kod_frame").setAttribute("hidden","hidden");}catch(b){}
    try{document.getElementById("adv_kod_frame").src="";}catch(b){}
    is_closed_vid_roll = true;
    try{document.getElementById("videpotok_over_float").style.position = 'relative';}catch(b){}
    try{document.getElementById("videpotok_over_float").style.top = 0;}catch(b){}
    try{document.getElementById("videpotok_over_float").style.left = 0;}catch(b){}
    try{document.getElementById("videpotok_over_float").style.zIndex = 0;}catch(b){}
    try{document.getElementById("videpotok_over_float").style.width="auto";}catch(b){}
    try{document.getElementById("videpotok_over_float").style.height="auto";}catch(b){}
    try{document.getElementById("videpotok_over_float_zagl").style.width=0;}catch(b){}
    try{document.getElementById("videpotok_over_float_zagl").style.height=0;}catch(b){}
}
var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventer=window[eventMethod],messageEvent="attachEvent"==eventMethod?"onmessage":"message";
eventer(messageEvent,function(a){if("https://vidtok.ru"==a.origin){if("end_reklam_vid_roll"==a.data){try{Closed_vid_Roll();}catch(a){}}}},!1);
var is_closed_vid_roll = false;
window.onload = function () {
    //var TimerClosed=setTimeout(function(){try{Closed_vid_Roll();}catch(a){}try{clearTimeout(TimerClosed);}catch(a){}try{TimerClosed=null;}catch(a){}},36E4);
    el = document.getElementById('videpotok_over_float');
    var width_el = (el.hasAttribute('vid_el_width')) ? parseInt(el.getAttribute('vid_el_width')) : 600;
    var height_el = (el.hasAttribute('vid_el_height')) ? parseInt(el.getAttribute('vid_el_height')) : 320;
    var width_roll = (el.hasAttribute('vid_roll_width')) ? parseInt(el.getAttribute('vid_roll_width')) : 400;
    var height_roll = (el.hasAttribute('vid_roll_height')) ? parseInt(el.getAttribute('vid_roll_height')) : 250;
    el.style.width = (parseInt(width_el) < 400) ? '400px' : width_el+'px';
    el.style.height = (parseInt(height_el) < 250) ? '250px' : height_el+'px';
    var measure_wl = (el.getAttribute('vid_el_width').indexOf('%')+1) ? '%' : 'px';
    var iframeAdElem = document.createElement("iframe");
    iframeAdElem.id = 'adv_kod_frame';
    iframeAdElem.width = '100%';
    iframeAdElem.height = '100%';
    iframeAdElem.frameBorder = 0;
    iframeAdElem.style.border = 'none';
    iframeAdElem.src = 'https://vidtok.ru/rollscript.php?wpl='+location.protocol+'//'+location.hostname;
    el.appendChild(iframeAdElem);
    var div_zagl = document.createElement("div");
    div_zagl.id = 'videpotok_over_float_zagl';
    div_zagl.width = 0;
    div_zagl.height = 0;
    el.parentElement.insertBefore(div_zagl, el);
    var topD = window.pageYOffset;
    var start_topEl = el.getBoundingClientRect().top + topD;
    var start_botEl = el.getBoundingClientRect().bottom + topD;
    Check_Vidadv_Visibility(el, start_topEl, start_botEl, width_el, height_el, width_roll, height_roll, measure_wl);
    window.onscroll = function() {
        Check_Vidadv_Visibility(el, start_topEl, start_botEl, width_el, height_el, width_roll, height_roll, measure_wl);
    };
};