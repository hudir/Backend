npm i -g express-generator

express --version

express --view=ejs


form get method when submit will send the data as query and also shows in url '?nput.name=input.value&others'
{input.name: input.value, ...others}

npm i express-fileupload

# upload file
1- require express-fileupload
2- in FRONTEND-FROM add attribute: enctype = "multipart/form-data"
3- use <input type="file"> and give it a name
4- use req.files.input_name to get it(multi=>[{single file}], single=>{single file})
5- store use .mv(Path, err=>{})