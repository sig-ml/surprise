document.getElementById('1').classList.remove("super_hide");
var i = 1;
var time = 3000;
var string1 = i + 'n';
var string = '#' + i;
var string2 = '#' + i + 'n';
function randomNum() {
  return (Math.floor((Math.random() * 5) + 1)*1000)
}
function hideNames() {
  //task
  var string = '#' + i;
  //current task name
  var string1 = i + 'n';
  //previous task name
  var string2 = (i-1) + 'n';
  if ($(string).hasClass("super_hide")) {
      // document.getElementById(string1).classList.add("super_hide");
  } else {
      document.getElementById(string2).classList.add("super_hide");
  }
}
function showNames() {
    //task
    var string = '#' + i;
    //current task name
    var string1 = i + 'n';
    //previous task name
    var string2 = (i-1) + 'n';
    console.log("String:"+string);
    console.log("String1:"+string1);
    if ($(string).hasClass("super_hide")) {
      console.log(i);
        // document.getElementById(string1).classList.add("super_hide");
    } else {
        document.getElementById(string1).classList.remove("super_hide");
        document.getElementById(string2).classList.add("super_hide");
    }
}
function hideLoading() {
  document.getElementById('preloader').classList.remove("active");
}
function showLoading() {
  document.getElementById('preloader').classList.add("active");
}
function hideNames2() {
  //task
  var string = '#' + i;
  //current task name
  var string1 = i + 'n';
  //previous task name
  var string2 = (i+1) + 'n';

  if ($(string).hasClass("super_hide")) {
      // document.getElementById(string1).classList.add("super_hide");
  } else {
      document.getElementById(string2).classList.add("super_hide");
  }
}
function showNames2() {
    //task
    var string = '#' + i;
    //current task name
    var string1 = i + 'n';
    //previous task name
    var string2 = (i+1) + 'n';

    if ($(string).hasClass("super_hide")) {
      console.log(i);
        // document.getElementById(string1).classList.add("super_hide");
    } else {
        document.getElementById(string1).classList.remove("super_hide");
        document.getElementById(string2).classList.add("super_hide");
    }
}
time = randomNum();
setTimeout(hideLoading,time);
setTimeout(showNames,time);


function nextPage() {
    if (i == 40) {
        window.location = "index5.html"
    }
}

function previousPage() {
    if (i == 0) {
        window.location = "index3.html"
    }
}

function increment() {
  document.getElementById('preloader').classList.add("active");
    document.getElementById(i).classList.add("super_hide");
    i = i + 1;
    document.getElementById(i).classList.remove("super_hide");
    hideNames();
    time = randomNum();
    setTimeout(hideLoading,time);
    setTimeout(showNames,time);
    nextPage()
}

function decrement() {
    showLoading();
    document.getElementById(i).classList.add("super_hide");
    console.log(i);
    i = i - 1;
    if (i > 1) {
        document.getElementById(i).classList.remove("super_hide");
        hideNames2();
        time = randomNum();
        setTimeout(hideLoading,time);
        setTimeout(showNames2,time)
    }
    previousPage()
}
