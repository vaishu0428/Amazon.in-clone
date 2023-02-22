// const fs = require("fs")

// const path = require("path");
const productModel = require("../model/products.model");
// const fileName = path.join(process.cwd(), "women.json")

// const addProduct = async () => {

//     let data = fs.readFileSync(fileName, "utf-8");

//     let parse_data = JSON.parse(data);
//     //    console.log(parse_data);

//    parse_data.forEach((productData) => {
//         const product = new productModel({
//             title: productData.name || "Womens title",
//             price: productData.price || 300,
//             brand: productData.brand || null, 
//             disc: productData.description || "no description found",
//             rating: productData.rating || 4.5, 
//             category: productData.category || "kids",
//             subCategory: productData.subcategory || "no subcategory found", 
//             image: [{
//                 url: productData.imgUrl || "https://www.jcrew.com/s7-img-facade/BD570_EB8633?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
//             }],
//         });

//         product.save((err) => {
//             if (err) {
//                 console.error(`Error saving product ${productData.name}:`, err);
//             } else {
//                 console.log(`Product  saved successfully`);
//             }
//         });
//     });

// }

const addProduct=async(req,res)=>{

    const product= new productModel(req.body);

    try {
        const new_product= await product.save();
        res.status(201).send({msg:"product addedd successs", products:new_product})
    } catch (error) {
        res.status(500).send({mssg:"Something went wrong in the server",err:error})
    }
}
module.exports =
{
    addProduct
}