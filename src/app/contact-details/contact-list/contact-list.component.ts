import { Component } from '@angular/core';
import { contact } from '../../models/contact-details.models';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';
import { ContactDetailsService } from '../../../shared/contact-details.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: contact[] = [];

  constructor(
    private router: Router,
    private contactService: ContactDetailsService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["login"]);
    }
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getAllContacts().subscribe(
      (contacts: contact[]) => {
        this.contacts = contacts;
      },
      (error: any) => {
        console.error("Error loading contacts:", error);
      }
    );
  }

  addDetails() {
    this.router.navigate(["add-contact"]);
  }

  editContact(id: number) {
    this.router.navigate(["edit-contact", id]);
  }

  deleteContact(id: number) {
    if (confirm("Are you sure you want to delete this contact?")) {
      this.contactService.deleteContact(id).subscribe(() => {
        this.loadContacts();
      });
    }
  }

}
