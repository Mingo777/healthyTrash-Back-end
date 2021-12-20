const { executeQuery, executeQueryOne } = require('../utils');


const getAllBlogs = () => {
    return executeQuery('select * from blog');
};

const getBlogById = (blogId) => {
    return executeQueryOne('SELECT * FROM blog WHERE id = ?', [blogId]);
};

const createBlog = ({ nombre, titulo, descripcion, imagen, fecha }) => {
    return executeQuery('INSERT INTO blog (nombre,titulo,descripcion,imagen,fecha) VALUES (?,?,?,?,?)', [nombre, titulo, descripcion, imagen, fecha])
};

const deleteBlogById = (blogId) => {
    return executeQuery('delete from blog where id = ?', [blogId]);
};









module.exports = {
    getAllBlogs, getBlogById, createBlog, deleteBlogById
}