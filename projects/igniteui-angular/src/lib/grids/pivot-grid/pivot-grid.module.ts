import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgxGridModule } from '../grid/grid.module';
import { IgxPivotGridComponent } from './pivot-grid.component';
import { IgxPivotRowComponent } from './pivot-row.component';
import { IgxGridPivotColumnsPipe, IgxGridPivotDataPipe, IgxPivotGridFilterPipe } from './pivot-grid.pipes';
import { IgxGridComponent } from '../grid/grid.component';

/**
 * @hidden
 */
@NgModule({
  declarations: [
    IgxPivotGridComponent,
    IgxPivotRowComponent,
    IgxGridPivotColumnsPipe,
    IgxGridPivotDataPipe,
    IgxPivotGridFilterPipe
  ],
  exports: [
    IgxGridModule,
    IgxPivotGridComponent,
    IgxPivotRowComponent
  ],
  imports: [
    IgxGridModule,
  ],
  entryComponents: [
    IgxGridComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IgxPivotGridModule {
}
