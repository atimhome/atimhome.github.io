import { Component } from '@angular/core';
import { DynamicFlatNode, DynamicDatabase, DynamicDataSource } from './dynamic-tree';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [DynamicDatabase]
})

export class TreeComponent {
  constructor(private database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, this.database);
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  setRoot(item: string): void {
    this.database.rootLevelNodes = [item];
    this.dataSource = new DynamicDataSource(this.treeControl, this.database);
  }

  resetRoot(): void {
    const database: DynamicDatabase = new DynamicDatabase();
    this.database = database;
    this.dataSource = new DynamicDataSource(this.treeControl, database);
  }
}
