import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() foodPageTags?: string[]; // Input property to receive food tags
  tags?: Tag[];

  constructor() { }

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = []; // Initialize tags array
    }
  }
}
