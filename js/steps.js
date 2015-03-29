var step = { current: -1 };

//Add Modernizr test
Modernizr.addTest('isiOS', function(){
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false
});

//usage
if (Modernizr.isiOS) {
    $('#frame00 #start video').css("display", "none");
}

watch(step, "current", function() {
    console.log("Changed step to " + step.current);
    switch(step.current) {
        case 0:
            $( "#frame00 #start" ).on('click touchstart', function () {
                $('#frame00').css("opacity", "0");
                setTimeout( function() {
                    $('#frame00').css("display", "none");
                    step.current = 1;
                }, 2000);
            });
            break;
        case 1:
            initBigBang();
            break;
        case 2:
            $('#frame02').css("display", "initial");
            $('#frame02').css("opacity", "1");
            $('canvas').first().remove();
            setTimeout( function() {
                $('#frame01').css("display", "none");
                $('#frame02 .glitch').css("opacity", "1");
            }, 200);
            $( "#frame02 .glitch" ).on('click touchstart', function () {
                step.current = 3;
            });            
            break;
        case 3:
            $('#frame03').css("display", "table");
            initSurface('', '#ff0000', '#f7bd00', 0.002, '#ffffff', '#ffffff');
            $('#frame02 .glitch').css("opacity", "0");
            setTimeout( function() {
                $('#frame02').css("display", "none");
                $('#frame03').css("opacity", "1");
            }, 500);
            $( "#frame03 .glitch" ).on('click touchstart', function () {
                step.current = 4;
            });  
            break;
        case 4:
            initSurface(2, '#ffe100', '#ffe100', 0.0004, '#666666', '#cacaca');
            $('#sun-container #sun-glow').addClass("sun-slow");
            $('#frame03 > .glitch-box > .glitch').css("opacity", "0");
            setTimeout( function() {
                $('#frame03 > .glitch-box').css("display", "none");
            }, 250);
            $('#earth').addClass("earth-step04");
            $( "#sun-container #sun-glow .glitch" ).on('click touchstart', function () {
                $('canvas').first().remove();
                initSurface('', '#555555', '#ffffff', 0.0001, '#00a4ff', '#001eff');
                step.current = 5;
            }); 
            break;
        case 5:
            initSurface(3, '#ffe100', '#ffe100', 0.0004, '#666666', '#cacaca');
            $('#surfaceMagma').css("display", "none");
            $('#sun-container #sun-glow').removeClass("sun-slow");
            $('#sun-container #sun-glow').addClass("sun-fast");
            $('#earth').removeClass("earth-step04");
            $('#earth').addClass("earth-step05");
            setTimeout( function() {
                $('#sun-container2 #sun-glow').addClass("sun-fast");
                $('#sun-container').css("display", "none");
                $('#step05-verses').css("display", "initial");
                setTimeout( function() {
                    $('#step05-verses .glitch').css("opacity", "1");
                    $( ".glitch" ).on('click touchstart', function () {
                        step.current = 6;
                    }); 
                }, 3500);
            }, 3500);
            break;
        case 6:
            $('#step05-verses .glitch').css("opacity", "0");
            setTimeout( function() {
                $('#step05-verses').css("display", "none");
                $('#earth').removeClass("earth-step05");
                $('#earth').addClass("earth-step06");
                $('#sun-container2 #sun-glow').addClass("sun-out");
                $('#earth img').addClass("pangea-step06");
                $('#step06-verses').css("display", "initial");
                $('#step06-verses').css("top", "5%");
                setTimeout( function() {
                    $('#sun-container2').css("display", "none");
                    $('#step06-verses .glitch').css("opacity", "1");
                    $( ".glitch" ).on('click touchstart', function () {
                        step.current = 7;
                    }); 
                }, 3500);
            }, 250);
            break;
        case 7:
            $('#step06-verses .glitch').css("opacity", "0");
            setTimeout( function() {
                $('#step06-verses').css("display", "none");
                $('#earth').removeClass("earth-step06");
                $('#earth').addClass("earth-step07");
                $('#frame04').css("display", "initial");
                setTimeout( function() {
                    setTimeout( function() {
                        $('#frame03').css("display", "none");
                    }, 3500);
                    $('#frame04').css("opacity", "1");
                    setTimeout( function() {
                        $('#frame04 .glitch').css("opacity", "1");
                    }, 200);
                    $( "#frame04 .glitch" ).on('click touchstart', function () {
                        step.current = 8;
                    });
                }, 3500);
            }, 250);
            break;
        case 8:
            $('#frame04 .glitch').css("opacity", "0");
            setTimeout( function() {
                $('#frame04').css("display", "none");
                $('#frame05').css("display", "initial");
                setTimeout( function() {
                    $('#frame05').css("opacity", "1");
                    $('#frame05 .glitch:first').addClass("verse-up");
                    $('#frame05 .glitch:first').on('click touchstart', function () {
                        step.current = 9;
                    });
                }, 3500);
            }, 250);
            break;
        case 9:
            $('#frame05 .glitch:first').removeClass("verse-up");
            setTimeout( function() {
                $('#frame05 div:nth-child(5)').addClass("verse-up");
                $('#frame05 div:nth-child(5)').on('click touchstart', function () {
                    step.current = 10;
                });
            }, 3000);
            break;
        case 10:
            $('#frame05 #mountainRange').css("bottom", "71%");
            $('#frame05 #land').css("height", "71%");
            $('#frame05 div:nth-child(5)').css("top", "100%");
            break;
    };
});

step.current = 8;