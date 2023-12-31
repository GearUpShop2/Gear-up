const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const authorization = require('../middleware/authorize');

router.post('/addProduct', productController.addProduct);
router.get('/getAllProducts', productController.getAllProducts);
router.get('/getAllCartByCategory', productController.getAllCartByCategory);
router.get('/getTopSellingProducts', productController.getTopSellingProducts);
router.put('/editProduct/:productId', productController.editProduct);
router.put('/deleteProduct/:productId', productController.deleteProduct);
router.get('/getProductsWithImage',productController.getProductsWithImage);
router.put('/addOrUpdateImageUrl/:productId', productController.addOrUpdateImageUrl);
router.get('/details/:productId', productController.getProductWithImage);
router.post('/add-to-cart/:productId',authorization.authorize ,productController.addToCart);
router.post('/add-to-wishlist/:productId',authorization.authorize ,productController.addToWishlist);
router.post('/carts',authorization.authorize ,productController.getAllCarts);
router.get('/det/:productId', productController.getProductDetails);
router.get('/Car',authorization.authorize, productController.getCartProducts);
router.delete('/cart/:productId',authorization.authorize ,productController.deleteProductFromCart);
router.get('/wish',authorization.authorize, productController.getwishlistProducts);
router.get('/category/:category', productController.getProductsByCategory);
router.post('/add', productController.addNewProduct);
router.delete('/delete/:productId', productController.softDeleteProduct);
router.put('/product/:productId',authorization.authorize ,productController.removeProductFromFavorites);
router.get('/topselling', productController.getTopSellingProducts);

router.get('/FeturedProduct', productController.getEightProducts);

router.get('/home', productController.getEightProducts);
router.delete('/raf',authorization.authorize,productController.deleteAllCartProductsForUser);
 

module.exports = router;
