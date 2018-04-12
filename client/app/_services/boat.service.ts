import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Boat } from '../_models/index';

@Injectable()
export class BoatService {
    constructor(private http: HttpClient) { }

    getAll() {
        // /api refers to students.js
        return this.http.get<Boat[]>(appConfig.apiUrl + '/api/boats');
    }

    
    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/api/boats' + _id);
    }
    
    create(boat: Boat) {
        return this.http.post(appConfig.apiUrl + '/token/register', boat);
    }
    /*
    update(user: User) {
        return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/api/users/' + _id);
    }
    */
}