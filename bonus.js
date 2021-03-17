const http = require('http')    //Pull in a useful node package

                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      console.log("Request recieved")
      console.log(req.url)
      // Build a fake url so we can get the search parameters using a URL object
      fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)

      if (req.method === 'GET' ) {

          // Process the queries here
          const advices = ["Take time to know yourself",
          "A narrow focus brings big results.",
          "Show up fully.",
          "Don't make assumptions",
          " Be patient and persistent.",
          " In order to get,you have to give.",
          "Luck comes from hard work.",
          ]
          let randomIndex = Math.floor(Math.random() * advices.length)
          // Process the queries here
          res.statusCode = 200      //code for OK
          res.setHeader('Content-Type', 'text/plain')
          res.write(`${advices[randomIndex]}`)
          res.end();
      } else {
        console.log("Status 404")
        res.statusCode = 404;
        res.end();
      }

    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})