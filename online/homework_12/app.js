var root = document.getElementById("root");

//first load
makeHashContent();
window.onhashchange = makeHashContent;

function makeHashContent() {
    if (window.location.hash === "") {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        root.appendChild(makeThumbnails(tanks));
        return;
    }
    else {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        var modelTank = window.location.hash.slice(1).replace(/_/g, " ");
        var currentTank = tanks.find(function(element) {
            return element.model === modelTank;
        })
        root.appendChild(makeDetails(currentTank));
        return;
    }
}


function makeThumbnails(tanks) {
    var thumbnails = document.createElement("div");
    thumbnails.classList.add("thumbnails");

        var header = document.createElement("h1");
        header.classList.add("title");
        header.innerText = "Most popular tanks";

        var tankList = document.createElement("div");
        tankList.classList.add("tanks-list");

        for(var i = 0; i < tanks.length; i++) {
            var thumbnailLink = document.createElement("a");
            thumbnailLink.href = `#${tanks[i].model.replace(/\s/g, "_")}`;
            thumbnailLink.title = "Click to details";
            //a href
                /* link start */
                var thumbnailDiv = document.createElement("div");
                
                    /* div start */
                    var thumbnailLogo = document.createElement("img");
                    thumbnailLogo.src = tanks[i].preview;
                    thumbnailLogo.classList.add("logo-tank-list");

                    var titleBlock = document.createElement("div");
                    titleBlock.classList.add("title-tank-list");

                        /* block start*/
                        var countryImage = document.createElement("img");
                        countryImage.src = tanks[i].country_image;
                        countryImage.classList.add("country-tank-list");
                        countryImage.title = tanks[i].country.toUpperCase();

                        var levelTitle = document.createElement("h3");
                        levelTitle.classList.add("level-tank-list");
                        levelTitle.innerText = tanks[i].level;

                        var modelTitle = document.createElement("h3");
                        modelTitle.classList.add("name-tank-list");
                        modelTitle.innerText = tanks[i].model;
                        modelTitle.title = tanks[i].model.toUpperCase();
                        
                    //add to parent
                    titleBlock.appendChild(countryImage);
                    titleBlock.appendChild(levelTitle);
                    titleBlock.appendChild(modelTitle);
                    /* block end*/

                //add to parent
                thumbnailDiv.appendChild(thumbnailLogo);
                thumbnailDiv.appendChild(titleBlock);
                /*div end */

            //add to parent
            thumbnailLink.appendChild(thumbnailDiv);
            /* link end*/

            //add to parent - to tanks-list
            tankList.appendChild(thumbnailLink);
        }


    //add to parent - to thumbnails
    thumbnails.appendChild(header);
    thumbnails.appendChild(tankList);

    return thumbnails;
}

//Preview 

function makeDetails(currentTank) {
    var tankDetails = document.createElement("div");
    tankDetails.classList.add("tank-details");

        var header = document.createElement("h1");
        header.classList.add("title");

            var headerCountry = document.createElement("img");
            headerCountry.src = currentTank.country_image;
            headerCountry.classList.add("title-country");
            headerCountry.title = currentTank.country.toUpperCase();

            var headerText = document.createTextNode(`${currentTank.model.toUpperCase()} (level ${currentTank.level})`);

        //add to parent - to header
        header.appendChild(headerCountry);
        header.appendChild(headerText);


        var details = document.createElement("div");
        details.classList.add("details-flex");

            var preview = document.createElement("div");
            preview.classList.add("preview");

                var headerPreview = document.createElement("h2");
                headerPreview.innerText = "Preview";

                var previewImage = document.createElement("img");
                previewImage.src = currentTank.preview;
                previewImage.classList.add("preview-image");

            //add to parent - to preview
            preview.appendChild(headerPreview);
            preview.appendChild(previewImage);

            var characteristic = document.createElement("div");
            characteristic.classList.add("characteristic");

                var headerCharacteristic = document.createElement("h2");
                headerCharacteristic.innerText = "Characteristic";

                var tableCharacteristic = document.createElement("table");

                for(var key in currentTank.details) {
                    var tableTr = document.createElement("tr");

                        var tableTdName = document.createElement("td");
                        tableTdName.innerText = key.replace(/_/g, " ");

                        var tableTdValue = document.createElement("td");
                        tableTdValue.innerText = currentTank.details[key];

                    //add to parent - to tr
                    tableTr.appendChild(tableTdName);
                    tableTr.appendChild(tableTdValue);

                    //add to parent - to table
                    tableCharacteristic.appendChild(tableTr);
                }

            //add to parent - to characteristic
            characteristic.appendChild(headerCharacteristic);
            characteristic.appendChild(tableCharacteristic);

        //add to parent - to details
        details.appendChild(preview);
        details.appendChild(characteristic);

        var backButton = document.createElement("a");
        backButton.href = "#"; //hz chy kanae
        backButton.classList.add("preview-back");
        backButton.innerText = "Back to the view";

    //add to parent - to tankdetails
    tankDetails.appendChild(header);
    tankDetails.appendChild(details);
    tankDetails.appendChild(document.createElement("br"));
    tankDetails.appendChild(backButton);

    return tankDetails;
}