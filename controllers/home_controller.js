const Safar = require('../models/safarSchema');

module.exports.home = function(req,res){
            return res.render('home');
}

module.exports.about = function(req,res){
    return res.render('about');
}

module.exports.explore = function(req,res){
    Safar.find().sort('_id').exec(function(err,reviews){
        if(err){
            console.log('error in fetching reviews!');
            return;
        }
   
    return res.render('explore',{
        reviews: reviews
    });

   });
}

module.exports.review = function(req,res){
    return res.render('review');
}

module.exports.add_review = function(req,res){
    console.log(req.body);
    Safar.create(req.body,
        function(err,newReview){
        if(err){
            console.log(err);
            return;
        }
        console.log('New Review Added', newReview);
        return res.redirect('/explore');
    });
}

module.exports.delete_review = function(req,res){
    console.log(req.query);
        let id = req.query.id;

        Safar.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting review from database!');
                return;
            }
            return res.redirect('/explore');
        });
}



