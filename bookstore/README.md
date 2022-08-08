```
app.use("/parentUrl", express.Router().get("/childUrl", (req, res)=>{
  res.render('template', {some: "data"})
}))
```


# Book Store
> This Project to store/brows books in our store

## Content
- [Create project Structure (MVC)](#project-structure)
- [Project Routes](#Project Routes)
- [Project Controllers](#Project Controllers)
- [EJS View Engine](#EJS View Engine)

## Project Structure
```bash
.
├── controllers
├── data
├── models
├── public
├── routes
├── views
├── app.js
├── package.json
└── README.md
```
<hr>

## Project Routes
- [books Routes](./routes)
- [authors routes](./routes)
- [home/index router](./routes)

<hr>

## Project Controllers
- [books Controllers](./controllers/)
- [author Controllers](./controllers/)

<hr>

## EJS View Engine
- [Templating](./views/)

## Add Book Route
1. create addbook (ejs) file.
 - from for informathion:
  - book title
  - book prise
  - book pages
  - author : select(multi)
  - book description text area

2. create two route addbook (get/post)
3. for get method, render addbook, send also all authors as an object

4. for post: Store the new book to books.json file, increnet the id
5. if success: redirect to allbooks page
6. if error: show that error