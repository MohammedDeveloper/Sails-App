/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function (req, res) {
        Article.find({}).exec(function (err, articles) {

            /// check for error
            if (err) {
                res.send(500, { error: "Database error" });
            }

            /// response
            return res.view("list", { articles: articles });
        })
    },
    add: function (req, res) {
        /// response
        return res.view("add");
    },
    create: function (req, res) {

        /// get the responses
        var reqBody = req.body;

        /// do the create operation
        Article.create({ title: reqBody.title, body: reqBody.body }).exec(function (err) {

            /// check for error
            if (err) {
                res.send(500, { error: "Database error" });
            }

            /// redirect the response
            res.redirect("/article/list");
        });
    },
    delete: function (req, res) {

        /// delete the record
        Article.destroy({ id: req.params.id }).exec(function (err) {

            /// check for error
            if (err) {
                res.send(500, { error: "Database error" });
            }

            /// redirect the response
            res.redirect("/article/list");
        });

        /// return
        return false;
    },
    edit: function (req, res) {

        Article.findOne({ id: req.params.id }).exec(function (err, article) {

            /// check for error
            if (err) {
                res.send(500, { error: "Database error" });
            }

            /// response
            return res.view("edit", { article: article });
        });
    },
    update: function (req, res) {

        /// get the responses
        var reqBody = req.body;

        /// do the create operation
        Article.update({ id: req.params.id },
            { title: reqBody.title, body: reqBody.body }).exec(function (err) {

                /// check for error
                if (err) {
                    res.send(500, { error: "Database error" });
                }

                /// redirect the response
                res.redirect("/article/list");
            });
    }

};

