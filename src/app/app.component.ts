import { Component, ViewEncapsulation } from '@angular/core';
import { tests } from './tests';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExecutionRunner';
  public selectedValues: any[] = [];
  public gridExecution = false;

  public gridView: GridDataResult;
  public items: any[] = tests;
  public mySelection: number[] = [];
  public pageSize = 10;
  public skip = 0;

  constructor() {
    this.loadItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();

    // Optionally, clear the selection when paging
    // this.mySelection = [];
  }

  private loadItems(): void {
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
    };
  }
  lobs = [{
    "lob": "LOB 1",
    "projects": [
      {
        "name": "Project - 1",
        "releases": [
          {
            "name": "Release 1",
            "applications": [{
              "name": "Application 1"
            },
            {
              "name": "Application 2"
            }]
          },
          {
            "name": "Release 2",
            "applications": [{
              "name": "Application 3"
            },
            {
              "name": "Application 4"
            }]
          }
        ]
      },
      {
        "name": "Project - 2",
        "releases": [
          {
            "name": "Release 1",
            "applications": [{
              "name": "Application 1"
            },
            {
              "name": "Application 2"
            }]
          },
          {
            "name": "Release 2",
            "applications": [{
              "name": "Application 3"
            },
            {
              "name": "Application 4"
            }]
          }
        ]
      }
    ]
  },
  {
    "lob": "LOB 2",
    "projects": [
      {
        "name": "Project - 1",
        "releases": [
          {
            "name": "Release 1",
            "applications": [{
              "name": "Application 1"
            },
            {
              "name": "Application 2"
            }]
          },
          {
            "name": "Release 2",
            "applications": [{
              "name": "Application 3"
            },
            {
              "name": "Application 4"
            }]
          }
        ]
      },
      {
        "name": "Project - 2",
        "releases": [
          {
            "name": "Release 1",
            "applications": [{
              "name": "Application 1"
            },
            {
              "name": "Application 2"
            }]
          },
          {
            "name": "Release 2",
            "applications": [{
              "name": "Application 3"
            },
            {
              "name": "Application 4"
            }]
          }
        ]
      },
      { "name": "Project - 2", "releases": ["orc1", "oruc2", "oruc3"] },
      { "name": "Project - 3", "releases": ["3c1", "3c2", "3c3"] }
    ]
  },
  {
    "lob": "LOB 3",
    "projects": []
  }
  ]

  projects = []; releases = []; applications = [];
  lobChange(e) {
    this.selectedValues = [];
    this.lobs.filter(element => {
      if (element.lob == e.target.value) {
        this.projects = element.projects;
        this.selectedValues.push(element.lob);
      }
    });
    this.releases = []
    this.applications = [];
  }
  projectChange(evt) {
    debugger;
    this.projects.filter(element => {
      if (element.name == evt.target.value) {
        this.releases = element.releases;
        this.selectedValues.splice(1, 2, element.name);
      }
    })
    this.applications = [];
  }

  releaseChange(evt) {
    this.releases.filter(element => {
      if (element.name == evt.target.value) {
        this.applications = element.applications;
        this.selectedValues.splice(2, 1, element.name);
      }
    })
  }
}
