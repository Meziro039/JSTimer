var mute // 無音音声
var jsplay_sw // 切り替え値

mute = new Audio("mute.mp3")
jsplay_sw = 0 // 0=Stop 1=Play

// 疑似Sleep
function sleep(t){
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

async function roop(){

    while (true){
        console.log("ok")
        mute.play()
        await sleep(0.1)

        //break
        if (jsplay_sw == 0){
            mute.pause()
            break
        }

    }
}

async function play(){
    if (jsplay_sw != 1){
        jsplay_sw = 1
        roop()   
    }
    else{
        ;
    }
}

function stop(){
    jsplay_sw = 0
}

// C/https://github.com/Meziro039