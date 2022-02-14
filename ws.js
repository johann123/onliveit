const http = require("http");
const fs = require("fs")
const xmlFilesList = ['activities'];
http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const requestRoute = req.url.substring(1);
    if (xmlFilesList.includes(requestRoute)) {
        res.writeHead(200);
        try {
            const data = await fs.promises.readFile(`./public/xml/${requestRoute}.xml`, 'utf8');
            res.write(data);
        } catch (err) {
            console.error(err);
        }
    } else {
        res.writeHead(404);
    }
    res.end();
}).listen(3000, 'localhost', () => {
    console.log(`ws listening for incoming requests...`)
});
