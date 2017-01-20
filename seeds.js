var mongoose    =   require("mongoose");
var Campground  =   require("./models/campground");
var Comment     =   require("./models/comment");

var data        =   [
        {
            name: "Jerkstore",
            image: "http://photosforclass.com/download/7626464792",
            description: "blah blah blah"
        },
        {
            name: "Hachi Machi",
            image: "http://photosforclass.com/download/5641024448",
            description: "example text"
        },
        {
            name: "Splendoras",
            image: "http://photosforclass.com/download/4812576807",
            description: "yargle bargle"
        }
    ]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This is a great comment",
                            author: "Me"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;