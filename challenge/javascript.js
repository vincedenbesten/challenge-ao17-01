$(document).ready(function () {
  $("#bannerjobs > div:gt(0)").hide();

  setInterval(function() {
    $('#bannerjobs > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#bannerjobs');
  }, 3000);
});

/*var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("bannerjobs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("bannerjobs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


/*for (var i=0; i<Infinity; i++) {
    a = 1;
    if (a == 1) {
      document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner3.jpg)";
      a++;
    } if (a == 2) {
        document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner2.jpg)";
        a = 1;
      }
    setTimeout(myfunction, 2000);
  }



function myFunction() {
    for (var i=0; i<Infinity; i++) {
          if (i=2) {
             document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner2.jpg)";
        } else if (i=3) {
             document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner3.jpg)";
        } else {
             document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner3.jpg)";
        }
    }
}

function head() {
for (head = 0; head < 3; head++) {
    i++;
    if (head == 3) {
        head = 0;
    }
    setTimeout(head, 2000);
}

myFunction = function(){
  a = 1
    for (var i=2; i>0; i++) {
        if (a=2) {
            document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(../img/jobs-banner2.jpg)";
        }if (a=3) {
            document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(../img/jobs-banner3.jpg)";
        } else {
            document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(../img/jobs-banner3.jpg)";
        }
        head = function(){
            for (head = 0; head < 3; head++) {
                a + 1;
                if (head == 3) {
                    head = 2;
                }
                setTimeout(head, 2000);
            }
        }
    }
}

myFunction = function(){
    for (var i=0; i<Infinity; i++) {
        if (i=2) {
            document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner2.jpg)";
        }if (i=3) {
            document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner3.jpg)";
        } else {
            document.getElementsByClassName("bannerjobs").style.backgroundImage = "url(img/jobs-banner3.jpg)";
        }
    }
}

head = function(){
    for (head = 0; head < 3; head++) {
        i + 1;
        if (head == 3) {
            head = 0;
        }
        setTimeout(head, 2000);
    }
}

myFunction = function(){
    for (var i=0; i<Infinity; i++) {
        if (i=2) {
            document.getElementsByClassName(bannerjobs).style.backgroundimage = "url(img/jobs-banner2.jpg)";
        }if (i=3) {
            document.getElementsByClassName(bannerjobs).style.backgroundimage = "url(img/jobs-banner3.jpg)";
        } else {
            document.getElementsByClassName(bannerjobs).style.backgroundimage = "url(img/jobs-banner3.jpg)";
        }
    }
}

head = function(){
    for (head = 0; head < 3; head++) {
        i + 1;
        if (head == 3) {
            head = 0;
        }
        setTimeout(head, 2000);
    }
}*/
