// Get the modal
var modal = document.getElementById("myModal");
function toggleModal(x) {
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

var collectionModal = document.getElementById("collectionModal");
function toggleCollectionModal(x) {
  if (collectionModal.style.display == "none") {
    collectionModal.style.display = "block";
  } else {
    collectionModal.style.display = "none";
  }
}
//ContentSelect
function closeContentSelect() {
  document.getElementById("ContentSelect").style.display = "none";
}

// mainContentGuideToggle
var isExpanded = false;

function toggleHeight(x) {
  var mainContentGuide = document.getElementById("mainContentGuide");
  if (isExpanded) {
    mainContentGuide.style.minHeight = "100px"; // Reduce back to default height
    document.getElementById("toggleButtonDown").style.display = "block";
    document.getElementById("toggleButtonUp").style.display = "none";
    document.getElementById('toggle-container').style.display = "none";
  } else {
    mainContentGuide.style.minHeight = "400px"; // Increase height to 400px
    document.getElementById("toggleButtonUp").style.display = "block";
    document.getElementById("toggleButtonDown").style.display = "none";
    document.getElementById('toggle-container').style.display = "block";
  }

  isExpanded = !isExpanded; // Toggle the state
}


//toggleBox
let openBox = 1; // Set the first box to be open initially

function toggleBox(boxNumber) {
  const boxes = document.querySelectorAll(".box");
  const texts = document.querySelectorAll(".toggle-article-section20");

  if (openBox !== boxNumber) {
    // Close the currently open box
    boxes[openBox - 1].style.minHeight = "20px";
    boxes[openBox - 1].style.backgroundColor = "#fff";
    boxes[boxNumber - 1].style.color = "#322f33";
    texts[openBox - 1].style.display = "none";

    // Open the clicked box
    boxes[boxNumber - 1].style.minHeight = "80px";
    boxes[boxNumber - 1].style.backgroundColor = "#f1f1f1";
    boxes[boxNumber - 1].style.color = "#1c1b1d";
    texts[boxNumber - 1].style.display = "block";

    openBox = boxNumber; // Update the open box
  }
}
// change the icon start
function changeAndRotateIcons(changeIconId, rotateIconId, displayIconId) {
  const changeIcon = document.getElementById(changeIconId);
  const rotateIcon = document.getElementById(rotateIconId);
  const displayIcon = document.getElementById(displayIconId);

  // Change the icon
  changeIcon.style.display = 'none';
  rotateIcon.style.display = 'block';

  // Rotate the half-circle icon immediately
  rotateIcon.style.transform = 'rotate(360deg)';

  // Hide the rotated icon after the rotation animation completes
  setTimeout(function() {
    rotateIcon.style.display = 'none';
    displayIcon.style.display = 'block';
  }, 500); // Assuming the rotation takes 0.5 seconds
}

function rotateAndHideIcons(rotateIconId, hideIconId, displayIconId) {
  const rotateIcon = document.getElementById(rotateIconId);
  const hideIcon = document.getElementById(hideIconId);
  const displayIcon = document.getElementById(displayIconId);

  // Rotate the icon
  rotateIcon.style.transform = 'rotate(360deg)';

  // Hide the rotated icon after the rotation animation completes
  setTimeout(function() {
    rotateIcon.style.display = 'none';
    hideIcon.style.display = 'none';
    displayIcon.style.display = 'block';
  }, 500); // Assuming the rotation takes 0.5 seconds
}

function toggleIcons(hideIconId, displayIconId) {
  const hideIcon = document.getElementById(hideIconId);
  const displayIcon = document.getElementById(displayIconId);

  hideIcon.style.display = 'none';
  displayIcon.style.display = 'block';
}
// change the icon end


//update Progress Bar
let currentProgress = 0; // Set initial progress to 1

// Set initial progress bar state
updateProgressBar();
updateCurrentIndex();

function updateProgress() {
  if (currentProgress < 5) {
    currentProgress++;
    updateProgressBar();
    updateCurrentIndex();
  }
}

function decreaseProgressBy() {
  if (currentProgress >= 1) {
    currentProgress--;
    updateProgressBar();
    updateCurrentIndex();
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress");
  const progressWidth = (currentProgress / 5) * 100;
  progressBar.style.width = progressWidth + "%";
}

function updateCurrentIndex() {
  const currentIndexElement = document.getElementById("currentIndex");
  currentIndexElement.textContent = `${currentProgress}`;
}
