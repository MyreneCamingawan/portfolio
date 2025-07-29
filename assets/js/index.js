function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            var scrolled = (winScroll / height) * 100
            document.getElementById('progress_bar').style.width = scrolled + '%'
        }

        window.onscroll = function () {
            myFunction()
        }

var modal = document.getElementById("cv_modal");
var btn = document.getElementById("cv_btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}