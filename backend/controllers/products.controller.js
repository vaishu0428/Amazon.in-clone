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
        res.status(500).send({ mssg: "Something went wrong", err: error.message })
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

// const getProducts = async (req, res) => {

//     const {
//       category,
//       order,
//       brand,
//       page = 1,
//       limit = 20,
//       sortBy,
//       search_query,
//       rating,
//       price,
//       getMinRate,
//       getMaxRate
//     } = req.query;
  
//     let products;
  
//     try {

//       // console.log(getMinRate,"min::", getMaxRate,"maxx")

//       if(getMinRate<0 || getMaxRate>5){
//         return res.status(200).send({msg:"Please provide rating between 1 to 5"})
//       }
  
//       if (search_query) {
//         const regex = new RegExp(search_query, 'i');
//         products = await productModel.find({ title: regex });
//       }
  
//       else if (rating) {
//         products = await productModel.find({ rating: parseInt(rating) });
//       }

//       else if (getMinRate && getMaxRate) {
//         products = await productModel.find({ rating: { $gte: parseInt(getMinRate), $lte: parseInt(getMaxRate) } });
//       }
  
//       else if (category) {
//         products = await productModel.find({ category: category });
//       }
  
//       else if (brand) {
//         products = await productModel.find({ brand: brand });
//       }
  
//       else if (sortBy && order) {
//         const sort = {};
//         sort[sortBy] = parseInt(order);
//         products = await productModel.find().sort(sort);
//       }
  
//       else if (price && order) {
//         const sort = {};
//         sort["price"] = parseInt(order);
//         products = await productModel.find().sort(sort);
//       }
  
//       else if (page && limit) {
//         const parsedPage = parseInt(page);
//         const parsedLimit = parseInt(limit);
//         const startIndex = (parsedPage - 1) * parsedLimit;
//         products = await productModel.find().limit(parsedLimit).skip(startIndex).exec();
//       }
  
//       else {
//         products = await productModel.find();
//       }
  
//       if (products.length === 0) {
//         return res.status(200).send({ msg: "Product not found" })
//       } else {
//         // for (let product of products) {
//         //   const newQuantity = Math.floor(Math.random() * (20 - 10 + 1) + 10);
//         //   await productModel.findByIdAndUpdate(product._id, { $set: { quantity: newQuantity }});
//         // }
//         res.status(201).send({ products, total: products.length })
//       }
  
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   }

const getProducts = async (req, res) => {

  const {
    category,
    brand,
    type,
    _sort,
    _order,
    page = 1,
    limit 
  } = req.query;

  let products;

  try {

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (brand) {
      filter.brand = brand;
    }

    if (type) {
      filter.type = type;
    }

    const sort = {};

    if (_sort && _order) {
      sort[_sort] = _order;
    }

    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const startIndex = (parsedPage - 1) * parsedLimit;

    // console.log(filter,"filter:- ",sort,"sort")

    // console.log(parsedPage,"req.query page no",parsedLimit,"passsing by req.query" )
   
    products = await productModel
      .find(filter)
      .sort(sort)
      .skip(startIndex)
      .limit(parsedLimit)
      .exec();

    if (products.length === 0) {
      return res.status(200).send({ msg: "Product not found" })
    } else {
      res.status(201).send({ products, total: products.length })
    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

   
const getDetails = async (req, res) => {

    const id = req.params.id;

    const findProduct = await productModel.findById({ _id: id });

    if (!findProduct) {
        return res.status(400).send({ msg: `product not found with id : ${id}` })
    }

    try {
        res.status(200).send({ msg: "product get", product: findProduct })
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong in the server", err: error.message })
    }
}

const updateProduct = async (req, res) => {

    const id = req.params.id;

    const findProduct = await productModel.findById({ _id: id });

    if (!findProduct) {
        return res.status(400).send({ msg: `product not found with id : ${id}` })
    }
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty or not passed so did not updated product." });
    }

    try {
        await productModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: "product updated success" })
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong in the server", err: error.message })
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const findProduct = await productModel.findById({ _id: id });

    if (!findProduct) {
        return res.status(400).send({ msg: `product not found with id : ${id}` })
    }

    try {

        await productModel.findByIdAndDelete({ _id: id })
        res.status(200).send({ msg: "product deleted success" })
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong in the server", err: error.message })
    }
}

module.exports = {
    addProduct,
    getProducts,
    getDetails,
    updateProduct,
    deleteProduct
}

