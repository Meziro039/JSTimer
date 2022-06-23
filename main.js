var min // 分数
var sec // 秒数
var t // sleep用
var sw // START STOP 判定

min = 0
sec = 0
t = 0
sw = 0

// 表示文字列の更新
function update(){

    // 一桁の場合0を足して更新
        // min
    if (String(min).length == 1){
        document.getElementById("min").innerText = "0" + String(min)
    }
    else{
        document.getElementById("min").innerText = String(min)
    }

        // sec
    if (String(sec).length == 1){
        document.getElementById("sec").innerText = "0" + String(sec)
    }
    else{
        document.getElementById("sec").innerText = String(sec)
    }

}


// 疑似Sleep
function sleep(t){
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}


// リセット
function time_reset(){
    min = 0
    sec = 0
    update()
}


// 分数UP
function min_up(){
    min += 1
    update()
}

// 分数DOWN
function min_down(){
    if (min > 0){
        min -= 1
        update()
    }
    else{
        ;
    }
}


// 秒数UP
function sec_up(){
    // 59以上の処理
    if (sec >= 59){
        min += 1
        sec = 0
        update()
    }
    else{
        sec += 1
        update()
    }
}

// 秒数DOWN
function sec_down(){
    // 0以下の処理
    if (sec <= 0){
        if (min > 0){
            min -= 1
            sec = 59
            update()
        }
        else{
            ;
        }
    }
    else{
        sec -= 1
        update()
    }
}


// カウント実行
async function time_start(){

    console.log("start")

    // 判定(START/STOP) - 0=開始前 1=開始
    if (sw == 0){
        sw = 1
        document.getElementById("start").setAttribute("value", "STOP")
        document.getElementById("start").style.backgroundColor = "#E14237";
    }
    else{
        sw = 0
        document.getElementById("start").setAttribute("value", "START")
        document.getElementById("start").style.backgroundColor = "#1ebe1e";
        document.getElementById("start").style.backgroundColor = "#1ebe1e";
        document.getElementById("start").setAttribute("disabled", true)
        await sleep(1)
        document.getElementById("start").removeAttribute("disabled")
    }

    while (true){

        // スイッチ判定
        if (sw == 0){
            break
        }
        else{
            ;
        }

        // 分の処理
        if (sec == 0){
            if (min > 0){
                min -= 1
                sec = 60
            }
            else{
                ;
            }
        }
        else{
            ;
        }

        // break処理
        if (sec <= 0){
            new Audio("alarm.wav").play();
            sw = 0
            document.getElementById("start").setAttribute("value", "START")
            document.getElementById("start").style.backgroundColor = "#1ebe1e";
            document.getElementById("start").setAttribute("disabled", true)
            await sleep(1)
            document.getElementById("start").removeAttribute("disabled")
            sec = 0
            update()
            break
        }
        else{
            await sleep(1)
            sec -= 1
            update()
        }
    }

    console.log("ok")
    
}

// C/https://github.com/Meziro039