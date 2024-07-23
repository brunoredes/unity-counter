import { Injectable } from '@angular/core';
import { Buffer, Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { Unity } from '../../../characters/models/unity';
import { Export } from '../contract/export';

@Injectable({
  providedIn: 'root',
})
export class XlsxService implements Export {
  private worker!: Worker;
  constructor() {}

  public export(charactersByCost: Unity, fileName: string) {
    if (!this.worker) {
      this.worker = new Worker(new URL('./xlsx.worker', import.meta.url));
    }
    this.worker.postMessage({ charactersByCost, fileName });

    const handleMessage = ({ data }: MessageEvent) => {
      this.generateBlob(data.buffer, data.fileName);
      this.worker.removeEventListener('message', handleMessage);
    };

    this.worker.addEventListener('message', handleMessage);
  }

  private generateBlob(buffer: Buffer, fileName: string) {
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, `${fileName}.xlsx`);
  }
}
