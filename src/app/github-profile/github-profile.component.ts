import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   let username = params.get('username');
    //   console.log(username);
    // })

    let username = this.route.snapshot.paramMap.get('username');
    console.log(username);
  }

}
