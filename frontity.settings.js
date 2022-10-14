const settings = {
  "name": "trial",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-first-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Hola",
              "/category/hola-category/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:8888/Omnia/Fontity/wordpress-6.0.2/wordpress/index.php/wp-json/",
          //previously "url":""
          //"url": "http://localhost:8888/Omnia/Fontity/wordpress-6.0.2/wordpress/index.php/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
