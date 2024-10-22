// Toggle comments visibility
function toggleComments(commentsId) {
    const commentsSection = document.getElementById(commentsId);
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

// Handle new discussion submission
document.getElementById('discussion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const topic = document.getElementById('topic').value;
    const description = document.getElementById('description').value;

    // Create new discussion element
    const newDiscussion = document.createElement('div');
    newDiscussion.classList.add('discussion');
    newDiscussion.innerHTML = `
        <h3>${topic}</h3>
        <button class="view-comments-btn" onclick="toggleComments('new-comments')">View Comments</button>
        <div id="new-comments" class="comments" style="display: none;">
            <p>No comments yet.</p>
        </div>
    `;

    // Append new discussion to the list
    document.querySelector('.discussions').appendChild(newDiscussion);

    // Clear form
    document.getElementById('discussion-form').reset();
});
