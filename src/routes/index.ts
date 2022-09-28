import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_TO_ROUTES = `${__dirname}`;
const router = Router();

/**
 * It takes a string, removes the '.ts' extension from it, and returns the result
 * @param {string} fileName - The name of the file that you want to clean.
 * @returns A function that takes a string and returns a string.
 */
const cleanFileName = (fileName: string) => {
    return fileName.split('.').shift();
}

readdirSync(PATH_TO_ROUTES).filter((file) => {
    return file !== 'index.ts';
}).forEach((file) => {
  const cleanName = cleanFileName(file);
  import(`./${cleanName}`).then((moduleRoute) => {
    console.log(`Imported route: /${cleanName}`);
    router.use(`/${cleanName}`, moduleRoute.router);
  });
});

export { router };