const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValid } = require("../middleware/field-valid");
const { getCats, createCat, updateCat, deleteCat } = require("../controllers/cat");

const router = Router();

router.get("", [], getCats);

router.post("/create", [
    check("pedigree", "Pedigree is necessary.").not().isEmpty(),
    check("name", "Name is necessary.").not().isEmpty(),
    check("age", "Age is necessary.").not().isEmpty(),
    check("gender", "Gender is necessary.").not().isEmpty(),
    fieldValid
], createCat);

router.patch("", [], updateCat);

router.delete("", [], deleteCat);

module.exports = router;