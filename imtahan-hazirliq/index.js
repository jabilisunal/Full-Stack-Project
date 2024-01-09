import express from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';
const app = express()
const port = 3200

app.use(express.json())
app.use(cors())
const productSchema = new Schema({
    name: String,
    price: Number,
});

const ProductModel = mongoose.model('product', productSchema);

app.get('/', async (req, res) => {
    try {
        const product = await ProductModel.find({})
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await ProductModel.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }

})
app.post('/', async (req, res) => {
    try {
        const { name, price } = req.body
        const newProduct = new ProductModel({ name, price })
        await newProduct.save();
        res.send("product added")
    } catch (error) {
        res.send(error.message)
    }

})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await ProductModel.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect('mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})