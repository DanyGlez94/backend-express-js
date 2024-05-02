# 🚀 Express API REST

This project is an API built with Express to manage products and users.

## 🔧 Configuration

1. **Clone the Repository**

   Clone this repository to your local machine using Git:

   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the dependencies using npm:

   ```
   cd Express_APIREST
   npm install
   ```

3. **Run the Application**

   Run the application locally with the following command:

   ```
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

# Endpoints 🛣️

- **GET /api/v1/products**: Retrieves all products.
- **GET /api/v1/products/:id**: Retrieves a specific product by its ID.
- **POST /api/v1/products**: Creates a new product.
- **PATCH /api/v1/products/:id**: Updates an existing product.
- **DELETE /api/v1/products/:id**: Deletes a product by its ID.
- **GET /api/v1/users**: Retrieves all users.
- **GET /api/v1/users/:id**: Retrieves a specific user by its ID.
- **POST /api/v1/users**: Creates a new user.
- **PATCH /api/v1/users/:id**: Updates an existing user.
- **DELETE /api/v1/users/:id**: Deletes a user by its ID.


## 📁 Project Structure

- `api`: Contains files related to the API logic.
- `middlewares`: Middleware for error handling.
- `routes`: Defines the API routes.
- `schemas`: Validation schemas for product and user data.
- `services`: Contains the business logic for products and users.

## 📦 Dependencies

- `express`: Web framework for Node.js.
- `joi`: Library for data validation.
- `@hapi/boom`: For handling HTTP errors.
- `cors`: Middleware to enable CORS in Express.
