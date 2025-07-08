let reviews = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", content: "A classic novel about the American Dream.", rating: 5 },
    { id: 2, title: "1984", author: "George Orwell", content: "A dystopian novel about totalitarianism.", rating: 4 }
];

exports.getAllReviews = (req, res) => {
    res.json(reviews);
};

exports.getReviewById = (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
};

exports.createReview = (req, res) => {
    const newReview = {
      id: Math.max(...reviews.map(r => r.id)) + 1,
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      rating: req.body.rating
    };
    reviews.push(newReview);
    res.status(201).json(newReview);
};

exports.updateReview = (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (review) {
      review.title = req.body.title;
      review.author = req.body.author;
      review.content = req.body.content;
      review.rating = req.body.rating;
      res.json(review);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
};

exports.deleteReview = (req, res) => {
    const reviewIndex = reviews.findIndex(r => r.id === parseInt(req.params.id));
    if (reviewIndex !== -1) {
      reviews.splice(reviewIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
};