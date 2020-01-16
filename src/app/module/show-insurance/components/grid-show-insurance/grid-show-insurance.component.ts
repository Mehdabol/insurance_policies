import {Component, OnInit} from '@angular/core';
import {LocalText} from '../../../../core/grid/ag-grid_fa';
import {Router} from '@angular/router';
import {AlertService} from '../../../../core/services/alert.service';
import {ButtonGridPdfComponent} from '../button-grid-pdf/button-grid-pdf.component';

@Component({
  selector: 'app-grid-show-insurance',
  templateUrl: './grid-show-insurance.component.html',
  styleUrls: ['./grid-show-insurance.component.scss']
})
export class GridShowInsuranceComponent implements OnInit {

  static self: GridShowInsuranceComponent;
  fromDate = '';
  toDate = '';
  nationalCode = ''; // '0057901015';
  paramGrid;
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };
  rowSelection;
  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;
  rowModelType;
  sideBar;
  rowData = [];
  maxConcurrentDatasourceRequests;
  rowGroupPanelShow;
  cacheBlockSize;
  localeText;
  frameworkComponents;

  constructor(private router: Router,
              private alertService: AlertService,) {
    this.GridOption();
  }

  ngOnInit() {
    GridShowInsuranceComponent.self = this;
  }


  onGridReady(params) {
    this.paramGrid = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        const valaa = [
          {Name: '2', Vazeiyat: '33'}
        ];
        params.successCallback(valaa, valaa.length);

        // GridShowInsuranceComponent.self.service.getGridData()
        //   .subscribe((res: any) => {
        //     if (data) {
        //       params.successCallback(res.Data, res.Data.length);
        //       // GridShowInsuranceComponent.self.autoSize();
        //       (res.Data.length === 0 || res.Data == null) ? GridShowInsuranceComponent.self.gridApi.showNoRowsOverlay() :
        //         GridShowInsuranceComponent.self.gridApi.hideOverlay();
        //     } else {
        //       params.failCallback();
        //     }
        //   });
      }
    };
    params.api.setServerSideDatasource(dataSource);

  }


  GridOption() {
    this.rowSelection = 'single';
    this.columnDefs = [
      {
        headerName: 'id',
        field: 'bid',
        hide: true
      }, {
        headerName: 'نام و نام خانوادگی',
        field: 'Name',
      }, {
        headerName: 'شماره پاسپورت',
        field: 'Vazeiyat',
      }, {
        headerName: 'مدت اقامت(روز)',
        field: 'Etebar',
      }, {
        headerName: 'شماره بیمه نامه',
        field: 'ShomareBimeName',
      }, {
        headerName: 'وضعیت ابطال',
        field: 'OnlineCode',
      },
      {
        headerName: 'کاربر ثبت',
        field: 'OnlineCode',
      }, {
        headerName: 'زمان ثبت',
        field: 'OnlineCode',
      }, {
        headerName: 'چاپ ',
        cellRenderer: 'detailButton',
        minWidth: 85,
        cellRendererParams: {
          onClick: this.onPdfButton.bind(this),
          label: 'جزئیات',
          icon: 'fa fa-download'
        }
      },
    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;
    this.frameworkComponents = {detailButton: ButtonGridPdfComponent};

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true
    };

    this.rowModelType = 'serverSide';
    this.maxConcurrentDatasourceRequests = 3;
    this.rowGroupPanelShow = 'always';
  }


  autoSize() {
    // const allColumnIds = [];
    // this.gridColumnApi.getAllColumns().forEach((column) => {
    //   allColumnIds.push(column.colId);
    // });
    // this.gridColumnApi.autoSizeColumns(allColumnIds);
  }


  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    // const allColumnIds = [];
    // this.gridColumnApi.getAllColumns().forEach((column) => {
    //   allColumnIds.push(column.colId);
    // });
    // this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onPdfButton() {

  }
}
