import express from "express";
import productServices from "./product.services";
const router = express.Router();

//get all products
router.post("/getProducts",(req,res,next) => {
	productServices.getProduct().then((result) => {
		res.json(result);
}).catch((err) => {
		res.sendStatus(404);
    
});
});
router.post("/getCategories",(req,res,next) => {
	productServices.getCategories().then((result) => {
		res.json(result);
	}).catch((err) => {
		res.sendStatus(404);
	});

	
});
export default router;