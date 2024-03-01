// import { Component } from '@angular/core';
// import { AuthService } from '../../shared/auth.service';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   username: any;
//   password: any;

//   constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

//   login() {
//     const loginData = {
//       username: "admin",
//       password: "@dmiN123",
//     };

//     this.authService.login(loginData).subscribe(
//       (response: any) => {
//         console.log("Login response:", response);
//         if (response && response.token) {
//           console.log("Login successful. Token:", response.token);
//           localStorage.setItem("token", response.token); 
//           this.router.navigate(["list"]); 
//         } else {
//           console.error("Login failed. Invalid response:", response);
//         }
//       },
//       // (error) => {
//       //   console.error("Login failed:", error);
//       //}
//     );
//   }
//   onSubmit() {
//     // Perform authentication logic here
//     // For demo purposes, assume login is successful if username and password are not empty
//     if (this.username && this.password) {
//       this.snackBar.open('Login successful!', 'Close', {
//         duration: 3000 // Snackbar duration in milliseconds
//       });
//     }
//   }

// }

import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', ]
})
export class LoginComponent {
  username: string = 'admin';
  password: string = '@dmiN123';

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password,
    };
  
    this.authService.login(loginData).subscribe(
      (response: any) => {
        // console.log("Login response:", response);
        if (response && response.token) {
          // console.log("Login successful. Token:", response.token);
          localStorage.setItem("token", response.token); 
          this.router.navigate(["list"]); 
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
        } else {
          // console.error("Login failed. Invalid response:", response);
          this.snackBar.open('Login failed. Please check your username and password.', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      },
      (error) => {
        // console.error("Login failed:", error);
        this.snackBar.open('An error occurred. Please try again later.', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    );
  }
  

  onSubmit() {
    if (this.username && this.password) {
      this.login(); 
      this.snackBar.open('Login successful!', 'Close', {
        duration: 3000 ,
        horizontalPosition: 'end', 
        verticalPosition: 'top',
        panelClass: ['custom-snackbar']
      });
    } else {
      this.snackBar.open('Please enter username and password.', 'Close', {
        duration: 3000 
      });
    }
  }

}

