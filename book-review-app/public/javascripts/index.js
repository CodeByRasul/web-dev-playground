document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
});

function loadReviews() {
    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => {
        const reviewsList = document.getElementById('reviews-list');
        let html = '';
  
        data.forEach(review => {
          html += `
            <div class="review-card">
              <h3>${review.title}</h3>
              <p><strong>Author:</strong> ${review.author || 'Not specified'}</p>
              <p>${review.content}</p>
              <div class="review-meta">
                <span class="review-rating">Rating: ${review.rating}/5</span>
                <div class="review-actions">
                  <a href="/views/view.html?id=${review.id}" class="btn">View</a>
                  <a href="/views/edit.html?id=${review.id}" class="btn btn-secondary">Edit</a>
                  <button onclick="deleteReview(${review.id})" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          `;
        });
  
        reviewsList.innerHTML = html;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('reviews-list').innerHTML = '<p>Error loading reviews</p>';
    });
}

function deleteReview(id) {
    if (confirm('Are you sure you want to delete this review?')) {
      fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          loadReviews();
        } else {
          alert('Failed to delete review');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error deleting review');
      });
    }
}