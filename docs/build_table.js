let website_links = [
  {title: "DeepL", link: "https://www.deepl.com/translator"},
  {title: "FDN", link: "https://www.fdn.fr/services/acces-internet/"},
  {title: "Sci-Hub", link: "https://sci-hub.now.sh"},
  {title: "Z Lib", link: "https://z-lib.org/"},
  {title: "LibGen", link: "http://libgen.rs/"}
];

function switchiframe(element) {
    document.getElementById("main").src=element.name;
}

function e() {
  console.log('test');
}

function generateTable(table, data_array) {
  data_array.forEach(data => {
    let row = table.insertRow();
    let txt_cell = row.insertCell();
    let btn_cell = row.insertCell();
    let txt = document.createTextNode(data['title']);
    let input = document.createElement("input");
    input.type = "button";
    input.name = data["link"];
    input.value = data["title"];
    input.onload = e();
    txt_cell.appendChild(txt);
    btn_cell.appendChild(input);
  })
}

let table = document.querySelector("table");
generateTable(table, website_links);

/*
function generateTables() {
  let website_links_parsed = website_links.map(function(o) {
    return o;
  });
}
*/
