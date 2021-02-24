let website_links = [
  {title: 'FDN', link: 'https://www.fdn.fr/services/acces-internet/'},
  {title: 'Sci-Hub', link: 'https://sci-hub.now.sh'},
  {title: 'Z Lib', link: 'https://z-lib.org/'},
  {title: 'LibGen', link: 'http://libgen.rs/'},
  {title: 'Un monde meilleur', link:'https://abw.blue/index.php'}
];

function switchiframe(element) {
    function close_nav() {
      console.log('loaded: ', element.value);
      document.getElementById('menu').style.display='grid';
  }
  document.getElementById('main').src = element.name;
  document.getElementById('main').addEventListener('load', close_nav);
}

function generateTable(table, data_array) {
  data_array.forEach(data => {
    let row = table.insertRow();
    let txt_cell = row.insertCell();
    let btn_cell = row.insertCell();
    let title = document.createTextNode(data['title']);
    let input = document.createElement('input');
    input.type = 'button';
    input.name = data['link'];
    input.value = data['title'];
    input.addEventListener('click', function(){
      switchiframe(this);
    });
    txt_cell.appendChild(title);
    btn_cell.appendChild(input);
  })
}

let table = document.querySelector("table");
generateTable(table, website_links);
