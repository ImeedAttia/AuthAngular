# Secure Angular Authentication Project

This Angular project demonstrates a secure authentication setup with guards, interceptors, services, and secure routing.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/secure-angular-auth.git
   cd secure-angular-auth
2. Install dependencies:
   ```bash
   npm install
3. Run the development server:
  ```bash
  ng serve --open

This will open the application in your default browser.

# Features

## Authentication Service (auth.service.ts)

- Handles user authentication logic.
- Modify the isAuthenticated method to implement your authentication logic.
## Auth Guard (auth.guard.ts)
- Protects routes from unauthorized access.
- Redirects to the login page if the user is not authenticated.
## Auth Interceptor (auth.interceptor.ts)
- Handles HTTP requests to include authentication tokens.
 -Modify as needed for your specific authentication mechanism.
## Secure Routing
- Utilizes Angular routing with guards to secure navigation.
##LinkedIn Learning Tutorial
For a detailed tutorial on securing Angular applications, check out the [LinkedIn Learning Course](https://www.linkedin.com/pulse/mastering-angular-16-authentication-build-secure-seamless-attia-imed/?trackingId=n2w3WspwTTeFXaKQ%2BwRHcA%3D%3D)
 on securing Angular applications. This course covers various security aspects, including authentication, authorization, and securing API communications.

## Contributing
Feel free to contribute to this project by following the standard GitHub flow:

1. Fork the repository
2. Create a new branch (git checkout -b feature/new-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add new feature')
5. Push to the branch (git push origin feature/new-feature)
6. Create a new Pull Request
   
