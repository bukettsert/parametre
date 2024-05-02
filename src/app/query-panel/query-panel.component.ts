import { Component, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Feature } from '../shared/interfaces/feature.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-query-panel',
  templateUrl: './query-panel.component.html',
  styleUrls: ['./query-panel.component.scss']
})
export class QueryPanelComponent {
  trees: any[] = [];
  filteredTrees: any[] = [];
  Sci_NameOptions?: any[];
  ConditionOptions?: any[];
  CollectedOptions?: any[];
  CrewOptions?: any[];
  StatusOptions?: any[];
  selectedSci_Name: string[] = [];
  selectedCondition: string[] = [];
  selectedCollected: string[] = [];
  selectedCrew: string[] = [];
  selectedStatus: string[] = [];

  displayedColumns: string[] = ['Sci_Name', 'Condition', 'Collected', 'Crew', 'Status'];
  dataSource!: MatTableDataSource<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTrees();
  }

  loadTrees() {
    this.http.get<{features: Feature[]}>('https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json').subscribe({
      next: (response) => {
        this.trees = response.features.map(feature => feature.attributes);
        this.dataSource = new MatTableDataSource(this.trees);
        console.log(this.trees);
        
        this.setupFilters();
      },
      error: (error) => console.error('Data loading error:', error)
    });
  }
  
  filterTrees() {
    this.filteredTrees = this.trees.filter(tree =>
      (!this.selectedSci_Name.length || this.selectedSci_Name.includes(tree.Sci_Name)) &&
      (!this.selectedCondition.length || this.selectedCondition.includes(tree.Condition)) &&
      (!this.selectedCollected.length || this.selectedCollected.includes(tree.Collected)) &&
      (!this.selectedCrew.length || this.selectedCrew.includes(tree.Crew)) &&
      (!this.selectedStatus.length || this.selectedStatus.includes(tree.Status))
    );
    this.dataSource.data = this.filteredTrees;
  }
  
  setupFilters() {
    this.Sci_NameOptions = this.getUniqueOptions(this.trees, 'Sci_Name');
    this.ConditionOptions = this.getUniqueOptions(this.trees, 'Condition');
    this.CollectedOptions = this.getUniqueOptions(this.trees, 'Collected');
    this.CrewOptions = this.getUniqueOptions(this.trees, 'Crew');
    this.StatusOptions = this.getUniqueOptions(this.trees, 'Status');
  }

  getUniqueOptions(data: any[], field: string) {
    return [...new Set(data.map(item => item[field]))].map(option => ({ label: option, value: option }));
  }
  
  runQuery(){
     this.filterTrees();
  }

 }

@NgModule({
  declarations: [
    QueryPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [QueryPanelComponent]
})
export class QueryPanelModule { }
