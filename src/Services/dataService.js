const catalog = [
    {
        title: "Tumble-Pigweed",
        sciName: "Amaranthus Albus",
        price: 11,
        category: "tumbleweed",
        image: "tumble-pigweed.jpg",
        ref: "forestryimages.org",
    },
    {
        title: "Maryam's flower",
        sciName: "Anastatica",
        price: 22,
        category: "tumbleweed",
        image: "anastatica.jpg",
        ref: "powo.science.kew.org",
    },
    {
        title: "Burning-Bush",
        sciName: "Bassia Scoparia",
        price: 33,
        category: "tumbleweed",
        image: "burning-bush.jpg",
        ref: "flower-db.com",
    },
    {
        title: "Russian Thistle",
        sciName: "Salsola Kali",
        price: 44,
        category: "tumbleweed",
        image: "russian-thistle.jpg",
        ref: "crops.extension.iastate.edu",
    },
    {
        title: "Prickly Pear",
        sciName: "Opuntia",
        price: 55,
        category: "cacti",
        image: "prickly-pear.jpeg",
        ref: "fischerscoop/Getty Images",
    },
    {
        title: "Blue Agave",
        sciName: "Agave Tequilana",
        price: 66,
        category: "succulent",
        image: "blue-agave.jpeg",
        ref: "https://www.agaveville.org/",
    },
    {
        title: "Aloe-Vera",
        sciName: "Aloe Barbadensis Miller",
        price: 77,
        category: "succulent",
        image: "aloe-vera.jpg",
        ref: "almanac.com",
    },
    {
        title: "Sonora Barrel",
        sciName: "Ferocactus Echidne",
        price: 88,
        category: "cacti",
        image: "ferocactus_echidne.jpg",
        ref: "Photo by: Valentino Vallicelli",
    },
];

class DataService {
    getCatalog() {
        return catalog;
    }
}

export default DataService; 
