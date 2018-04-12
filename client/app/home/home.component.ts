﻿import { Component, OnInit } from '@angular/core';
import { Boat } from '../_models/index';
import { User } from '../_models/index';
import { BoatService } from '../_services/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    boatService: BoatService;

    users: User[] = [];
    boats: Boat[] = [];

    constructor(private userService: UserService, boatService: BoatService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //this.boats = this.boatService.getAll()
        this.boatService = boatService;
        this.loadAllBoats();
        console.log(this.currentUser.email)

    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllBoats() {
        
        this.boatService.getAll()
            .subscribe(
                data => {
                    this.boats = data;
                    console.log(data);
                },
                error => {
                    alert(error);
                }
            )

    }
}