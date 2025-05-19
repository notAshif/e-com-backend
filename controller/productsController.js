const productsModel = require("../model/products-model");
const createProducts = async (req, res) => {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    const image = req.file?.buffer || null;

    await productsModel.create({
      name,
      price,
      image : image,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
    req.flash("success", "Product created successfully");
    res.redirect("/owner/admin");
  } catch (err) {
    console.log(err.message);
    req.flash("error", "Internal Server Error");
    res.redirect("/owner/admin");
  }
};

module.exports = createProducts;
