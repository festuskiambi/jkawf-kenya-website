/*  
Auther Festus Kiambi

*/
(function() {

  (function($) {
    $.countdown = function(el, options) {
      var getDateData,
        _this = this;
      this.el = el;
      this.$el = $(el);
      this.$el.data("countdown", this);
      this.init = function() {
        _this.options = $.extend({}, $.countdown.defaultOptions, options);
        if (_this.options.refresh) {
          _this.interval = setInterval(function() {
            return _this.render();
          }, _this.options.refresh);
        }
        _this.render();
        return _this;
      };
      getDateData = function(endDate) {
        var dateData, diff;
        endDate = Date.parse($.isPlainObject(_this.options.date) ? _this.options.date : new Date(_this.options.date));
        diff = (endDate - Date.parse(new Date)) / 1000;
        if (diff <= 0) {
          diff = 0;
          if (_this.interval) {
            _this.stop();
          }
          _this.options.onEnd.apply(_this);
        }
        dateData = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          millisec: 0
        };
        if (diff >= (365.25 * 86400)) {
          dateData.years = Math.floor(diff / (365.25 * 86400));
          diff -= dateData.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
          dateData.days = Math.floor(diff / 86400);
          diff -= dateData.days * 86400;
        }
        if (diff >= 3600) {
          dateData.hours = Math.floor(diff / 3600);
          diff -= dateData.hours * 3600;
        }
        if (diff >= 60) {
          dateData.min = Math.floor(diff / 60);
          diff -= dateData.min * 60;
        }
        dateData.sec = diff;
        return dateData;
      };
      this.leadingZeros = function(num, length) {
        if (length == null) {
          length = 2;
        }
        num = String(num);
        while (num.length < length) {
          num = "0" + num;
        }
        return num;
      };
      this.update = function(newDate) {
        _this.options.date = newDate;
        return _this;
      };
      this.render = function() {
        _this.options.render.apply(_this, [getDateData(_this.options.date)]);
        return _this;
      };
      this.stop = function() {
        if (_this.interval) {
          clearInterval(_this.interval);
        }
        _this.interval = null;
        return _this;
      };
      this.start = function(refresh) {
        if (refresh == null) {
          refresh = _this.options.refresh || $.countdown.defaultOptions.refresh;
        }
        if (_this.interval) {
          clearInterval(_this.interval);
        }
        _this.render();
        _this.options.refresh = refresh;
        _this.interval = setInterval(function() {
          return _this.render();
        }, _this.options.refresh);
        return _this;
      };
      return this.init();
    };
    $.countdown.defaultOptions = {
      date: "June 7, 2087 15:03:25",
      refresh: 1000,
      onEnd: $.noop,
      render: function(date) {
        return $(this.el).html("" + date.years + " years, " + date.days + " days, " + (this.leadingZeros(date.hours)) + " hours, " + (this.leadingZeros(date.min)) + " min and " + (this.leadingZeros(date.sec)) + " sec");
      }
    };
    $.fn.countdown = function(options) {
      return $.each(this, function(i, el) {
        var $el;
        $el = $(el);
        if (!$el.data('countdown')) {
          return $el.data('countdown', new $.countdown(el, options));
        }
      });
    };
    return void 0;
  })(jQuery);

}).call(this);

$(function() {
  $('#cntdwn').countdown({
    date: "September 30, 2013 10:49:26",
    render: function(data) {
      var $el = $(this.el);
      $el.find('.cntdwn__day').empty().append(this.leadingZeros(data.days, 1));
      $el.find('.cntdwn__hrs').empty().append(this.leadingZeros(data.hours, 1));
      $el.find('.cntdwn__min').empty().append(this.leadingZeros(data.min, 1));
      $el.find('.cntdwn__sec').empty().append(this.leadingZeros(data.sec, 1));
    }
  });
});
jQuery(function(){
    $ = jQuery;
    $(window).load( function() {
        $('.external-link').unbind('click');    
    });
    //main menu
    $("#templatemo_banner_menu ul").singlePageNav({offset: $('#templatemo_banner_menu').outerHeight()});
    //banner slide
   // $('.banner').unslider({fluid: true});
    $(window).on("load scroll resize", function(){
        banner_height = ($(document).width()/2200) * 960;
        $('.banner').height(banner_height);
       // $('.jssor_1').height(banner_height);
        if(banner_height > 250){
            caption_margin_top = (banner_height-100)/2;
            $('.banner .slide_caption:hidden').show();
            $('.banner .slide_caption').css({"margin-top":caption_margin_top});
        }else{
            $('.banner .slide_caption').hide();
        }
        $("#templatemo_banner_slide > ul > li").css({"background-size":"cover"});
    });
    //about icon
    $(window).on("load scroll resize", function(){
        about_wap_width = $(".about_icon").width();
        about_icon_padding_left = (about_wap_width/100)*30;
        about_icon_width = (about_wap_width/100)*40;
        about_icon_size = (about_icon_width/100)*50;
        about_icon_padding_top = (about_icon_width/100)*25;
        $(".about_icon .imgwap").css({
                                                    'margin-left': about_icon_padding_left,
                                                    'width': about_icon_width,
                                                    'height': about_icon_width,
                                                    });
        $("#templatemo_about .about_icon .imgwap i").css({
                                                                                    "font-size":about_icon_size,
                                                                                    "padding-top":about_icon_padding_top,
                                                                                  });
        $(".about_icon p").css({
                                            'padding-left': "10%",
                                            'padding-right': "10%",
                                            });
    });
	
	/*
	var dt = window.atob('IHwgPGEgcmVsPSJub2ZvbGxvdyIgaHJlZj0iaHR0cDovL3d3dy50ZW1wbGF0ZW1vLmNvbS9wcmV2aWV3L3RlbXBsYXRlbW9fNDExX2RyYWdvbmZydWl0Ij5EcmFnb25mcnVpdDwvYT4gYnkgPGEgcmVsPSJub2ZvbGxvdyIgaHJlZj0iaHR0cDovL3d3dy50ZW1wbGF0ZW1vLmNvbSI+dGVtcGxhdGVtbzwvYT4='); 
	var y = document.getElementById('footer');
	y.innerHTML += dt;
	*/
	
    //about textimonial
    $.current_testimonial = $("div.testimonial_text").first() ;
    $("div.testimonial_text").hide();
    $.current_testimonial.show();
    $(window).on("load scroll resize", function(){
        testimonial_child_height = $(".testimonial_text").height();
        $("#testimonial_text_wap").height(testimonial_child_height);
        $(".pre_next_wap").height(testimonial_child_height);
    });
    $("#prev_testimonial").click(function(){
        $.current_testimonial.effect("fade",{},200,function(){
                $.current_testimonial_prev = ($.current_testimonial.index() == 0) ? $(".testimonial_text").last() : $.current_testimonial.prev() ;
                $.current_testimonial_prev.fadeIn();
                $.current_testimonial = $.current_testimonial_prev;
        });
        return false;
    });
    $("#next_testimonial").click(function(){
        $.current_testimonial.effect("fade",{},200,function(){
                $.current_testimonial_next = ($.current_testimonial.index() == $(".testimonial_text").last().index() ) ? $(".testimonial_text").first() : $.current_testimonial.next() ;
                $.current_testimonial_next.fadeIn();
                $.current_testimonial = $.current_testimonial_next;
        });
        return false;
    });
    //event
    $(".event_box_img").load(function(){
        img_height = $(this).height();
        $(this).parent(".event_box_wap").height(img_height);
    });
    $(window).on("load resize", function(){
        img_height = $(".event_box_img").height();
        if($(window).width()>550){
            $(".event_box_wap").height(img_height);
            $(".event_box_wap").each(function(){
                total_height = $(this).children(".event_box_caption").outerHeight();
                header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
                admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
                paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
                hide_paragraph_height = header_height + admin_height + 10 ;
                $(this).children(".event_box_caption").css({"top": "-" + hide_paragraph_height + "px"});
            });
        }else{
            $(".event_box_wap").height(img_height);
            $(".event_box_wap").each(function(){
                total_height = $(this).children(".event_box_caption").outerHeight();
                header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
                admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
                paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
                hide_paragraph_height = header_height + admin_height + 10 ;
                $(this).height(total_height+img_height);
                $(this).children(".event_box_caption").css({"top": "0px"});
            });
        }
    });
    $(".event_box_wap").hover(function(){
        if($(window).width()>550){
            total_height = $(this).children(".event_box_caption").outerHeight();
            header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
            admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
            paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
            hide_paragraph_height = header_height + admin_height + paragraph_height + 10 ;
            $(this).children(".event_box_caption").stop().animate({"top": "-" + hide_paragraph_height + "px"});
        }
    },function(){
        if($(window).width()>550){
            total_height = $(this).children(".event_box_caption").outerHeight();
            header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
            admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
            paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
            hide_paragraph_height = header_height + admin_height + 10 ;
            $(this).children(".event_box_caption").stop().animate({"top": "-" + hide_paragraph_height + "px"});
        }
    });
    //timeline
    $(window).on("load resize", function(){
        $.timeline_right_position_top = 0 ;
        $.timeline_old_right_position_top = 0 ;
        $.timeline_left_position_top = 0 ;
        $.timeline_old_left_position_top = 0 ;
        w_width = ($(window).width()>1600) ? 1600 : $(window).width() ;
        $.timeline_item_width = ( w_width - 50) / 2;
        $(".time_line_wap").each(function(){
            //if class name already exit remove
            $(this).children("a.left_timer").remove();
            $(this).children("a.right_timer").remove();
            $(this).removeClass("left_timeline");
            $(this).removeClass("right_timeline");
            if($(window).width()<970){
                $("#templatemo_timeline .container-fluid").css({"position":"absolute"});
                positon_left = $("#templatemo_timeline .container-fluid").position().left +100;
                //put on right
                $(this).css({   
                                    'left': 70,
                                    'top':$.timeline_right_position_top,
                                    'width': $(window).width() - positon_left
                                 });
                $(this).addClass("right_timeline");
                $.timeline_old_right_position_top = $.timeline_right_position_top;
                $.timeline_right_position_top = $.timeline_right_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend("<a href=\"#\" class=\"right_timer\"><span class=\"glyphicon glyphicon-time\"></span></a>");
                $(this).children("a.right_timer").css({left:-86, width: 60 ,});
            }else if($.timeline_left_position_top == 0){
                $("#templatemo_timeline .container-fluid").css({"position":"relative"});
                //put on left
                $(this).css({   
                                    'left':0,
                                    'top':0,
                                    'width': $.timeline_item_width - 50
                                 });
                $(this).addClass("left_timeline");
                $.timeline_old_left_position_top = $.timeline_left_position_top;
                $.timeline_left_position_top = $.timeline_left_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend("<a href=\"#\" class=\"left_timer\"><span class=\"glyphicon glyphicon-time\"></span></a>");
                $(this).children("a.left_timer").css({left:$.timeline_item_width-50,});
            }else if( $.timeline_right_position_top < $.timeline_left_position_top ){
                $("#templatemo_timeline .container-fluid").css({"position":"relative"});
                $.timeline_right_position_top = ($.timeline_old_left_position_top + 40) < $.timeline_right_position_top  ? $.timeline_right_position_top : $.timeline_right_position_top + 40;
                //put on right
                $(this).css({   
                                    'left': $.timeline_item_width + 79,
                                    'top':$.timeline_right_position_top,
                                    'width': $.timeline_item_width - 50
                                 });
                $(this).addClass("right_timeline");
                $.timeline_old_right_position_top = $.timeline_right_position_top;
                $.timeline_right_position_top = $.timeline_right_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend("<a href=\"#\" class=\"right_timer\"><span class=\"glyphicon glyphicon-time\"></span></a>");
                $(this).children("a.right_timer").css({left:-99,});
            }else{
                $("#templatemo_timeline .container-fluid").css({"position":"relative"});
                $.timeline_left_position_top = ($.timeline_old_right_position_top + 40) < $.timeline_left_position_top ? $.timeline_left_position_top : $.timeline_left_position_top + 40;
                //put on left
                $(this).css({
                                    'left':0,
                                    'top':$.timeline_left_position_top,
                                    'width': $.timeline_item_width - 50
                                 });
                $(this).addClass("left_timeline");
                $.timeline_old_left_position_top = $.timeline_left_position_top;
                $.timeline_left_position_top = $.timeline_left_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend("<a href=\"#\" class=\"left_timer\"><span class=\"glyphicon glyphicon-time\"></span></a>");
                $(this).children("a.left_timer").css({left:$.timeline_item_width-50,});
            }
            //calculate and define container height
            if($.timeline_left_position_top > $.timeline_right_position_top ){
                $("#templatemo_timeline .container-fluid").height($.timeline_left_position_top-40);
                $("#templatemo_timeline").height($.timeline_left_position_top+200);
            }else{
                $("#templatemo_timeline .container-fluid").height($.timeline_right_position_top-40);
                $("#templatemo_timeline").height($.timeline_right_position_top+200);
            }
            $(this).fadeIn();
        });
    });
    //mobile menu and desktop menu
    $("#templatemo_mobile_menu").css({"right":-1500});
    $("#mobile_menu").click(function(){
            $("#templatemo_mobile_menu").show();
            $("#templatemo_mobile_menu").animate({"right":0});
            return false;
    });
    $(window).on("load resize", function(){
            if($(window).width()>768){
                $("#templatemo_mobile_menu").css({"right":-1500});
            }
    });

    jQuery.fn.anchorAnimate = function(settings) {
        settings = jQuery.extend({
            speed : 1100
        }, settings);	
        return this.each(function(){
            var caller = this
            $(caller).click(function (event){
                event.preventDefault();
                var locationHref = window.location.href;
                var elementClick = $(caller).attr("href");
                var destination = $(elementClick).offset().top - $('#templatemo_banner_menu').outerHeight() ;
                $("#templatemo_mobile_menu").animate({"right":-1500});
                $("#templatemo_mobile_menu").fadeOut() ;
                $("html,body").css({"overflow":"auto"});
                $("html,body").stop().animate({ scrollTop: destination}, settings.speed, function(){
                    // Detect if pushState is available
                    if(history.pushState) {
                        history.pushState(null, null, elementClick);
                    }
                });
                return false;
            });
        });
    }
    //animate scroll function calll
    $("#templatemo_mobile_menu a").anchorAnimate();    
    //about
    $(document).scroll(function(){
        document_top = $(document).scrollTop();
        event_wapper_top = $("#templatemo_about").position().top - $('#templatemo_banner_menu').outerHeight();
        if(document_top<event_wapper_top){
            degree = (360/event_wapper_top)*(document_top);
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/document_top)*(event_wapper_top);
            $("#templatemo_about .imgwap").css({
                        '-webkit-transform': 'rotate(' + degree + 'deg)',
                        '-moz-transform': 'rotate(' + degree + 'deg)',
                        '-ms-transform': 'rotate(' + degree + 'deg)',
                        '-o-transform': 'rotate(' + degree + 'deg)',
                        'transform': 'rotate(' + degree + 'deg)',
            });
            $("#templatemo_about .about_icon").css({
                        'opacity':event_animate_alpha
            });
        }else{
            $("#templatemo_about .imgwap").css({
                        '-webkit-transform': 'rotate(' + 360 + 'deg)',
                        '-moz-transform': 'rotate(' + 360 + 'deg)',
                        '-ms-transform': 'rotate(' + 360 + 'deg)',
                        '-o-transform': 'rotate(' + 360 + 'deg)',
                        'transform': 'rotate(' + 360 + 'deg)',
            });
            $("#templatemo_about .about_icon").css({
                        'opacity':1
            });
        }
    });
    //events
    //event
    $(document).scroll(function(){
        document_top = $(document).scrollTop();
        event_wapper_top = $("#templatemo_events").position().top - $('#templatemo_banner_menu').outerHeight();
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#templatemo_events .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#templatemo_events .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#templatemo_events .event_animate_left").css({'left': 0,'opacity':1});
            $("#templatemo_events .event_animate_right").css({'left':0,'opacity':1});
        }
    }); 
});
//google map
function initialize(){
    //define map
    var map;
    //lat lng
    myLatlng = new google.maps.LatLng(-1.3001992,36.78928480000002);
    //define style
    var styles = [
        {
            //set all color
            featureType: "all",
            stylers: [{ hue: "#35a9d8" }]
        },
        {
            //hide business
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{ visibility: "on" }]
        }
    ];
    //map options
    var mapOptions = {
        zoom: 16,
        center: myLatlng ,
        mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']} ,
        panControl: true , //hide panControl
        zoomControl: true , //hide zoomControl
        mapTypeControl: true , //hide mapTypeControl
        scaleControl: true , //hide scaleControl
        streetViewControl: true , //hide streetViewControl
        overviewMapControl: true , //hide overviewMapControl
    }
    //adding attribute value
    map = new google.maps.Map(document.getElementById('templatemo_contact_map'), mapOptions);
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    //add marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Jka/Wf-Kenya'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);