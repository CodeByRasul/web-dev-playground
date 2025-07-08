# Book Review App

This is a simple web application for managing book reviews, developed as part of the Web Technology module. The app allows users to view, create, edit, and delete book reviews. It features a minimalistic design and is built using Node.js, Express, and vanilla JavaScript.

## Features

- View a list of book reviews.
- Add a new book review.
- Edit an existing book review.
- Delete a book review.
- Minimalistic design with a monochromatic color scheme and a single accent color (soft blue).

## Structure of the Project

/book-review-app
├── app.js              
├── package.json        
├── package-lock.json   
├── .gitignore          
├── README.md           
├── public/             
│   ├── javascripts/    
│   │   ├── index.js    
│   │   ├── create.js  
│   │   ├── edit.js     
│   │   └── view.js    
│   ├── styles/         
│   │   └── style.css   
│   └── views/          
│       ├── index.html  
│       ├── create.html 
│       ├── edit.html   
│       └── view.html   
├── routes/             
│   └── reviews.js      
├── controllers/        
    └── reviews.js      
         

## Notes
The in-memory reviews array in the app is located in controllers/reviews.js. All data will be lost when the server restarts because it is not persistent.

-The design features minimalist and monochrome styling with soft blue highlights as per the requirements of the assignment.
-The public/javascripts folder contains all client-side JavaScript files. It is better for the code to be organized this way.
-The package-lock.json is added to guarantee that all versions of the dependencies used will be the same every time.

## Technologies Used

-Node.js: Server-side operation environment.
-Express: Server framework for Node.js.
-JavaScript: Frontend and backend scripting language.
-HTML/CSS: Markup and styles for the user interface.

## Links

- **GitHub Repository**: https://github.com/00018400/Book-Review-App
- **Deployed Application**: https://book-review-app-00018400.onrender.com/