import { Router } from "express";
import { cartManager } from "../index.js";


const cartRouter = Router();

cartRouter.post('/', async(req,res) => {
  try{
    const response = await cartManager.newCart()
    res.json(response)
  }catch(e){
    res.send('Error al crear carrito')
  }
})

cartRouter.get('/:cid', async (req,res) => {
  const {cid} = req.params
  try{
    const response = await cartManager.getCartProducts(cid)
    res.json(response)
  }catch(e){
    console.log('Error al intentar enviar los productos al carrito')
  }
})

cartRouter.post('/:cid/products/:pid', async(req, res) => {
  const { cid, pid } = req.params;
  try{
    await cartManager.addProductToCart(cid, pid)
    res.send('Producto agregado exitosamente')
  }catch(e){
    res.send('Error al intentar guardar productos en el carrtio')
  }
})

export {cartRouter}