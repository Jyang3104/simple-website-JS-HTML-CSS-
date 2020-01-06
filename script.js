/** store all item info data into variable */
window.itemsData = [
    {
        country: "Argentina",
        pic: "argentina.jpg",
        continent: "southamerica",
        oldPrice: 799,
        price: 599,
        duration: "4 days and 3 nights",
        description: "A country of romance: glacier, tango and wine!"
    },
    {
        country: "Australia",
        pic: "australia.jpg",
        continent: "oceania",
        oldPrice: 999,
        price: 829,
        duration: "5 days and 4 nights",
        description: "Enjoy your Chrismas in summer & Play with wild animals!"
    },
    {
        country: "Austria",
        pic: "austria.jpg",
        continent: "europe",
        oldPrice: 1299,
        price: 899,
        duration: "7 days and 6 nights",
        description: "Splendour scenery, peaceful ancient towns, music and art"
    },
    {
        country: "Brazil",
        pic: "brazil.jpg",
        continent: "southamerica",
        oldPrice: 799,
        price: 529,
        duration: "4 days and 3 nights",
        description: "Festival, Samba and beautiful sunshine!"
    },
    {
        country: "China",
        pic: "china.jpg",
        continent: "asia",
        oldPrice: 999,
        price: 849,
        duration: "7 days and 6 nights",
        description:
            "Discover the myth of thousands years culture, a tour of acient and modern China!"
    },
    {
        country: "Egypt",
        pic: "egypt.jpg",
        continent: "africa",
        oldPrice: 899,
        price: 749,
        duration: "6 days and 5 nights",
        description:
            "Sailing on Nile, whisper in the wind and sand of great acient empire."
    },
    {
        country: "France",
        pic: "france.jpg",
        continent: "europe",
        oldPrice: 1399,
        price: 1099,
        duration: "7 days and 6 nights",
        description:
            "Louvre, Palais de Versailles and Eiffel Tower, the great cultural treasure of the world!"
    },
    {
        country: "Italy",
        pic: "italy.jpg",
        continent: "europe",
        oldPrice: 1299,
        price: 949,
        duration: "7 days and 6 nights",
        description: "From Venice to Sicilia, experience a brand new Italy!"
    },
    {
        country: "Japan",
        pic: "japan.jpg",
        continent: "asia",
        oldPrice: 1099,
        price: 899,
        duration: "7 days and 6 nights",
        description:
            "A tour of tranditional Japanese culture and latest amusemet!"
    },
    {
        country: "New Zealand",
        pic: "newzealand.jpg",
        continent: "oceania",
        oldPrice: 999,
        price: 799,
        duration: "6 days and 5 nights",
        description: "An exquisite scenery you have never seen!"
    },
    {
        country: "Russia",
        pic: "russia.jpg",
        continent: "europe",
        oldPrice: 999,
        price: 899,
        duration: "7 days and 6 nights",
        description: "Cold winter but unforgettable trip."
    },
    {
        country: "Singapore",
        pic: "singapore.jpg",
        continent: "asia",
        oldPrice: 999,
        price: 799,
        duration: "6 days and 5 nights",
        description:
            "Trapical zoo, Night safari, Jurong bird park and River safari!"
    },
    {
        country: "South Africa",
        pic: "southafrica.jpg",
        continent: "africa",
        oldPrice: 899,
        price: 729,
        duration: "6 days and 5 nights",
        description:
            "A journey with wild life and explore the secrets of diamond!"
    }
];

var getItems = {
    all: window.itemsData,
    area: "all",
    /**
     * get required data by continent
     */
    getByContinent: function(continent) {
        var countries = this.all;
        var newCountry = countries.filter(
            country => country.continent === continent
        );
        return newCountry;
    },
    /**
     * sort objects by price
     */
    sortByPrice: function() {
        var countries;
        if (this.area === "all") {
            countries = JSON.parse(JSON.stringify(this.all));
        } else {
            countries = this.getByContinent(this.area);
        }

        countries.sort(function(a, b) {
            return a.price - b.price;
        });
        return countries;
    },
    /**
     * sort objects by the name of country
     */
    sortByDestination: function() {
        var countries;
        if (this.area === "all") {
            countries = JSON.parse(JSON.stringify(this.all));
        } else {
            countries = this.getByContinent(this.area);
        }
        countries.sort(function(a) {
            return a.country;
        });
        return countries;
    }
};

var displayItems = {
    /**
     * clear the page
     */
    clearList: function() {
        var contents = document.querySelector("#display");
        contents.innerHTML = "";
    },
    /**
     * add the image element for each item
     * @param {string} contryPic 
     */
    getPic: function(contryPic) {
        var pic = document.createElement("img");
        pic.src = "images/" + contryPic;
        pic.classList.add("pics");
        return pic;
    },
    /**
     * create an item element which includes picture, name description...
     * @param {obj} country 
     */
    displayOneItem: function(country) {
        var oneItem = document.createElement("div");
        oneItem.classList.add("oneItem");
        var pic = this.getPic(country.pic);
        oneItem.appendChild(pic);
        var text = document.createElement("div");
        text.classList.add("info");

        var name = document.createElement("div");
        name.classList.add("cName");
        name.innerHTML = country.country;
        text.appendChild(name);

        var dura = document.createElement("div");
        dura.classList.add("duration");
        dura.innerHTML = country.duration;
        text.appendChild(dura);

        var descri = document.createElement("div");
        descri.classList.add("description");
        descri.innerHTML = country.description;
        text.appendChild(descri);

        var oP = document.createElement("div");
        oP.classList.add("oPrice");
        oP.innerHTML = "CAD " + country.oldPrice;
        text.appendChild(oP);

        var nP = document.createElement("div");
        nP.classList.add("price");
        nP.innerHTML = "CAD " + country.price;
        text.appendChild(nP);

        oneItem.appendChild(text);
        return oneItem;
    },
    /**
     * create a list to display all items
     * @param {obj} countries 
     */
    displayAll: function(countries) {
        if (document.querySelector("#display") !== null) {
            this.clearList();
        }

        for (var country of countries) {
            var oneItem = this.displayOneItem(country);
            document.querySelector("#display").appendChild(oneItem);
        }
    },
    /**
     * Change the background to show which category is selected 
     * @param {string} continent 
     */
    changeBackground: function(continent) {
        var clearEle = document.querySelector(".selected");
        console.log(clearEle);
        clearEle.classList.remove("selected");

        var addCss = document.getElementById(continent);
        addCss.classList.add("selected");
    }
};
/**
 * display the contents when category is selected
 */
function setUpitems() {
    var def = getItems.all;
    getItems.area = "all";
    displayItems.displayAll(def);
    document.getElementById("all").classList.add("selected");

    document.querySelector("#africa").onclick = function() {
        var list = getItems.getByContinent("africa");
        getItems.area = "africa";
        displayItems.displayAll(list);
        displayItems.changeBackground("africa");
    };
    document.querySelector("#asia").onclick = function() {
        var list = getItems.getByContinent("asia");
        getItems.area = "asia";
        displayItems.displayAll(list);
        displayItems.changeBackground("asia");
    };
    document.querySelector("#europe").onclick = function() {
        var list = getItems.getByContinent("europe");
        getItems.area = "europe";
        displayItems.displayAll(list);
        displayItems.changeBackground("europe");
    };
    document.querySelector("#oceania").onclick = function() {
        var list = getItems.getByContinent("oceania");
        getItems.area = "oceania";
        displayItems.displayAll(list);
        displayItems.changeBackground("oceania");
    };
    document.querySelector("#southamerica").onclick = function() {
        var list = getItems.getByContinent("southamerica");
        getItems.area = "southamerica";
        displayItems.displayAll(list);
        displayItems.changeBackground("southamerica");
    };
    document.querySelector("#all").onclick = function() {
        var list = getItems.all;
        getItems.area = "all";
        displayItems.displayAll(list);
        displayItems.changeBackground("all");
    };
    /**
     * sort items
     */
    document.querySelector("#a-z").onclick = function() {
        var list = getItems.sortByDestination();
        displayItems.displayAll(list);
    };
    document.querySelector("#lowPrice").onclick = function() {
        var list = getItems.sortByPrice();
        displayItems.displayAll(list);
    };
    /**
     * click arrow picture to scroll to next half page 
     */
    document.querySelector("#pageDown").onclick = function() {
        window.scrollTo({
            top: 580,
            behavior: "smooth"
        });
    };
}
window.onload = setUpitems;
