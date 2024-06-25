# Travel Planner App API
#### Description
This API is designed to handle the details of travel planner management. The API helps users organize their trips efficiently, keeping all bookings, reservations, and schedules in one place.
#### Dependencie
##### bcryptjs :
Hashing Passwords: Its primary purpose is to securely hash passwords before storing them in a database. Hashing transforms the password into a fixed-length string of characters using a cryptographic hash function.

Security: bcryptjs employs the bcrypt hashing algorithm, which is designed to be slow and computationally intensive. This makes it resistant to brute-force attacks and rainbow table attacks, where an attacker tries to guess passwords by hashing likely inputs and comparing them to hashes stored in a database.

Salt Generation: bcryptjs automatically handles salt generation and includes it in the hashed password. Salting adds randomness to each hashed password, even if the original passwords are the same, making it significantly more difficult for attackers to use precomputed tables (rainbow tables) for cracking passwords.

Easy Integration: It's straightforward to integrate bcryptjs into Node.js applications using its simple API, typically with functions like bcrypt.hash() for hashing a password and bcrypt.compare() for comparing a password attempt with a stored hash.

##### cloudinary
Media Storage: Cloudinary offers secure cloud storage for all types of media assets, including images, videos, and audio files. It allows developers to upload media files to the cloud and manage them through an intuitive dashboard or API.

Image and Video Manipulation: One of Cloudinary's standout features is its powerful image and video manipulation capabilities. It provides a wide range of transformation options such as resizing, cropping, rotating, adjusting quality, applying effects (e.g., blur, sharpen), and converting formats. These transformations can be applied dynamically via URLs or programmatically using APIs.

Optimization: Cloudinary automatically optimizes images and videos for delivery on the web, ensuring fast loading times and reducing bandwidth usage without compromising quality. It supports formats like JPEG, PNG, GIF, WebP for images and MP4, WebM, and HLS for videos.

Responsive Delivery: Cloudinary supports responsive design by delivering optimized images and videos based on the device and viewport size. This helps improve user experience and performance across different devices and screen resolutions.

CDN Integration: Cloudinary operates on a global content delivery network (CDN), ensuring fast and reliable delivery of media assets to users worldwide. This helps reduce latency and improve overall website performance.

Accessibility: It provides features for managing accessibility of media assets, such as generating accessible alt text for images based on AI analysis, ensuring compliance with accessibility standards.

Security: Cloudinary prioritizes security with features like secure uploading, URL signing to prevent unauthorized access to assets, and encryption of media files at rest.

Integration: It integrates seamlessly with various development frameworks, content management systems (CMS), e-commerce platforms, and programming languages through SDKs and plugins. Popular integrations include WordPress, Shopify, React, Angular, and more.

Analytics: Cloudinary offers analytics and insights into media usage, performance metrics, and trends, helping businesses understand how their media assets are being consumed and optimizing accordingly.

Customization and Branding: Developers can customize Cloudinary's functionality to fit specific business needs, including adding watermarks, overlays, text annotations, and applying branded transformations.
##### cors
Origin Policy: The Same-Origin Policy is a fundamental security measure in web browsers that prevents a web page from making requests to another domain, for example, from example.com to api.example2.com.

Need for CORS: CORS is necessary when a web application hosted on one domain (origin) needs to make API requests to a different domain. Without CORS, browsers restrict these cross-origin requests for security reasons.

How CORS Works: CORS works by adding HTTP headers to requests and responses. When a browser sends a cross-origin request, it includes an Origin header that specifies the origin of the requesting page. The server then responds with CORS headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, etc.) indicating whether it allows requests from that origin.

CORS Headers:

Access-Control-Allow-Origin: Specifies which origins are allowed to access the server's resources. It can be set to a specific origin (* for all origins or a specific domain).
Access-Control-Allow-Methods: Specifies the HTTP methods (GET, POST, PUT, DELETE, etc.) that are allowed for cross-origin requests.
Access-Control-Allow-Headers: Specifies which HTTP headers can be used in a cross-origin request.
Access-Control-Allow-Credentials: Indicates whether the browser should include credentials (like cookies or HTTP authentication) in cross-origin requests.
Pre-flight Requests: For certain types of cross-origin requests (e.g., requests with custom headers or methods other than GET, POST, or HEAD), browsers send a pre-flight request (OPTIONS) to the server to determine if the actual request is safe to send. The server must respond with appropriate CORS headers to authorize the actual request.

Client-Side Implementation: On the client-side (e.g., in JavaScript using fetch or XMLHttpRequest), developers may need to handle CORS issues by configuring requests to include credentials or custom headers, and checking responses for CORS headers.

Server-Side Implementation: On the server-side, developers configure CORS settings in their web server or API server to specify which origins, methods, headers, and credentials are allowed for cross-origin requests.

Security Considerations: While CORS helps mitigate certain types of cross-site request forgery (CSRF) attacks, misconfigurations (e.g., allowing all origins) can introduce security vulnerabilities. It's essential to configure CORS settings carefully based on specific application requirements and security considerations.
##### dotenv
Environment Variables: Environment variables are key-value pairs that are stored outside of your application's codebase and are used to configure how your application behaves in different environments (development, staging, production, etc.). They can include sensitive information such as API keys, database credentials, and configuration settings.

Purpose of dotenv: dotenv simplifies the process of loading environment variables from a .env file into process.env in Node.js applications. This allows developers to keep sensitive information secure and separate from their source code, adhering to best practices for configuration management.
   ##### express
   Middleware: Express.js is known for its middleware system, which allows you to extend the functionality of your application by adding modular components (middleware functions) that handle specific tasks. Middleware can handle requests, modify responses, or execute code asynchronously.

Routing: Express provides a simple and intuitive routing mechanism to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs. Routes are used to map endpoints (URL paths) to specific controller functions that handle requests and generate responses.

HTTP Utility Methods: Express simplifies handling HTTP requests and responses with utility methods like req (request) and res (response), which provide convenient access to request parameters, headers, body, and methods for sending responses.

Template Engines: Although Express itself does not include a template engine, it supports integration with various template engines such as EJS, Pug (formerly Jade), Handlebars, and Mustache, allowing you to dynamically render HTML pages based on data from your application.

Static File Serving: Express makes it easy to serve static files (such as images, CSS, JavaScript) from a directory on your server using the express.static middleware, which simplifies handling of client-side assets.

Error Handling: Express provides built-in error handling middleware and allows you to define custom error-handling middleware functions to manage errors that occur during request processing.

Middleware Ecosystem: The Node.js ecosystem offers a wide range of third-party middleware modules that extend Express's functionality, such as authentication middleware (Passport.js), logging middleware (morgan), and compression middleware (compression).

Integration: Express can be seamlessly integrated with other Node.js modules and frameworks, databases (MongoDB, MySQL, PostgreSQL, etc.), and front-end frameworks (React, Angular, Vue.js) to build full-stack web applications.

Community and Popularity: Express is one of the most widely used web frameworks for Node.js, known for its simplicity, flexibility, and performance. It has a large and active community, which contributes to its ongoing development and support.

REST API Development: Express is commonly used for building RESTful APIs due to its lightweight structure, routing capabilities, and support for middleware. It allows developers to define API endpoints and handle HTTP methods to interact with data resources.
##### express-fileupload
Purpose: Express-fileupload is designed to handle multipart/form-data file uploads in Express.js applications. It simplifies the process of receiving files from clients (e.g., browsers) and storing them on the server.
Security Considerations: When handling file uploads, it's crucial to implement proper validation and security measures to prevent issues like file overwrites, directory traversal attacks, and denial-of-service attacks. Validate file types, limit file sizes, sanitize file names, and store files securely on your server.

Benefits: Express-fileupload simplifies handling file uploads in Express.js applications by providing a straightforward API and integrating seamlessly with existing middleware and route handlers. It saves developers from writing boilerplate code for handling multipart/form-data requests manually.

Alternatives: While express-fileupload is a popular choice, there are other Node.js modules and frameworks for handling file uploads, such as multer and formidable, each with its own set of features and use cases.
##### jsonwebtoken
Definition: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. It is digitally signed and optionally encrypted, making it suitable for use in authentication and information exchange scenarios.

Structure: A JWT consists of three parts separated by dots (.):

Header: Contains metadata about the type of token and the hashing algorithm used.
Payload: Contains claims, which are statements about an entity (typically the user) and additional data.
Signature: Used to verify that the token is authentic and has not been tampered with.
Usage Scenarios:

Authentication: JWTs are commonly used for authentication. After a user successfully logs in, a JWT is generated and sent to the client. Subsequent requests from the client include the JWT, allowing the server to authenticate the user without needing to store session state on the server.

Authorization: JWTs can carry user roles and permissions (claims) as part of the payload, allowing servers to authorize users based on the information contained within the token.

Information Exchange: JWTs are also used for securely transmitting information between services in a stateless and self-contained manner.

Token Lifecycle:

Creation: When a user logs in or a token is requested, the server generates a JWT with relevant user information and signs it using a secret key known only to the server.

Verification: Upon receiving a JWT from a client, the server verifies its authenticity by checking the signature against the secret key. If valid, the server can trust the claims in the token.

Expiration: JWTs can have an expiration time (exp claim) to limit their validity period. Clients need to request a new token or refresh it once it expires.

Revocation: Since JWTs are stateless, they cannot be invalidated like traditional session tokens. To revoke access, the server can either decrease the token's expiration time or maintain a blacklist of invalidated tokens.

Security Considerations:

Use of HTTPS: JWTs should always be transmitted over HTTPS to protect them from interception and tampering.

Token Size: Avoid storing sensitive information within the JWT payload as it can be decoded with base64. Instead, use the payload to store non-sensitive claims and validate sensitive data server-side.

Secret Key: The secret key used for signing JWTs should be kept confidential and rotated periodically to enhance security.

Validation: Always validate JWTs carefully, checking the signature, expiration time, and other claims as necessary to prevent security vulnerabilities like token replay attacks.
##### mongoose
Schema Definition: Mongoose allows you to define schemas for your MongoDB documents. A schema defines the structure of documents, default values, validators, and other constraints.
Model Creation: Mongoose models are constructors created from schemas. They allow you to create, read, update, and delete (CRUD) MongoDB documents.
Connecting to MongoDB: Mongoose connects to MongoDB using a connection string.
Middleware: Mongoose supports middleware functions for document lifecycle events such as init, validate, save, and remove. Middleware allows you to execute custom logic before or after certain operations.
Query Building: Mongoose provides a fluent API for building MongoDB queries. You can use methods like find, findOne, findById, updateOne, deleteOne, etc., to interact with your database.
##### nanoid
Purpose: nanoid generates unique IDs that are designed to be.
Unique: IDs generated by nanoid are statistically unique within the domain where they are used.
URL-friendly: The generated IDs are composed of URL-safe characters (A-Za-z0-9_-), making them suitable for use in URLs without encoding.
Compact: The generated IDs are compact in size, typically around 21 characters long by default.

##### nodemailer
Nodemailer is a popular Node.js module used for sending emails from Node.js applications. It provides an easy-to-use API and supports multiple email services and protocols.
##### nodemon
Nodemon is a utility for Node.js applications that monitors changes in your source code and automatically restarts the server. It is particularly useful during development to speed up the development workflow by eliminating the need to manually restart the server every time you make a change.

### EndPoints:

## Base URL:
https://travel-planner-app-backend.onrender.com
It shows whether the api is running on the appropriate port
## Auth URL:
### Register URL:
https://travel-planner-app-backend.onrender.com/api/auth/register
We need to gives email,name,password and role of the user as Admin or Customer

### Activate URL:
https://travel-planner-app-backend.onrender.com/api/auth/activate/:token
when the user registered their mail id once, it will send a link to activate their account with generating a new token for the user

### Login URL:
https://travel-planner-app-backend.onrender.com/api/auth/login
Here we use the activated token in header and post email and password of the user

## BOOKING URL:
### Create Booking:
https://travel-planner-app-backend.onrender.com/api/bookings/create
create a new bookings for their trip
### Get All bookngs:
https://travel-planner-app-backend.onrender.com/api/bookings/
Fetching all bookings details
### Get Particular Bookings:
https://travel-planner-app-backend.onrender.com/api/bookins/<id>
Denoting the particular id which would want to be searched in bookings only showed

### Delete Bookings:
https://travel-planner-app-backend.onrender.com/api/bookings/<id>
the particular id will be remove or deleted from the db
## Travel Plan URL:
### Travel Plan Creating:
https://travel-planner-app-backend.onrender.com/api/travel-plans/create
creating the new travel plans
### Getting All Travel Plans:
https://travel-planner-app-backend.onrender.com/api/travel-plans/
Fetching all the travel plans which created by the user
### Deleting
https://travel-planner-app-backend.onrender.com/api/travel-plans/<id>
Delete the appropriate travel plans into the list
## Tour Plan URL:
### Create Tour Plans:
https://travel-planner-app-backend.onrender.com/api/tour-plans/create
creating new tour Plans
### Get all Tour Plans:
https://travel-planner-app-backend.onrender.com/api/tour-plans/
Fetch all the tour plans which created by the user
### Deleting
https://travel-planner-app-backend.onrender.com/api/tour-plans/<id>
Deleting the particular tour plans in DB
### POSTMAN API: https://documenter.getpostman.com/view/34996607/2sA3XY7JPq
