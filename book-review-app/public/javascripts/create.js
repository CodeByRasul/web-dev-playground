document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newReview = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      content: document.getElementById('content').value,
      rating: parseInt(document.getElementById('rating').value)
    };
  
    fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(response => response.json())
    .then(data => {
      alert('Review added successfully!');
      window.location.href = '/';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error adding review');
    });
});