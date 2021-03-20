function openTab(evt, TabN) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("unj-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("unj-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabN).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openNav() {
    document.getElementsByClassName(".unj-sidebar ").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementsByClassName(".unj-sidebar ").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
