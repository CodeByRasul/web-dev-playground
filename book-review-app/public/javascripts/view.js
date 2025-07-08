const urlParams = new URLSearchParams(window.location.search);
const reviewId = urlParams.get('id');

fetch(`/api/reviews/${reviewId}`)
  .then(response => response.json())
  .then(review => {
    document.getElementById('review-title').textContent = review.title;
    document.getElementById('review-author').textContent = review.author || 'Not specified';
    document.getElementById('review-content').textContent = review.content;
    document.getElementById('review-rating').textContent = `Rating: ${review.rating}/5`;
    document.getElementById('edit-link').href = `/views/edit.html?id=${review.id}`;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('review-details').innerHTML = '<p>Error loading review</p>';
  });

function deleteReview() {
  if (confirm('Are you sure you want to delete this review?')) {
    fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      alert('Review deleted successfully!');
      window.location.href = '/';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error deleting review');
    });
  }
}