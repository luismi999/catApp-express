const { response } = require("express");
const Cat = require("../models/cat");

const getCat = async (req, res = response) => {

    const { name } = req;

    try {
        
        const cats = await Cat.find();

        res.status(200).json({
            ok: true,
            cats
        })

    } catch (error) {

        res.status(400).json({
            ok: false,
            msg: "Cats not found."
        })
    }
};

const getCats = async (req, res = response) => {

    try {
        
        const cats = await Cat.find();

        res.status(200).json({
            ok: true,
            cats
        })

    } catch (error) {

        res.status(400).json({
            ok: false,
            msg: "Cats not found."
        })
    }
};

const createCat = async (req, res = response) => {
    
    try {
        
        const cat = new Cat(req.body);
        await cat.save();

        res.status(200).json({
            ok: true,
            msg: "Created cat."
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: error
        });
    }
};

const updateCat = async (req, res = response) => {

    const { id } = req.query;

    try {

        const cat = await Cat.findById(id);

        if(!cat){
            return res.status(400).json({
                ok: false,
                msg: "Cat not found."
            });
        }

        await Cat.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            ok: true,
            msg: "Updated cat."
        });

        
    } catch (error) {
        
        res.status(400).json({
            ok: false,
            error
        })

    }
};

const deleteCat = async (req, res = response) => {

    const { id } = req.query;

    try {
        
        const cat = await Cat.findById(id);

        if(!cat){
            return res.status(400).json({
                ok: false,
                msg: "Cat not found."
            });
        }

        await Cat.findByIdAndRemove(id);

        res.status(200).json({
            ok: true,
            msg: "Removed cat."
        });

    } catch (error) {

        res.status(400).json({
            ok: true,
            error
        });
    }

};

module.exports = {
    getCats,
    createCat,
    updateCat,
    deleteCat
}