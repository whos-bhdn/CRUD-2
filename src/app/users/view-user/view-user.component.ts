import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  displayedColumns = ['id', 'name', 'username'];
  dataToShow = [];
  userDetail: any;
  userId: string = '';
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      this.userId = id;
    })

    this.userService.viewUsers(this.userId).subscribe(data => {
      this.userDetail = data;
    });

  }

}
