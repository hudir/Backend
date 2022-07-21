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