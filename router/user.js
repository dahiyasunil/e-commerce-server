const express = require("express");
const {
  handleUserLogin,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  handleGetWishlistItems,
  handleAddProductToCart,
  handleRemoveProductFromCart,
  handleGetCartItems,
} = require("../controllers/user");

const router = express.Router();

router.route("/login/:mobileNumber").get(handleUserLogin);
router.route("/wishlist/add").put(handleAddToWishlist);
router.route("/wishlist/remove").put(handleRemoveFromWishlist);
router.route("/wishlist/details/:userId").get(handleGetWishlistItems);
router.route("/cart/add").put(handleAddProductToCart);
router.route("/cart/remove").put(handleRemoveProductFromCart);
router.route("/cart/details/:userId").get(handleGetCartItems);

module.exports = router;
