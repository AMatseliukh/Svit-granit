$(document).ready(function () {
  "use strict";
  
  var nav_offset_top = $("header").height();

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".main_header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".main_header_area").addClass("navbar_fixed");
        } else {
          $(".main_header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*----------------------------------------------------*/

  $(".navbar__burger").on("click", function () {
    $(".navbar__nav-list").toggleClass("navbar__nav-list--active");
  });

  $(".navbar__nav-list li").click(function () {
    $(".navbar__nav-list li.active").removeClass("active");
    // $('.footer__menu li').removeClass('active');
    $(this).addClass("active");
  });

  /*  Our Project isotope
  /*----------------------------------------------------*/
  function latest_project1() {
    if ($(".our_project_details").length) {
      // Activate isotope in container
      $(".our_project_details").imagesLoaded(function() {
        $(".our_project_details").isotope({
          layoutMode: "fitRows",
          animationOptions: {
            duration: 750,
            easing: "linear",
          },
        });
      });
      // Add isotope click function
      $(".our_project_filter li").on("click", function() {
        $(".our_project_filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".our_project_details").isotope({
          filter: selector,
          animationOptions: {
            duration: 450,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
  }
  latest_project1();

  /*----------------------------------------------------*/

  // $('.lazy-load').lazyLoadXT();

  // quoto-slider
  /*----------------------------------------------------*/

  $(".quoto_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  /*----------------------------------------------------*/
  /*  Google map js
  /*----------------------------------------------------*/
  if ($("#mapBox").length) {
    var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100,
            },
            {
              lightness: 45,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#fdea06",
            },
            {
              visibility: "on",
            },
          ],
        },
      ],
    });

    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,
      infoWindow: {
        content: $info,
      },
    });
  }
});

