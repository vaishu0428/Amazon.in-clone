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


## Filter

1. search by :`title`
2. Sort by
   - rating
   - asending/descending by price
3. get by category 
4. get by brand
5. pagination

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
      