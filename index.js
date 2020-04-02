if (window.location.hostname == 'www.decathlon.pl' && document.URL.includes('id_8381582')) {
  let libelle = document.getElementsByClassName("libelle-anchor");
  const colorTitle = (li) => li.forEach(l => l.style.color = "#FF0000")
  colorTitle(libelle);
  let contentBar = document.getElementsByClassName("PSContentZone")[0];
  let child = contentBar.lastElementChild;
  while (child) {
    contentBar.removeChild(child);
    child = contentBar.lastElementChild;
  }
  contentBar.innerHTML = "<style>.PSContentZone__title {padding:5px 0;color: #242323;font-size: 20px;letter-spacing: -.5px;font-weight: 400;} .PSContentZone__timer {padding:5px 0;color: #0082c3;font-size: 15px;letter-spacing: -.5px;font-weight: 400;}</style>"
  let newDivTitle = null;
  let newDivTimer = null;
  newDivTitle = document.createElement("div");
  newDivTitle.setAttribute('class', 'PSContentZone__title')
  newDivTitle.innerHTML = "Do dnia dziecka zostało:";
  newDivTimer = document.createElement("div");
  newDivTimer.setAttribute('class', 'PSContentZone__timer');
  newDivTimer.innerHTML = "<span id='timerDD'></span>";
  contentBar.append(newDivTitle, newDivTimer);
  contentBar.style.padding = '15px 0';

  function isMobile() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  if (isMobile() == true) {
    contentBar.style.textAlign = 'center';
  } else {
    contentBar.style.textAlign = 'justify';
  }



  let countDownDate = new Date("June 1, 2020 00:00:00").getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timerDD").innerHTML = `${days} dni, ${hours.toString().padStart(2, "0")} godzin, ${minutes.toString().padStart(2, "0")} minut, ${seconds.toString().padStart(2, "0")} sekund`
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timerDD").innerHTML = "Koniec odliczania!";
    }
  }, 1000);
}