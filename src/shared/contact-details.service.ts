import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from '../app/models/contact-details.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailsService {

  contactList: contact[] = [];
  private apiUrl = "https://localhost:7133/api/Contact";

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<contact[]> {
    return this.http.get<contact[]>(this.apiUrl);
  }

  getContactById(id: number): Observable<contact> {
    return this.http.get<contact>(`${this.apiUrl}/${id}`);
  }

  addContact(contact: contact): Observable<contact> {
    return this.http.post<contact>(this.apiUrl, contact);
  }

  updateContact(id: number, contact: contact): Observable<contact> {
    return this.http.put<contact>(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
