const express=require("express");
const router= new express.Router();
const MensRanking=require("../../src/model/mens")

//post data
router.post("/mens",async(req,res)=>{

    try{
        const addingMensRecords =  new MensRanking( req.body);
        const responseMens= await addingMensRecords.save();
        res.status(201).send(responseMens);
    }
    catch(e)
    {
res.status(400).send(e)
    }
})

// get data 
router.get("/mens",async(req,res)=>{

    try{
        const getMensRecords = await MensRanking.find({})
        res.send(getMensRecords);
    }
    catch(e)
    {
res.status(400).send(e)
    }
})

//Get by id
    router.get("/mens/:id",async(req,res)=>{

    try{
        const _id=req.params.id;
        const getMenRecords = await MensRanking.findById({_id})    
            res.send(getMenRecords);
    }
    catch(e)
    {
res.status(400).send(e)
    }
})

//Sort

/*
    router.get("/mens",async(req,res)=>{
        try{
             const getMenRecords = await MensRanking.findById({}).sort({"ranking":1}) 
            res.send(getMenRecords);
    }
    catch(e)
    {
res.status(400).send(e)
    }
})*/

//Delete

    router.delete("/mens/:id",async(req,res)=>{
        try{
        const _id=req.params.id;
        const deleteMenRecords = await MensRanking.findByIdAndDelete(_id);
        res.send(deleteMenRecords);
    }
    catch(e)
    {
res.status(500).send(e)
    }
})

//Get by id
    router.patch("/mens/:id",async(req,res)=>{
    try{
    const _id=req.params.id;
    const updateMenRecords = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})

//new:true =>becuase if we want to see the fresh update in postman
    res.send(updateMenRecords);
    }
    catch(e)
    {
res.status(500).send(e)
    }
})

 module.exports=router;