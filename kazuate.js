// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用
let k = document.querySelector('span#kaisu');
k.textContent=1;

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b=document.querySelector("#kaito");
b.addEventListener("click",hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yos = document.querySelector("input[name='yoso']");       // 第5回課題:テキストボックスの数値をここに代入
    let yoso=yos.value;
    yoso=Math.floor(yoso);
    let k = document.querySelector('span#kaisu');
    k.textContent=kaisu+1;
    let y = document.querySelector('span#yoso');
    y.textContent=yoso;
    if(kaisu>=3 ){
        let h=document.querySelector("div#hentou");
        h.textContent=("答えは"+kotae+"でした.すでにゲームは終わっています");
    }
    else if(kotae===yoso){
        let h=document.querySelector("div#hentou");
        h.textContent=("正解です.おめでとう!");
        kaisu=kaisu+1;
    }
    else if(kotae<yoso){
        let h=document.querySelector("div#hentou");
        h.textContent=("まちがい.答えはもっと小さいですよ");
        kaisu=kaisu+1;
    }
    else if(kotae>yoso){
        let h=document.querySelector("div#hentou");
        h.textContent=("まちがい.答えはもっと大きいですよ");
        kaisu=kaisu+1;
    }
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

}