function Facade(){
    //pages
    var home;

    var currentPage;
    var delayEngagement = -1;

    //UI
    var texto;
    var imageContainer;

    this.init = function(){
    	home = $("#home");

    	home.click(function(){
            socket.connect();
        });


        texto = $("#texto");
        $("#texto").keyup( function() {
            resetImages();
            var val = $(this).val();
            var html = "";
            for(var i=0; i < val.length; i++){
                html += "<img src='images/" + val.substr(i,1) + ".png'/>";
            }

            imageContainer.html(html);
        });

        imageContainer = $("#imageContainer");

        changePage(home);
    }

    function changePage(page){
    	if(currentPage==page) return;

    	if(currentPage) currentPage.fadeOut("fast");
		page.fadeIn("fast");

		currentPage = page;
    }

    function resetImages(){
        texto.html("");
    }
}