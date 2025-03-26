// Simple admin authentication
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "windowedu2025"; // Change this to your preferred password

// Admin login functions
function openAdminModal() {
  document.getElementById('admin-modal').classList.remove('hidden');
}

function closeAdminModal() {
  document.getElementById('admin-modal').classList.add('hidden');
}

function loginAdmin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    document.getElementById('admin-modal').classList.add('hidden');
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('program-details').classList.add('hidden');
    document.getElementById('admin-panel').classList.remove('hidden');
    
    // Load current content into edit fields
    loadContentIntoEditFields();
  } else {
    alert("Incorrect username or password");
  }
}

function logoutAdmin() {
  document.getElementById('admin-panel').classList.add('hidden');
  document.getElementById('main-page').classList.remove('hidden');
}

// Load current content into edit fields
function loadContentIntoEditFields() {
  // Program description
  const programDescription = document.getElementById('program-description').innerHTML;
  document.getElementById('program-description-editor').value = programDescription;
  
  // Today's activities
  const youtubeVideo = document.querySelector('#today-activities p:nth-child(1)').textContent.replace('YouTube Video:', '').trim();
  document.getElementById('youtube-video').value = youtubeVideo;
  
  const currentAffairs = document.querySelector('#today-activities p:nth-child(2)').textContent.replace('Current Affairs:', '').trim();
  document.getElementById('current-affairs').value = currentAffairs;
  
  const sevenDayActivity = document.querySelector('#today-activities p:nth-child(3)').textContent.replace('7-Day Challenge:', '').trim();
  document.getElementById('seven-day-activity').value = sevenDayActivity;
  
  const fourteenDayActivity = document.querySelector('#today-activities p:nth-child(4)').textContent.replace('14-Day Challenge:', '').trim();
  document.getElementById('fourteen-day-activity').value = fourteenDayActivity;
  
  const dailyExam = document.querySelector('#today-activities p:nth-child(5)').textContent.replace('Daily Exam:', '').trim();
  document.getElementById('daily-exam').value = dailyExam;
  
  const communityActivities = document.querySelector('#today-activities p:nth-child(6)').textContent.replace('Community:', '').trim();
  document.getElementById('community-activities').value = communityActivities;
}

// Save functions
function saveDescription() {
  const newDescription = document.getElementById('program-description-editor').value;
  
  // Create HTML from text with paragraphs
  const paragraphs = newDescription.split('\n\n');
  let html = '';
  
  paragraphs.forEach((paragraph, index) => {
    if (paragraph.trim() === '') return;
    
    if (index === paragraphs.length - 1 && paragraph.includes('Register now')) {
      html += `<p class="highlight">${paragraph}</p>`;
    } else {
      html += `<p>${paragraph}</p>`;
    }
  });
  
  document.getElementById('program-description').innerHTML = html;
  alert('Program description saved successfully!');
}

function saveTodayActivities() {
  const youtubeVideo = document.getElementById('youtube-video').value;
  const currentAffairs = document.getElementById('current-affairs').value;
  const sevenDayActivity = document.getElementById('seven-day-activity').value;
  const fourteenDayActivity = document.getElementById('fourteen-day-activity').value;
  const dailyExam = document.getElementById('daily-exam').value;
  const communityActivities = document.getElementById('community-activities').value;
  
  // Update the main page
  const activitiesContainer = document.getElementById('today-activities');
  activitiesContainer.innerHTML = `
    <p><strong>YouTube Video:</strong> ${youtubeVideo}</p>
    <p><strong>Current Affairs:</strong> ${currentAffairs}</p>
    <p><strong>7-Day Challenge:</strong> ${sevenDayActivity}</p>
    <p><strong>14-Day Challenge:</strong> ${fourteenDayActivity}</p>
    <p><strong>Daily Exam:</strong> ${dailyExam}</p>
    <p><strong>Community:</strong> ${communityActivities}</p>
  `;
  
  // Also update the current day in program details page
  const currentDay = document.getElementById('current-day');
  if (currentDay) {
    const activitiesList = currentDay.querySelector('.day-activities');
    activitiesList.innerHTML = `
      <li><strong>YouTube:</strong> ${youtubeVideo}</li>
      <li><strong>Challenges:</strong> ${sevenDayActivity} (7-day) and ${fourteenDayActivity} (14-day)</li>
      <li><strong>Daily Exam:</strong> ${dailyExam}</li>
      <li><strong>Community:</strong> ${communityActivities}</li>
    `;
  }
  
  alert('Today\'s activities saved successfully!');
}

// Admin access via keyboard shortcut (Ctrl+Shift+A)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    openAdminModal();
  }
});
