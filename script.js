/* Add any JavaScript you need to this file. */

function f_aboutUs() {
  document.getElementById('aboutUs').style.display = 'block';
  document.getElementById('applePhone').style.display = 'none';
  document.getElementById('huaweiPhone').style.display = 'none';
  document.getElementById('samsungPhone').style.display = 'none';
  document.getElementById('motoPhone').style.display = 'none';
  document.getElementById('lgPhone').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
}

function f_allProducts() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'flex';
  document.getElementById('huaweiPhone').style.display = 'flex';
  document.getElementById('samsungPhone').style.display = 'flex';
  document.getElementById('motoPhone').style.display = 'flex';
  document.getElementById('lgPhone').style.display = 'flex';
  document.getElementById('footer').style.display = 'none';
}

function f_apple() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'flex';
  document.getElementById('huaweiPhone').style.display = 'none';
  document.getElementById('samsungPhone').style.display = 'none';
  document.getElementById('motoPhone').style.display = 'none';
  document.getElementById('lgPhone').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
}

function f_huawei() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'none';
  document.getElementById('huaweiPhone').style.display = 'flex';
  document.getElementById('samsungPhone').style.display = 'none';
  document.getElementById('motoPhone').style.display = 'none';
  document.getElementById('lgPhone').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
}

function f_samsung() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'none';
  document.getElementById('huaweiPhone').style.display = 'none';
  document.getElementById('samsungPhone').style.display = 'flex';
  document.getElementById('motoPhone').style.display = 'none';
  document.getElementById('lgPhone').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
}

function f_motorola() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'none';
  document.getElementById('huaweiPhone').style.display = 'none';
  document.getElementById('samsungPhone').style.display = 'none';
  document.getElementById('motoPhone').style.display = 'flex';
  document.getElementById('lgPhone').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
}

function f_lg() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'none';
  document.getElementById('huaweiPhone').style.display = 'none';
  document.getElementById('samsungPhone').style.display = 'none';
  document.getElementById('motoPhone').style.display = 'none';
  document.getElementById('lgPhone').style.display = 'flex';
  document.getElementById('footer').style.display = 'none';
}

function f_follow() {
  document.getElementById('aboutUs').style.display = 'none';
  document.getElementById('applePhone').style.display = 'none';
  document.getElementById('huaweiPhone').style.display = 'none';
  document.getElementById('samsungPhone').style.display = 'none';
  document.getElementById('motoPhone').style.display = 'none';
  document.getElementById('lgPhone').style.display = 'none';
  document.getElementById('footer').style.display = 'space-around';
}
