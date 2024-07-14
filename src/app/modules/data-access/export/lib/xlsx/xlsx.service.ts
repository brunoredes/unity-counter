import { Injectable } from '@angular/core';
import { Buffer, Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { Unity } from '../../../characters/models/unity';
import { Export } from '../contract/export';

@Injectable({
  providedIn: 'root',
})
export class XlsxService implements Export {
  constructor() {}

  public export(charactersByCost: Unity, fileName: string) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    worksheet.addRow(['Unity', 'Times bought']);

    Object.keys(charactersByCost).forEach((cost) => {
      charactersByCost[parseInt(cost, 10)].forEach((character) => {
        worksheet.addRow([character.name, character.timesBought]);
      });
    });
    console.log(charactersByCost);
    workbook.xlsx.writeBuffer().then((buffer) => {
      this.generateBlob(buffer, fileName);
    });
  }

  private generateBlob(buffer: Buffer, fileName: string) {
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, `${fileName}.xlsx`);
  }
}
