```
brand :-
key===type:value===brands

mens:-{
clothing:["levis","denim",peterEngland,"polo"]
shoes:["puma","adidas","bata","nike"]
accessories:["woodland","puma","adidas","lee"]
pajam:["khadims","levis","siyaram's","netplay"]
coat:["blackberry","montecarlo","parkAvenue","raymond's"]
}

kids:-{
clothing: ["levis","denim", "peterEngland", "polo"],
sweatshirts-and-sweatpants: ["khadims", "levis", "siyaram's", "netplay"],
dresses-and-jumpsuits: ["FabAlley", "DressBerry", "Cottinfab", "Only"],
coat: ["blackberry", "montecarlo", "parkAvenue", "raymond's"],
shorts: ["Kidsville", "Fusefit", "puma"],
accessories: ["woodland", "puma", "adidas", "lee"],
baby: ["Brainsmith", "Shinse", "Funcorp", "Buddyz"]
},

womens:-{
clothing: ["levis", "denim"],
top: ["jCrew"],
pant: ["Biba"],
sneaker: ["Campus", "Nike"],
sandals: ["Woodland", "Sparx"],
bag:["jCrew"],
earrings:["jCrew"],
bracelet:["jCrew"]
},
```


## Filter

## Get products by different filteration (Url) 

1. `http://localhost:8080/product/get` ---> default 20 data

2. `http://localhost:8080/product/get?search_query:${value}` ----> search by title

3. `http://localhost:8080/product/get?rating=${value}` ----> get by rating (1 to 5)

4. `http://localhost:8080/product/get?category=${value}` ----> By category (men, women,kids...)

5. `http://localhost:8080/product/get?brand=${value}` -----> By brand

6. `http://localhost:8080/product/get?sortBy=${value}&order=${value}` --> sortBy
   - ex : `http://localhost:8080/product/get?sortBy=price&order=1`
   - ex: `http://localhost:8080/product/get?sortBy=rating&order=-1`


7. `http://localhost:8080/product/get?page=${value}&limit=${value}` ---> pagination
   - ex : `http://localhost:8080/product/get?page=2&limit=20`   


8. `http://localhost:8080/product/get?price=${amount}&order=${value}` ----> sortBy price
   - ex: `http://localhost:8080/product/get?price=400&order=-1`
      

## Single product

- `http://localhost:8080/product/get/${productId}`
   - ex : `http://localhost:8080/product/get/63f76572b286efb722870609`


## CRUD In Products (Admin Only)

1. `http://localhost:8080/product/add` ----> Create product
   - required 
     1. token (Bearer token)

     2. Below fields (`Should stricly follow typeOf`)
        ```
            title: {
               type: String,
               required: true
            },
            image: {
               type: String,
               required: true
            },
            description: {
               type: String,
               required: true
            },
            price: {
               type: Number,
               required: true
            },
            rating: {
               type: Number,
               required: true
            },
            brand: {
               type: String,
               required: true
            },

            category: {
               type: String,
               required: true
            },

            quantity: {
               type: Number,
               required: true
            },
        ```
      3. Method : `POST`

2. `http://localhost:8080/product/update/:id` ---> Update 
   - required 
     1. token (Bearer token)
     2. Method : `PATCH`

3. `http://localhost:8080/product/delete/:id` ---> Delete 
   - required 
     1. token (Bearer token)
     2. Method : `DELETE`
      


##  cart

1. `http://localhost:8080/cart/add` --> add product to cart
   - required 
     1. token (Bearer token)
     2. productId that has been clicked

2. `http://localhost:8080/cart/get`  --> get cart item(s)
   - required 
     1. token (Bearer token)

3. `http://localhost:8080/cart/remove/:id` ---> remove cart item
    - required 
     1. token (Bearer token)
     2. cartItem id
         - ex: `http://localhost:8080/cart/remove/63f76572b286efb72287060c`

4. `http://localhost:8080/cart/incQty/:id` ---> increment cart quantity
    - required 
     1. token (Bearer token)
     2. cartItem id
        - ex :`http://localhost:8080/cart/incQty/63f76572b286efb72287060c`

5. `http://localhost:8080/cart/decQty/:id` ---> decrement cart quantity
    - required 
     1. token (Bearer token)
     2. cartItem id
        - ex :`http://localhost:8080/cart/decQty/63f76572b286efb72287060b`
     3. Note : When quantity reaches to 0 then cartitem will be deleted. for reference see ressponse in the conssole.log

  
      

