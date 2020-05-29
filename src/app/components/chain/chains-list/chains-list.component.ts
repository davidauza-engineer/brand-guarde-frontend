import { Component, OnInit } from '@angular/core';
import { ChainService } from 'src/app/services/chain/chain.service';

@Component({
  selector: 'app-chains-list',
  templateUrl: './chains-list.component.html',
  styleUrls: ['./chains-list.component.css']
})
export class ChainsListComponent implements OnInit {

  chains: any;
  currentChain = null;
  currentIndex = -1;
  errors = ''

  constructor(private chainService: ChainService) { }

  ngOnInit() {
    this.retrieveChains();
  }

  retrieveChains() {
    this.chainService.getAll()
      .subscribe(
        data => {
          this.chains = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error)
        });
  }

  refreshList() {
    this.retrieveChains();
    this.currentChain = null;
    this.currentIndex = -1;
  }

  setActiveChain(chain, index) {
    this.currentChain = chain;
    this.currentIndex = index;
  }
}
