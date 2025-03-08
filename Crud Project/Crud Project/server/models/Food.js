const mongoose= require('mongoose');
const FoodSchema=new mongoose.Schema({
    foodName:{
        type:String,

        
    },
    days:{
        type:String,
        
    },
});
Food=mongoose.model("FoodData",FoodSchema);
module.exports=Food;
