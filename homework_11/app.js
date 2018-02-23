var rootNode = document.getElementById("root");

function createTree(data) {
    var result = "";
    for (var key in data) {
        if (typeof(data[key]) == 'object' && data[key] != null) {
            if(key == "children"){
                result += `<ul style="display: none">`;
                result +=  createTree(data[key]);
                result += "</ul></li>";
            }
            else {
                result +=  createTree(data[key]);
            }
        }
        else if(key == "folder" && data[key] === true) {
            if(data["children"] === false || data["children"] === null) {
                result += `<li><a href="#"><i class="material-icons orange">folder</i>${data["title"]}</a>
                <ul class="empty" style="display: none"><li>Folder is empty</li></ul></li>`;
            }
            else {
                result += `<li><a href="#"><i class="material-icons orange">folder</i>${data["title"]}</a>`;
            }
        }
        else if( key=="title" && data['folder'] !== true ) {
            result +=`<li><a href="#"><i class="material-icons grey">insert_drive_file</i>${data[key]}</a></li>`;
        }
    }
    return result;
}

var list = document.createElement('ul');
list.innerHTML = createTree(structure);

rootNode.appendChild(list);

var a = rootNode.querySelectorAll("a");

for (var i=0; i< a.length; i++) {
	a[i].onclick = function() {
        if(this.nextElementSibling) {
            if(this.nextElementSibling.tagName == "UL"){
                if(this.nextElementSibling.style.display == "block") {
                    this.nextElementSibling.style.display = "none";
                    this.querySelector("i").innerText = "folder";
                }
                else {
                    this.nextElementSibling.style.display = "block";
                    this.querySelector("i").innerText = "folder_open";
                }
            }
        }
    }
}


