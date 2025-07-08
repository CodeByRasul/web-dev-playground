const urlParams = new URLSearchParams(window.location.search);
const reviewId = urlParams.get('id');

fetch(`/api/reviews/${reviewId}`)
  .then(response => response.json())
  .then(review => {
    document.getElementById('title').value = review.title;
    document.getElementById('author').value = review.author || '';
    document.getElementById('content').value = review.content;
    document.getElementById('rating').value = review.rating;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('edit-form').innerHTML = '<p>Error loading review</p>';
  });

document.getElementById('edit-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const updatedReview = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    content: document.getElementById('content').value,
    rating: parseInt(document.getElementById('rating').value)
  };

  fetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedReview)
  })
  .then(response => response.json())
  .then(data => {
    alert('Review updated successfully!');
    window.location.href = '/';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error updating review');
  });
});