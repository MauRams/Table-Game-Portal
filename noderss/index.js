
//REFERENCE HERE:: SOURCE CODE: https://www.npmjs.com/package/node-rss

module.exports = function(blogs){
        // this exposes two methods: createNewFeed and getFeedXML 
    var rss = require('node-rss');

    var feed = rss.createNewFeed('Avalable Games On site', 'https://table-game-portal-denamntm.c9users.io',
                                'Avalable games',
                                'Deniss Strods',
                                'https://table-game-portal-denamntm.c9users.io/getrss',
                                {'CustomTag' : 'Check it every Week!' });

    blogs.forEach(function (blog) {
        feed.addNewItem(blog.title, blog.url, blog.pubDate, blog.description, {});
    });
 
    // now to get the XML simply call the getFeedXML function 
    var xmlString = rss.getFeedXML(feed);

    //returning rss xml string...
    return xmlString;
}