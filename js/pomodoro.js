/**
 * Created by brodeurtristan on 17-01-12.
 */
//TODO : G
$( document ).ready(function() {
    var isSession = false;
    var isBreak = true;
    var isPaused = true;
    var sessionTime = 15;
    var breakTime = 3;
    var min = "00";
    var sec = "00";
    var timerText = "Session";
    var timerId;
    var per;

    init();

    function startSession(){
        if(!isPaused){

            timerId = setInterval(function(){
                console.log("is in setinterval");
                if(sec == 0){
                    if(min == 0 && sec ==0){
                        clearInterval(timerId);
                        min = breakTime;
                        sec = 1;
                        timerText = "Break!";
                        startBreak();
                    }
                    else{
                        sec = 60;
                        --min;
                    }



                }
                var secRestante = min *60 + sec;
                var secSession = sessionTime * 60;
                per = Math.abs((secRestante/secSession) *100 - 100);
                --sec;


                $('#timer').css({background: "linear-gradient(to right, #88b741 "+per+"%,transparent "+per+"%,transparent 100%)"});
                $('#session').text(timerText);
                $('#time').text(min + ":" + sec);
            },1000);
        }else clearInterval(timerId);
    }
    function startBreak(){
        if(!isPaused){
            timerId = setInterval(function(){
                console.log("is in setinterval");
                if(sec == 0){
                    if(min == 0 && sec ==0){
                        clearInterval(timerId);
                        min = sessionTime;
                        sec = 1;
                        timerText = "Session";
                        startSession();
                    }
                    else{
                        sec = 60;
                        --min;
                    }

                }
                var secRestante = min *60 + sec;
                var secBreak = breakTime * 60;
                per = Math.abs((secRestante/secBreak) *100);
                --sec;

                $('#timer').css({background: "linear-gradient(to right, #88b741 "+per+"%,transparent "+per+"%,transparent 100%)"});
                $('#session').text(timerText);
                $('#time').text(min + ":" + sec);
            },1000);
        }else clearInterval(timerId);
    }
    function init(){
        min = sessionTime;
        sec = "00";
        $('#session').text(timerText);
        $('#bLengthText').text(breakTime);
        $('#sLengthText').text(sessionTime);
        $('#time').text(min + ':' + sec);
        clearInterval(timerId);
    }
    $('#btnBreakMinus').click(function(){
        $('#bLengthText').text(--breakTime);
        init();
    });
    $('#btnBreakPlus').click(function(){
        $('#bLengthText').text(++breakTime);
        init();
    });
    $('#btnSessionMinus').click(function(){
        $('#sLengthText').text(--sessionTime);
        init();
    });
    $('#btnSessionPlus').click(function(){
        $('#sLengthText').text(++sessionTime);
        init();
    });
    $('#timer').click(function(){
        isPaused = !isPaused;
        isBreak = !isBreak;
        startSession();
    });
});

/*
 As a user, I can start a 25 minute pomodoro,
 and the timer will go off once 25 minutes has elapsed.
 */

