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

function generateTable(table, data) {
  data.forEach(element => {
    let row = table.insertRow();
    let cell = row.insertCell();
    let txt = document.createTextNode(element['title']);
    let input = document.createElement("input");
    console.log(element.key)
    input.type = "button";
    input.name = element["link"];
    input.value = element["title"];
    input.onclick = "switchiframe(this)";
    cell.appendChild(txt);
    cell.appendChild(input);
  }
  )
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
