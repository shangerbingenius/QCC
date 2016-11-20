
/*
 * GET home page.
 */

exports.index = function(req, res){
    req.session.user ="shangerbin"
  res.render('index', { title: 'QCC' })
};