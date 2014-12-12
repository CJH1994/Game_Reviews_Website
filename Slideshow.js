<!--

        var slideimages=new Array()
        function slideshowimages(){
        for (i=0;i<slideshowimages.arguments.length;i++){     
        slideimages[i]=new Image()
        slideimages[i].src=slideshowimages.arguments[i]
                                                                        /*
                                                                            JavaScript Image slideshow:
                                                                            By JavaScript Kit (www.javascriptkit.com)
                                                                            Over 200+ free JavaScript here!
                                                                        */
}
}

    
        function gotoshow(){
        if (!window.winslide||winslide.closed)
        winslide=window.open(slidelinks)
        else
        winslide.location=slidelinks[whichlink]
        winslide.focus()
}

//-->


<!--

            slideshowimages ("fifa15cover.jpg","gtavcover.jpg","mariokart7cover.jpg","wwetk14cover.jpeg","nextcargamecover.jpg")
           


            var slideshowspeed=3000

            var whichlink=0
            var whichimage=0
            function slideit(){
            if (!document.images)
            return
            document.images.slide.src=slideimages[whichimage].src
            whichlink=whichimage
            if (whichimage<slideimages.length-1)
            whichimage++
            else
            whichimage=0
            setTimeout("slideit()",slideshowspeed)
}
            slideit()

//-->

             