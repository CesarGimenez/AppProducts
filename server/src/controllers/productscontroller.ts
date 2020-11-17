import { Request, Response } from 'express';
import pool from '../database';

class ProductsController {
    public async list (req: Request, res: Response) {
        const product = await pool.query('SELECT * FROM products');
        res.json(product);
    } 
    public async getOne (req: Request, res: Response) {
        const {id} = req.params;
        const product = await pool.query('SELECT * FROM product WHERE idproduct = ?', [id]);
        console.log(product);
    } 
    public async create (req: Request, res: Response){
        await pool.query('INSERT INTO company set ?', [req.body]);
        res.json("saved");
    }
    public async update (req: Request, res: Response){
        await pool.query('UPDATE FROM company WHERE ?', [req.body]);
    }
    public async delete (req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM company WHERE idcompany = ?', [id]);
        res.json('Eliminated');
    }
}

const productsController = new ProductsController();
export default productsController;