import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadJSONFile = () => {
    try {
      const filePath = join(__dirname, 'templates.json');
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading JSON file:', error);
      return [];
    }
}
  
export default {
    templateData: loadJSONFile('./templates.json'),
    extendedTemplateData: loadJSONFile('./extendedTemplate.json')
};