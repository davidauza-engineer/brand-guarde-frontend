import { Component, OnInit } from '@angular/core';
import { ChainService } from 'src/app/services/chain/chain.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chain-details',
  templateUrl: './chain-details.component.html',
  styleUrls: ['./chain-details.component.css']
})
export class ChainDetailsComponent implements OnInit {
  currentChain = null;
  message = '';
  errors = '';

  constructor(
    private chainService: ChainService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getChain(this.route.snapshot.paramMap.get('id'));
  }

  getChain(id) {
    this.chainService.get(id)
      .subscribe(
        data => {
          this.currentChain = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  updateChain() {
    this.chainService.update(this.currentChain.id, this.currentChain)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The chain was updated successfully!';
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }

  deleteChain() {
    this.chainService.delete(this.currentChain.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/chains'])
        },
        error => {
          console.log(error);
          this.errors = JSON.stringify(error.error);
        });
  }
}
