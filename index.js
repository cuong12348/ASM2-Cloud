// Get all sidebar links (excluding logout)
const sideLinks = document.querySelectorAll(".sidebar .side-menu li a:not(.logout)");

// Add click event listener to sidebar links
sideLinks.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", () => {
    // Remove 'active' class from all sidebar links
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    // Add 'active' class to the clicked link's parent <li>
    li.classList.add("active");
  });
});

// Get menu bar and sidebar elements
const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");

// Toggle sidebar on menu bar click
menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

// Get search button, search button icon, and search form
const searchBtn = document.querySelector(".content nav form .form-input button");
const searchBtnIcon = document.querySelector(".content nav form .form-input button .bx");
const searchForm = document.querySelector(".content nav form");

// Toggle search form on search button click (for small screens)
searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchBtnIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchBtnIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

// Handle resizing of the window
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sideBar.classList.add("close");
  } else {
    sideBar.classList.remove("close");
  }
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

// Get theme toggle checkbox
const toggler = document.getElementById("theme-toggle");

// Toggle dark mode based on checkbox state
toggler.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

// Function to handle editing a product
function edit(obj) {
  const id = obj.children[0].textContent;
  const name = obj.children[1].textContent;
  const img = obj.children[2].children[0].src;
  const layoutEdit = document.querySelector("#layout-edit");

  layoutEdit.children[0].children[0].src = img;
  layoutEdit.children[0].children[1].textContent = `Product ID: ${id}`;
  layoutEdit.children[0].children[2].value = name;
  layoutEdit.style.display = "block";

  const openFile = document.createElement("input");
  openFile.type = "file";
  layoutEdit.children[0].children[0].addEventListener("click", () => {
    openFile.click();
    openFile.onchange = (evt) => {
      var file = evt.target.files[0];
    };
  });

  const cancel = document.querySelector(".btn").children[1];
  cancel.addEventListener("click", () => {
    layoutEdit.style.display = "none";
  });
}
