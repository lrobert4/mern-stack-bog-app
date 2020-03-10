/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the model files
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateModel` to something more sensible (e.g:
 * `Shops`)
 *
 * NOTE: You may need to import more than one model to create the 
 * controller you need.
 * 
 */
const Creature = require('../models/creature.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const creatureRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

 // retrieve all creatures from the DB
creatureRouter.get('/', (req, res) => {
    Creature.find().then(creatures => {
        res.json( creatures );
        //res.render('/', );
    });
});


// retrieve a single creature from the DB
creatureRouter.get('/:creatureId', (req, res) => {
    Creature.findById(req.params.id).then(creature => {
        res.json( creature );
        //res.render('creature/single', );
    });
});

// add newCreature to DB
creatureRouter.post('/', (req, res) => {
    Creature.create(req.body).then(() => {
        res.status(200).end()
    });
});


// update creature with creatureId to updatedCreature
creatureRouter.put('/:creatureId', (req, res) => {
    Creature.findByIdAndUpdate(req.params.creatureId, req. body).then(creature => {
        res.status(200).end()
    });
});


// deletes creature with creatureId from DB
creatureRouter.delete('/:creatureId', (req, res) => {
    Creature.findByIdAndDelete(req.params.creatureId).then(() => {
        res.status(200).end()
    });
});







/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  creatureRouter
}
