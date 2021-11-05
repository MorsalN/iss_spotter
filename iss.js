/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

 const request = require('request');
 const URL1 = 'https://api.ipify.org?format=json';

 const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request(URL1, (error, response, body) => {

    const data = JSON.parse(body);
    console.log('data: ', data);
    console.log(typeof data);
    const ipArray = Object.values(data);
    const ipAddress = ipArray[0]

    if (ipAddress) {
      callback(null, ipAddress)
    } else {
      callback(err, null);
    }  
  });
}

module.exports = { fetchMyIP };