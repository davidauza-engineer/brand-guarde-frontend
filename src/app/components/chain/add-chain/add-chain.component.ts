import { Component, OnInit } from '@angular/core';
import { ChainService } from 'src/app/services/chain/chain.service';

@Component({
  selector: 'app-add-chain',
  templateUrl: './add-chain.component.html',
  styleUrls: ['./add-chain.component.css']
})
export class AddChainComponent implements OnInit {
 chain = {
    name: ''
  };
  submitted = false;
  errors = '';

  constructor(private chainService: ChainService) { }

  ngOnInit() {
  }

  saveChain() {
    const data = {
      chain: {
        name: this.chain.name
      }
    };

    this.chainService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.errors = ''
          this.submitted = true;
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  newChain() {
    this.submitted = false;
    this.errors = ''
    this.chain = {
      name: ''
    };
  }
}
