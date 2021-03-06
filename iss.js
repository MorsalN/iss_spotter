/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');
/* COMMENTED
 const URL1 = 'https://api.ipify.org?format=json';

 const fetchMyIP = function(callback) {
   
  // use request to fetch IP address from JSON API
  request(URL1, (error, response, body) => {

      // inside the request callback ...
  // error can be set if invalid domain, user is offline, etc.
  if (error) {
    callback(error, null);
    return;
  }
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }

  // if we get here, all's well and we got the data
    const ip = JSON.parse(body).ip;
      callback(null, ip)
  });
};


const fetchCoordsByIP = function(ip, callback) {
  const URL2 = `https://freegeoip.app/json/${ip}`;
    request(URL2, (error, response, body) => {

    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
      
      const {latitude, longitude} = JSON.parse(body);
      callback(null, {latitude, longitude});
  });

};

*/

const fetchISSFlyOverTimes = function(coordinates, callback) {
  const URL3 = 'https://iss-pass.herokuapp.com/json/?lat=49.27670&lon=-123.1300';

  request(URL3,(error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching risetime and duration. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const risetimeDuration = JSON.parse(body).response;
    // console.log(risetimeDuration);
    callback(null, risetimeDuration);

  });
};


// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };