import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    public async index (req: Request, res: Response) {
        const company = await pool.query('SELECT * FROM company');
        res.json(company);
    } 
    public async getOne (req: Request, res: Response) {
        const {id} = req.params;
        const company = await pool.query('SELECT * FROM company WHERE idcompany = ?', [id]);
        console.log(company);
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

export const indexController = new IndexController();