// const fs = require("fs")

// const path = require("path");
const productModel = require("../model/products.model");
// const fileName = path.join(process.cwd(), "db.js")


// const addProduct = async (req,res) => {

//     let data = fs.readFileSync(fileName, "utf-8");

//     let parse_data = JSON.parse(data);
//        console.log(parse_data);

//    kids_dresses.forEach((productData) => {

//         const product = new productModel({
//             title: productData.title || "Nike",
//             price: productData.price || 300,
//             brand: productData.brand || "Nike", 
//             disc: productData.description || "no description found",
//             rating: productData.reviews.rate || 4.5, 
//             category: productData.category || "kids",
//             subCategory: "No subcategory found", 
//             image: [{
//                 url: productData.image || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
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

// add product 👍👍👍👍

const addProduct=async(req,res)=>{

    const product= new productModel(req.body);

    try {
        const new_product= await product.save();
        res.status(201).send({msg:"product addedd successs", products:new_product})
    } catch (error) {
        res.status(500).send({mssg:"Something went wrong in the server",err:error})
    }
}

// get products 👍👍👍👍👍

const getProducts= async(req,res)=>{

     const products= await productModel.find();

     if(products.length===0){
        return res.status(404).send({msg:"Product not found"})
     }

     try {
        res.status(200).send({products:products,total:products.length})
     } catch (error) {
        return res.status(500).send({msg:"Something went wrong server", err:error})
     }
}
module.exports ={
    addProduct,
    getProducts
}