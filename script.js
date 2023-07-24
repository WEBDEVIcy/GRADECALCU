
  function calculateGPA() {
    const english = Number(document.getElementById("english").value);
    const math = Number(document.getElementById("math").value);
    const science = Number(document.getElementById("science").value);
    const history = Number(document.getElementById("history").value);
    const art = Number(document.getElementById("art").value);
    const music = Number(document.getElementById("music").value);
    const pe = Number(document.getElementById("pe").value);
    const TLE = Number(document.getElementById("TLE").value);

  
    // Calculate average
    const grades = [english, math, science, history, art, music, pe, TLE];
    const sum = (english + math + science + history + art + music + pe + TLE);
    const ave = sum / grades.length;
  
    const separateEnglish = english.toFixed(2);
    const separateMath = math.toFixed(2);
    const separateScience = science.toFixed(2);
    const separateHistory = history.toFixed(2);
    const separateArt = art.toFixed(2);
    const separateMusic = music.toFixed(2);
    const separatePE = pe.toFixed(2);
    const separateTLE = TLE.toFixed(2);
  
    document.getElementById("englishOutput").textContent = separateEnglish;
    document.getElementById("mathOutput").textContent = separateMath;
    document.getElementById("scienceOutput").textContent = separateScience;
    document.getElementById("historyOutput").textContent = separateHistory;
    document.getElementById("artOutput").textContent = separateArt;
    document.getElementById("musicOutput").textContent = separateMusic;
    document.getElementById("peOutput").textContent = separatePE;
    document.getElementById("TLEOutput").textContent = separateTLE;


    // Determine status
  
    let englishStatus, mathStatus, scienceStatus, historyStatus, artStatus, musicStatus, peStatus, TLEStatus;
  
    if (english < 50 || english > 100) {
      englishStatus = "INVALID";
    } else if (english <= 68) {
      englishStatus = "FAILED";
    } else if (english <= 74) {
      englishStatus = "REMIDIAL";
    } else if (english <= 100) {
      englishStatus = "PASSED";
    }
  
    if (math < 50 || math > 100) {
      mathStatus = "INVALID";
    } else if (math <= 68) {
      mathStatus = "FAILED";
    } else if (math <= 74) {
      mathStatus = "REMIDIAL";
    } else if (math <= 100) {
      mathStatus = "PASSED";
    }
  
    if (science < 50 || science > 100) {
      scienceStatus = "INVALID";
    } else if (science <= 68) {
      scienceStatus = "FAILED";
    } else if (science <= 74) {
      scienceStatus = "REMIDIAL";
    } else if (science <= 100) {
      scienceStatus = "PASSED";
    }
  
    if (history < 50 || history > 100) {
      historyStatus = "INVALID";
    } else if (history <= 68) {
      historyStatus = "FAILED";
    } else if (history <= 74) {
      historyStatus = "REMIDIAL";
    } else if (history <= 100) {
      historyStatus = "PASSED";
    }
  
    if (art < 50 || art > 100) {
      artStatus = "INVALID";
    } else if
    (art <= 68) {
      artStatus = "FAILED";
      } else if (art <= 74) {
      artStatus = "REMIDIAL";
      } else if (art <= 100) {
      artStatus = "PASSED";
      }
      
      if (music < 50 || music > 100) {
      musicStatus = "INVALID";
      } else if (music <= 68) {
      musicStatus = "FAILED";
      } else if (music <= 74) {
      musicStatus = "REMIDIAL";
      } else if (music <= 100) {
      musicStatus = "PASSED";
      }
      
      if (pe < 50 || pe > 100) {
      peStatus = "INVALID";
      } else if (pe <= 68) {
      peStatus = "FAILED";
      } else if (pe <= 74) {
      peStatus = "REMIDIAL";
      } else if (pe <= 100) {
      peStatus = "PASSED";
      }
      
      if (TLE < 50 || TLE > 100) {
      TLEStatus = "INVALID";
      } else if (TLE <= 68) {
      TLEStatus = "FAILED";
      } else if (TLE <= 74) {
      TLEStatus = "REMIDIAL";
      } else if (TLE <= 100) {
      TLEStatus = "PASSED";
      }

      
      // status 
      document.getElementById("englishStatus").textContent = englishStatus;
      document.getElementById("mathStatus").textContent = mathStatus;
      document.getElementById("scienceStatus").textContent = scienceStatus;
      document.getElementById("historyStatus").textContent = historyStatus;
      document.getElementById("artStatus").textContent = artStatus;
      document.getElementById("musicStatus").textContent = musicStatus;
      document.getElementById("peStatus").textContent = peStatus;
      document.getElementById("TLEStatus").textContent = TLEStatus;
      
      
      

    
      document.getElementById("ave").textContent = ave.toFixed(2);
      document.getElementById("cardContainer").style.display = "block";
      
      if (ave >= 75 && ave <= 100) {
        result = "PASSED";
      } else if (ave >= 50 && ave < 75) {
        result = "FAILED";
      } else {
        result = "INVALID";
      }

      document.getElementById("result").textContent = result;

    }


      
      document.addEventListener('DOMContentLoaded', function () {
      const closeButton = document.querySelector('.close-button');
      const card = document.querySelector('#cardContainer');
      closeButton.addEventListener('click', function () {
      card.style.display = 'none';
      });
      });
      
      function refreshPage
      () {
      location.reload();
      }  



document.getElementById("inputname").addEventListener("submit", function(event) {
  event.preventDefault(); 
  document.getElementById("background").style.display = "none";

  // Redirect to another HTML document
  window.location.href = "index.html";
});


