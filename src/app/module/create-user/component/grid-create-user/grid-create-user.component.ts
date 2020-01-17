import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../../../core/services/alert.service';
import {LocalText} from '../../../../core/grid/ag-grid_fa';
import {CreateUserService} from '../../service/create-user.service';

@Component({
  selector: 'app-grid-create-user',
  templateUrl: './grid-create-user.component.html',
  styleUrls: ['./grid-create-user.component.scss']
})
export class GridCreateUserComponent implements OnInit {

  static self: GridCreateUserComponent;
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
              private alertService: AlertService,
              private service: CreateUserService) {
    this.GridOption();
  }

  ngOnInit() {
    GridCreateUserComponent.self = this;
  }


  onRowClicked(event: any) {
  }

  onSearch() {
    this.onGridReady(this.paramGrid);
  }

  onGridReady(params) {
    this.paramGrid = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        const filterData = {take: data.endRow, skip: data.startRow};
        GridCreateUserComponent.self.service.getGridData(filterData)
          .subscribe((res: any) => {
            if (data) {
              debugger;
              params.successCallback(res.Data, res.Data.length);
              // GridCreateUserComponent.self.autoSize();
              (res.Data.length === 0 || res.Data == null) ? GridCreateUserComponent.self.gridApi.showNoRowsOverlay() :
                GridCreateUserComponent.self.gridApi.hideOverlay();
            } else {
              params.failCallback();
            }
          });
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
        headerName: 'چاپ',
        field: 'OnlineCode',
      },
    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;

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
}
