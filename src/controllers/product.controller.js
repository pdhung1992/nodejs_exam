

const productModel = require('./../models/product.model');

exports.productList = async function (req, res){
    try {
        const products = await productModel.find();
        res.render('product/product', { products: products });
    } catch (error) {
        res.send('Error: ' + error.message);
    }
}

exports.addProduct = async function (req, res) {
    const data = req.body;
    try {
        const newProduct = new productModel(data);
        await newProduct.save();
        res.redirect('/product/list');
    }catch (e){
        res.send('Adding product error: ' + e.message);
    }
}

exports.editProduct = async function(req, res){
    const existProductId = req.params.id;
    const data = req.body;
    try {
        const existProduct = await productModel.findById(existProductId);
        if(!existProduct){
            res.send("Product not found!");
        }
        const updateProduct = await productModel.findByIdAndUpdate(existProductId, data);
        res.redirect('/product/list');
    }catch (e){
        res.send('Editing product error: ' + e.message);
    }
}

exports.deleteProduct = async function(req, res){
    const existProductId = req.params.id;
    try {
        const existProduct = await productModel.findById(existProductId);
        if(!existProduct){
            res.send('Product not found!');
        }
        const deleteProduct = await productModel.deleteOne({_id: existProductId});
        res.redirect("/product/list");
    }catch (e){
        res.send('Deleting product error: ' + e.message);
    }
}