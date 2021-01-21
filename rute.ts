import { Router } from 'https://deno.land/x/oak/mod.ts';
import { home, signup, saveuser, kategori } from './controllers/blog.ts';

const router = new Router();

router
    .get("/", home)
    .get("/daftar", signup)
    .post("/simpanuser", saveuser)
    .get("/Kategori/:id", kategori)
    .get("/About", (ctx) => {
        ctx.response.body = "About";
    });
export default router;