
const router = require('express').Router();
const { Thought } = require('../../models')

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', async (req,res)=> {
    try {
        let thoughtData = await Thought.find({});
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// ROUTE TO CREATE A NEW THOUGHT
router.post('/', async (req,res)=> {
    try {
        let thoughtData = await Thought.create(req.body);
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//TROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:thoughtId', async (req,res)=> {
    try {
        let thoughtData = await Thought.findOne(
            { _id: req.params.thoughtId });

        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// ROUTE TO UPDATE A THOUGHT
router.put('/:thoughtId', async (req,res)=> {
    try{
        let thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

//ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId', async (req,res)=> {
    try {
        let thought = await Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
        );
        res.status(200).json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
)

module.exports = router;