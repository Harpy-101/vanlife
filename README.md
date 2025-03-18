# 🚐 VANLIFE – The Ultimate Camper Van Rental Experience  

## 📖 Overview  
VANLIFE is a sleek, user-friendly web application designed for adventurers looking to rent camper vans with ease. Built with **React, Vite, and Mirage.js**, this project showcases modern frontend development practices, state management, and API simulation.  

You can view the app [here.](https://vanlife-di.netlify.app/)

### ✨ Features:  
- ✅ **Beautiful UI** with a fully responsive design for mobile and desktop users.  
- ✅ **Van Listings** – Browse a curated selection of camper vans with reviews and pricing.  
- ✅ **Host Dashboard** – Manage income, transactions, and customer reviews.  
- ✅ **Basic Route Protection** – Only users with pre-set credentials can access restricted pages. (Future update: Full authentication with a real backend.)
- ✅ **Optimized API Calls** – User data is fetched once at login to minimize redundant requests and improve efficiency.

---

## 🛠️ Tech Stack  

| Technology  | Purpose  |
|-------------|---------|
| **React (Vite)**  | Fast frontend development |
| **Mirage.js**  | API mocking for dynamic data |
| **React Router**  | Client-side routing |
| **Context API**  | State management |
| **Local Storage**  | Session persistence |

---

## 🎯 Features  

### **For Renters**  
- Explore available camper vans with **detailed descriptions, images, and pricing**.  
- Filter vans by **type**.  

### **For Hosts**  
- View **monthly income summaries** with recent transactions.  
- Manage **customer reviews** and improve service based on feedback.  
- A **clean and intuitive dashboard** for quick insights.  

### **Authentication**  
- Secure login system (simulated via Mirage.js for now).  
- Users and hosts have **role-based access**.  

---

## 📂 Code Structure
```
📂 src
 ┣ 📂 components        # Reusable UI components
 ┣ 📂 pages             # Main application pages
 ┣ 📜 App.css           # App styles (Tailwind CSS)
 ┣ 📜 server.js         # API simulation (Mirage.js
 ┣ 📜 App.jsx           # Root component
 ┗ 📜 main.jsx          # React entry point
```

---

🛠️ Future Improvements
  - Real Backend integration with Firebase or Supabase.
  - Payment System for seamless transactions.
  - More van filter options.
  - Add realistic customer reviews for the users.   
