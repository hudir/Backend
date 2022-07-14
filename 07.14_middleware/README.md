# Middleware in nodejs

- something works in between request and response process(in middle)
- is a function
- can have 3 arguments(req, res, next)
- next() is a callback and could be any name
- we can use middleware by using app.use() or in route