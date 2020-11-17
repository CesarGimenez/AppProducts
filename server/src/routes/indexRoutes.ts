import { Router } from 'express';
import { indexController } from '../controllers/indexcontroller';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
       this.config();
    }
    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/:id', indexController.getOne);
        this.router.post('/', indexController.create);
        this.router.put('/:id', indexController.update);
        this.router.delete('/:id', indexController.delete);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;