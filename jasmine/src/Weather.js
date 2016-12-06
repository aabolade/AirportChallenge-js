function Weather() {

}

Weather.prototype.stormy = function() {
  if (Math.random(1) > 0.3) {
    return false;
  } else {
    return true;
  }
}
