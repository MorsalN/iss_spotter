const request = require('request-promise-native');

const URL1 = 'https://api.ipify.org?format=json';
const fetchMyIP = function() {
  return request(URL1);
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  const URL2 = `https://freegeoip.app/json/${ip}`;
  console.log(ip);
  return request(URL2);
};

const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response;
  });
};

module.exports = {nextISSTimesForMyLocation};