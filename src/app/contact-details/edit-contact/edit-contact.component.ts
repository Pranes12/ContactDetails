import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetailsService } from '../../../shared/contact-details.service';
import { contact } from '../../models/contact-details.models';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {

  contact: contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: 0,
  };

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactDetailsService) {}

  ngOnInit(): void {
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    if (contactId) {
      this.contactService.getContactById(contactId).subscribe(
        (contact) => {
          this.contact = contact;
        },
        (error) => {
          console.error('Error loading contact:', error);
        }
      );
    }
  }

  updateContact() {
    this.contactService.updateContact(this.contact.id, this.contact).subscribe(
      () => {
        this.router.navigate(['list']);
      },
      (error) => {
        console.error('Error updating contact:', error);
      }
    );
  }

}
