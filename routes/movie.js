// required
const express = require ("express");
const movieApp = require("../scheams/movieSchemas")

// we used the router as app
const router = express.Router();

// all endPoints:
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\

//to get all movies.
    router.get("/", async (req,res) =>{
    const movieList = await movieApp.find({});
    res.send(movieList);
    });

// to post new moive.
    router.post("/",(req ,res) =>{
    const body = req.body;
    // to check of there is some thing really send with
   if (Object.keys(body).length > 0) {
       const newMoive = new movieApp ({
        title: body.title,
        rating: body.rating,
        genre: body.genre,
        year: body.year,
       })
       newMoive.save();
       res.send(newMoive);
    } else{
        res.status(400).send({message: "empty body is not allowed "})
    }
})

// to update specific movie.
router.put("/:id", async (req,res) =>{

        const movieId = req.params.id;

        const body = req.body; 

         if (!movieId){
            res.send({ error: true, message: "id is not defined"});
            return;
         }

        const updatedMovie =  await movieApp.findByIdAndUpdate(
            movieId,
            {...body},
         //   {title, rating, genre, year},
             {new : true});
        res.send(updatedMovie);


});

// to delet specific movie.
router.delete("/:id" ,async (req,res) =>{
    const movieId = req.params.id;

     if (!movieId){
        res.send({ error: true, message: "id is not defined"});
        return;
     }
     const deletedMovie = await movieApp.findByIdAndDelete(
        movieId
       ); 
       res.send(`the movie with id: ${movieId} is deleted succesfuly`);
    
});


module.exports = router;