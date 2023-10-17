import inputObj from '../json/input.json';
import { saveJsonToFile } from './file-operations';
import { joinColorSettings } from './join-color-settings';

const bootstrap = () => {
  const outputJson = joinColorSettings(inputObj as unknown as []);
  saveJsonToFile('./json/output.json', outputJson);
};

bootstrap();
