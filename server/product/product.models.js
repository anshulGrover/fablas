import mongoose from "mongoose";
const product_schema=mongoose.Schema({
	categoryName:{
		type:String,
		required:true
	},
	categoryId:{
		type:String,
		required:true
	},
	subCategory:[{
		name:{
			type:String,
			required:true
		},
		id:{
			type:String,
			required:true
		},
		productsList:[
			{
				name:{
					type:String,
					required:true
				},
				imagepath:{
					type:String,
					required:true
				},
				isFeatured:{
					type:Boolean,
					required:true,
					default:false
				},
				price:{
					type:String,
					required:true
				}
			}
		]
	}]    
});
export default mongoose.model("products" , product_schema);