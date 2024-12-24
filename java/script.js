document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const application = {
        robloxUsername: document.getElementById('robloxUsername').value,
        discordUsername: document.getElementById('discordUsername').value,
        ageConfirmation: document.getElementById('ageConfirmation').value,
        staffRole: document.getElementById('staffRole').value,
        pastExperience: document.getElementById('pastExperience').value,
        whyPickYou: document.getElementById('whyPickYou').value,
        rdm: document.getElementById('rdm').value,
        nlr: document.getElementById('nlr').value,
        aa: document.getElementById('aa').value,
        moderatorCommands: document.getElementById('moderatorCommands').value,
        status: 'Pending'
    };

    // Save the application to localStorage
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));

    // Show thank you message with animation
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
    thankYouMessage.classList.add('fade-in');

    // Reset the form
    document.getElementById('applicationForm').reset();
});

// CSS for the thank you message animation
const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        display: none;
    }
    .fade-in {
        animation: fadeIn 1s forwards;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);