// Toggle details visibility
function toggleDetails(detailsId) {
    const detailsSection = document.getElementById(detailsId);
    detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';
}

// Toggle appointment form visibility
function toggleForm(formId) {
    const formSection = document.getElementById(formId);
    formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
}
