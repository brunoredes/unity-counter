/// <reference lib="webworker" />

import { Workbook } from 'exceljs';
import { Character } from '../../../characters/models/unity';

addEventListener('message', ({ data }) => {
  const { charactersByCost, fileName } = data;
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');
  worksheet.addRow(['Unity', 'Times bought']);

  Object.keys(charactersByCost).forEach((cost) => {
    charactersByCost[parseInt(cost, 10)].forEach((character: Character) => {
      worksheet.addRow([character.name, character.timesBought]);
    });
  });

  workbook.xlsx.writeBuffer().then((buffer) => {
    postMessage({ buffer, fileName });
  });
});
