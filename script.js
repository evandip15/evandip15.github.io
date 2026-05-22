function showCategory(category) {

  let wallpapers = document.querySelectorAll('.wallpaper');

  wallpapers.forEach(wallpaper => {

    if (category === 'all') {
      wallpaper.style.display = "";
    }

    else if (wallpaper.classList.contains(category)) {
      wallpaper.style.display = "";
    }

    else {
      wallpaper.style.display = "none";
    }

  });
}

function searchWallpapers() {

  let input = document.getElementById("searchBar").value.toLowerCase();

  let wallpapers = document.querySelectorAll(".wallpaper");

  wallpapers.forEach(wallpaper => {

    let text = wallpaper.innerText.toLowerCase();

    if (text.includes(input)) {
      wallpaper.style.display = "";
    }

    else {
      wallpaper.style.display = "none";
    }

  });
}