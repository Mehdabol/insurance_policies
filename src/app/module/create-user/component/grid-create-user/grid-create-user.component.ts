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
        const filterData = {Take: data.endRow, Skip: data.startRow};
        GridCreateUserComponent.self.service.getGridData(filterData)
          .subscribe((res: any) => {
            if (data) {
              params.successCallback(res.Items, res.TotalRecord);
              // GridCreateUserComponent.self.autoSize();
              (res.Items.length === 0 || res.Items == null) ? GridCreateUserComponent.self.gridApi.showNoRowsOverlay() :
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
        headerName: 'نام ',
        field: 'FirstName',
      }, {
        headerName: ' نام خانوادگی',
        field: 'LastName',
      }, {
        headerName: 'نام پدر',
        field: 'FatherName',
      }, {
        headerName: 'تاریخ تولد',
        field: 'BirthDate',
      }, {
        headerName: 'شماره تلفن',
        field: 'MobileNumber',
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
