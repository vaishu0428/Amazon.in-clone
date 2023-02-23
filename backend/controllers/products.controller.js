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

const addProduct = async (req, res) => {

    const product = new productModel(req.body);

    try {
        const new_product = await product.save();
        res.status(201).send({ msg: "product addedd successs", products: new_product })
    } catch (error) {
        res.status(500).send({ mssg: "Something went wrong in the server", err: error })
    }


    // productModel.updateMany({}, { $unset: { rating: 4 } }) // remove the rating field from all documents
    //     .then((result) => {
    //       console.log(`Removed rating field from ${result.nModified} documents`);

    //    productModel.find({}, (err, products) => { // find all products
    //         if (err) {
    //           console.error(err);
    //           return;
    //         }

    //         // update each product with a random rating
    //         products.forEach((product) => {
    //           product.rating = Math.floor(Math.random() * 5) + 1;
    //           product.save((err) => {
    //             if (err) {
    //               console.error(err);
    //             }
    //           });
    //         });

    //         console.log(`Updated rating field in ${products.length} documents`);
    //       });
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });


}

// get products 👍👍👍👍👍

const getProducts = async (req, res) => {

    const {
        category,
        order,
        brand,
        page = 1,
        limit = 20,
        sortBy,
        search_query,
        rating,
        price
    } = req.query;

    let products;

    try {



        if (search_query) {
            const regex = new RegExp(search_query, 'i');
            // console.log(regex, "regex")
            products = await productModel.find({ title: regex });
        }



        else if (rating) {
            // console.log(rating) 
            products = await productModel.find({ rating: parseInt(rating) });
        }




        else if (category) {
            products = await productModel.find({ category: category });
        }

        else if (brand) {
            products = await productModel.find({ brand: brand });
        }




        else if (sortBy && order) {
            const sort = {};
            sort[sortBy] = parseInt(order);
            products = await productModel.find().sort(sort);
        }

        else if (price && order) {
            const sort = {};
            sort["price"] = parseInt(order);
            products = await productModel.find().sort(sort);
        }


        else if (page && limit) {
            const parsedPage = parseInt(page);
            const parsedLimit = parseInt(limit);
            const startIndex = (parsedPage - 1) * parsedLimit;
            products = await productModel.find().limit(parsedLimit).skip(startIndex).exec();
        }
        // if no filters applied, get all products
        else {
            products = await productModel.find();
        }

        if (products.length === 0) {
            return res.status(200).send({ msg: "Product not found" })
        } else {
            res.status(201).send({ products, total: products.length })
        }


    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

module.exports = {
    addProduct,
    getProducts
}

