const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table border=1>')
      res.write('<tr><th>Location</th><th>Number of hours</th><th>Estimated cost</th></tr>')
      res.write('<tr><td>South Island, New Zealand</td><td>7 Days</td><td>$100/day</td></tr>')  
      res.write('<tr><td>Paris</td><td>3-4 days</td><td>$150/day</td></tr>')  
      res.write('<tr><td>Bora Bora</td><td>5 days</td><td>$200/day</td></tr>')
      res.write('<tr><td>Glacier National Park</td><td>4 days</td><td>$100/day</td></tr>')
      res.end('</table></body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})