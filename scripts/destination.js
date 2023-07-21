function choosePlanet(event, planetName) {
    let i, content, activecontent, links;
    content = document.querySelectorAll(".planet__picture, .planet__information");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    links = document.getElementsByClassName("planet__link");
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" planet__link_active", "");
    }
    activecontent = document.getElementsByClassName(planetName);
    for (i = 0; i < activecontent.length; i++) {
      activecontent[i].style.display = "block";
    }
    event.currentTarget.className += " planet__link_active";
  }
  