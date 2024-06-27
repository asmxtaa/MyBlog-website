// public/scripts.js

function toggleCommentForm(postId) {
    const form = document.getElementById(`commentForm${postId}`);
    form.classList.toggle('hidden');
}

function likePost(id) {
    const button = document.querySelector(`button[onclick="likePost(${id})"]`);
    button.classList.add('animate-like');
    setTimeout(() => button.classList.remove('animate-like'), 500);
    // Implement actual like functionality here
}

function dislikePost(id) {
    const button = document.querySelector(`button[onclick="dislikePost(${id})"]`);
    button.classList.add('animate-dislike');
    setTimeout(() => button.classList.remove('animate-dislike'), 500);
    // Implement actual dislike functionality here
}

function sharePost(id) {
    // Implement share functionality here
}

// scripts.js

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save user preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check if dark mode is enabled from local storage
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

