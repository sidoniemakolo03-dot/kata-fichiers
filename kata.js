import { writeFileSync, readFileSync } from 'node:fs';

writeFileSync('bonjour.txt', 'Bonjour Ada !', 'utf8');
const contenu = readFileSync('bonjour.txt', 'utf8');
console.log("-> Je lance l'écriture du fichier...");
writeFileSync('bonjour.txt', 'Au revoir Ada !', 'utf8');
console.log("-> Aurevoir ada :", contenu);
console.log(contenu);
console.log("-> Je lance l'écriture du fichier...");
writeFileSync('bonjour.txt', 'Au revoir Ada !', 'utf8');
console.log("-> Contenu lu du fichier :", contenu);

const courses = ["pain", "lait", "pommes"];

const texteCourses = courses.join('\n');

writeFileSync('courses.txt', texteCourses, 'utf8');
console.log(contenu);
