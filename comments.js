// Create web server and listen on port 3000
class Server{
    constructor(){
        this.express = require('express');
        this.app = this.express();
        this.port = 3000;
        this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`));
    }
    // Get all comments
    getComments = () =>{
        this.app.get('/comments', (req, res) => {
            res.json(comments);
        });
    }
    // Get comment by id
    getCommentById = () =>{
        this.app.get('/comments/:id', (req, res) => {
            const found = comments.some(comment => comment.id === parseInt(req.params.id));
            if (found) {
                res.json(comments.filter(comment => comment.id === parseInt(req.params.id)));
            } else {
                res.status(400).json({ msg: `No comment with the id of ${req.params.id}` });
            }
        });
    }
    // Create comment
    createComment = () =>{
        this.app.post('/comments', (req, res) => {
            const newComment = {
                id: uuid.v4(),
                name: req.body.name,
                email: req.body.email,
                body: req.body.body
            };
            if (!newComment.name || !newComment.email || !newComment.body) {
                return res.status(400).json({ msg: 'Please include a name, email and body' });
            }
            comments.push(newComment);
            res.json(comments);
        });
    }
}