import path from 'path';
import inputObj from './json/input.json';
import { getDirectoryPath } from './utils';
import { saveJsonToFile } from './fileOperations';
import { joinColorSettings } from './joinColorSettings';

const outputJson = joinColorSettings(inputObj as []);
const directoryPath = getDirectoryPath(import.meta.url);
saveJsonToFile(path.join(directoryPath, './json/output.json'), outputJson);
