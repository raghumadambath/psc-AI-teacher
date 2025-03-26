// Functions to toggle between pages
function showProgramDetails() {
  document.getElementById('main-page').classList.add('hidden');
  document.getElementById('program-details').classList.remove('hidden');
}

function showMainPage() {
  document.getElementById('program-details').classList.add('hidden');
  document.getElementById('main-page').classList.remove('hidden');
}

// Function to scroll to current day
function goToTodaysProgram() {
  // First show the program details page
  document.getElementById('main-page').classList.add('hidden');
  document.getElementById('program-details').classList.remove('hidden');
  
  // Then scroll to the current day section
  const currentDayElement = document.getElementById('current-day');
  if (currentDayElement) {
    setTimeout(() => {
      currentDayElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
}
// Admin access via keyboard shortcut (Ctrl+Shift+A)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    openAdminModal();
  }
});

// Admin modal functions (backup in case admin.js doesn't load properly)
function openAdminModal() {
  const adminModal = document.getElementById('admin-modal');
  if (adminModal) {
    adminModal.classList.remove('hidden');
  }
}

// Will add more functionality later
