
## All Back-end Routes
### for products 👍👍👍👍👍
   1. `https://smoggy-woolens-lamb.cyclic.app/product/add` --> Add product (admin)

   2. `https://smoggy-woolens-lamb.cyclic.app/product/get` ---> get products

      - `https://smoggy-woolens-lamb.cyclic.app/product/get?category=men&brand=levis&type=clothing`

      - `Change category` : women , kids
   
   3. `https://smoggy-woolens-lamb.cyclic.app/product/get/${productid}` ---> single product
  
   4. `https://smoggy-woolens-lamb.cyclic.app/product/update/${productId}` ---> update product (admin) 

   5. `https://smoggy-woolens-lamb.cyclic.app/product/delete/${product}` ---> delete product (admin)  

---
---

### for user 👍👍👍👍👍

   1. `https://smoggy-woolens-lamb.cyclic.app/user/register` ----> register user

   2. `https://smoggy-woolens-lamb.cyclic.app/user/login` ----> login user

   3. `https://smoggy-woolens-lamb.cyclic.app/user` ---> get all user (admin)
     
      - `https://smoggy-woolens-lamb.cyclic.app/user?email=sattam@gmail.com`--->search use by email (admin)

      - `mobile, name, text_query` ---> search feature

   4. `http://localhost:8080/user/forgetPassword` ---> forget password (`PATCH`)   

   5. `https://smoggy-woolens-lamb.cyclic.app/user/password/change` ---> change password

   6. `https://smoggy-woolens-lamb.cyclic.app/user/logout` ---> logout

   7. `https://smoggy-woolens-lamb.cyclic.app/user/address` --> get address

   8. `http://localhost:8080/user/profile` ---> update profile 

   9. `http://localhost:8080/user/delete/address` ---> delete address

---
---





##  for cart 👍👍👍👍👍

1. `https://smoggy-woolens-lamb.cyclic.app/cart/add` --> add product to cart
   - required 
     1. token (Bearer token)
     2. productId that has been clicked

2. `https://smoggy-woolens-lamb.cyclic.app/cart/get`  --> get cart item(s)
   - required 
     1. token (Bearer token)

3. `https://smoggy-woolens-lamb.cyclic.app/cart/remove/:id` ---> remove cart item
    - required 
     1. token (Bearer token)
     2. cartItem id
         - ex: `https://smoggy-woolens-lamb.cyclic.app/cart/remove/63f76572b286efb72287060c`

4. `https://smoggy-woolens-lamb.cyclic.app/cart/incQty/:id` ---> increment cart quantity
    - required 
     1. token (Bearer token)
     2. cartItem id
        - ex :`https://smoggy-woolens-lamb.cyclic.app/cart/incQty/63f76572b286efb72287060c`

5. `https://smoggy-woolens-lamb.cyclic.app/cart/decQty/:id` ---> decrement cart quantity
    - required 
     1. token (Bearer token)
     2. cartItem id
        - ex :`http://localhost:8080/cart/decQty/63f76572b286efb72287060b`
     3. Note : When quantity reaches to 0 then cartitem will be deleted. for reference see ressponse in the conssole.log

---
---

### for order 👍👍👍👍👍

1. `https://smoggy-woolens-lamb.cyclic.app/order/admin` ---> get all orders (admin)

2. `https://smoggy-woolens-lamb.cyclic.app/order/get` ---> get user order(s)

3. `https://smoggy-woolens-lamb.cyclic.app/order/add` ---> add order from cart

4. `https://smoggy-woolens-lamb.cyclic.app/order/delete?productId=${productId}` --> delete order until not delivered

5. `https://smoggy-woolens-lamb.cyclic.app/order/update?orderId=${orderId}`--> update order status (admin)


