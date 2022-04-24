//TODO: submit result : failure/ set, map 공부 후 다시 풀기.

var UndergroundSystem = function () {
  this.passengerTimeObj = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.passengerTimeObj[id] = { checkinStationName: stationName, checkinTime: t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  this.passengerTimeObj[id] = { ...this.passengerTimeObj[id], checkoutStationName: stationName, checkoutTime: t };
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  let obj = this.passengerTimeObj;
  let passengerCount = 0;
  let sum = 0;

  for (let i in obj) {
    if (obj[i].checkinStationName === startStation && obj[i].checkoutStationName === endStation) {
      sum += obj[i].checkoutTime - obj[i].checkinTime;
      passengerCount++;
    }
  }
  return sum / passengerCount;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
