# Simple Hotel Management App

A simple web application built with **Next.js 15 (App Router)** and **NextAuth.js** that allows users to view hotels and manage them after logging in. The app features public pages for viewing hotels and a protected Add Hotels page to add new products.

---

## Technologies Used
- Next.js 15 (App Router)  
- NextAuth.js for authentication  
- Tailwind CSS (optional for styling)  
- Route Handlers (`/api`) for backend  
- Mock backend or database (e.g., MongoDB)  

---

## Features

### Public Pages
- **Landing Page (`/`)**: Includes Navbar, Hero section, Product Highlights, Footer  
- **Product List (`/hotels`)**: Shows a list of all products  
- **Product Details (`/hotels/[id]`)**: Shows full details of a single product  

### Authentication
- **Login (`/login`)**: Users can log in via social login (Google) or credentials using NextAuth.js  
- Redirects to `/` after successful login  

### Protected Pages
- **Add Product (`/add-product`)**: Accessible only when logged in. Users can add new products through a form.  

### Optional Enhancements
- Loading spinner during form submissions  
- Toast messages on successful product addition  
- Light/Dark theme toggle  

---

## Setup & Installation

1. **Clone the repository**  
```bash
git clone https://github.com/noob-ubaid/QuickBuy.git
npm run dev
