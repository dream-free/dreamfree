$(function(){    //new country selector
     $('#list-countries').on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#list-countries-popup').toggleClass("listcountriespopupshow");
          });
	/*
    var countryselect = $("meta[name=var_prefCountry]").attr("content") + $("meta[name=var_prefLanguage]").attr("content") + "/";
    var countrylist = $("#list-countries-popup a");
    countrylist.removeClass("active");
    countrylist.each(function(){
        var currentcountry = $(this).attr("href"); 
       if(currentcountry == countryselect)
            $(this).addClass("active");
        });
		*/
})