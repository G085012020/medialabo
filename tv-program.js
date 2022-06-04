let b = document.querySelector('#kensaku');
b.addEventListener('click', kensaku);

// 通信を開始する処理
function kensaku() {
  
	// URL を設定
  let service=document.querySelectorAll('input[name="service"]');
  let key1;
  for(let s of service){
    if(s.checked){
      key1=s.value;
    }
  }
  let table = document.querySelector('div#placeholder')
  let genres=document.querySelectorAll('input[name="genres"]');
  let key2;
  for(let g of genres){
    if(g.checked){
      key2=g.value;
    }
  }
	let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+key1+'-'+key2+'-j.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);
//表
  let service=document.querySelectorAll('input[name="service"]');
  let key1;
  for(let s of service){
    if(s.checked){
      key1=s.value;
    }
  }


  let table = document.querySelector('div#placeholder')
  

  if(key1=="g1"){
    for(let i=0;i<data.list.g1.length;i++){
      
      let title = document.createElement('th');
      title.textContent=data.list.g1[i].title;
      let subtitle = document.createElement('th');
      subtitle.textContent=data.list.g1[i].subtitle;
      let content = document.createElement('th');
      content.textContent=data.list.g1[i].content;

      let d = document.createElement('table');
      d.classList.add('table');
      d.insertAdjacentElement('beforeend', title);
      d.insertAdjacentElement('beforeend', subtitle);
      d.insertAdjacentElement('beforeend', content);

      table.insertAdjacentElement('afterend',d);
  }
}
  else if(key1=="e1"){
    for(let i=0;i<data.list.e1.length;i++){
      
      let title = document.createElement('th');
      title.textContent=data.list.e1[i].title;
      let subtitle = document.createElement('th');
      subtitle.textContent=data.list.e1[i].subtitle;
      let content = document.createElement('th');
      content.textContent=data.list.e1[i].content;

      let d = document.createElement('table');
      d.classList.add('table');
      d.insertAdjacentElement('beforeend', title);
      d.insertAdjacentElement('beforeend', subtitle);
      d.insertAdjacentElement('beforeend', content);

      table.insertAdjacentElement('afterend', d);
  }
}
}
// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
  let table = document.querySelector('div#placeholder')
  let title = document.createElement('th');
  title.textContent="検索結果がありませんでした";
  let subtitle = document.createElement('th');
  subtitle.textContent="検索結果がありませんでした";
  let content = document.createElement('th');
  content.textContent="検索結果がありませんでした";

  let d = document.createElement('table');
  d.classList.add('table');
  d.insertAdjacentElement('beforeend', title);
  d.insertAdjacentElement('beforeend', subtitle);
  d.insertAdjacentElement('beforeend', content);

  table.insertAdjacentElement('afterend', d);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

/////////////////// 課題3-2 はここから書き始めよう

/*for(d of data){
  console.log(d.title+"/"+d.start_time+"/"+d.end_time);
  let t = document.querySelector('span#title');
    t.textContent=d.title;
  let s = document.querySelector('span#start');
    s.textContent=d.start_time;
  let e = document.querySelector('span#end');
    e.textContent=d.end_time;
}*/

