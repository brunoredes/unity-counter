import { Component, inject } from '@angular/core';
import { XlsxService } from '../../../data-access/export/lib/xlsx/xlsx.service';
import { CostService } from '../../../data-access/characters/lib/cost/cost.service';
import { Character } from '../../../data-access/characters/models/unity';

@Component({
  selector: 'app-xls',
  standalone: true,
  imports: [],
  templateUrl: './xls.component.html',
  styleUrl: './xls.component.scss',
})
export class XlsComponent {
  private readonly xlsxService: XlsxService = inject(XlsxService);
  private readonly costService: CostService = inject(CostService);

  public characters: { [key: number]: Character[] } = {};
  public costs: number[] = this.costService.getAllCosts();

  public exportData() {
    this.iterateData();
    this.xlsxService.export(this.characters, 'unity_counter');
  }

  private iterateData() {
    this.costs.forEach((cost) => {
      this.characters[cost] = this.costService.getCharactersByCost(cost);
    });
  }
}
