# School Management System

A modern, full-stack web application for managing educational institutions. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Role-Based Access Control
- **Admin Dashboard**: Complete administrative control over the system
  - User management (students, teachers, staff)
  - Department management
  - System monitoring and analytics
  - Approval workflows
  - Event scheduling

- **Teacher Dashboard**: Tools for academic management
  - Class management
  - Student assessment tracking
  - Attendance management
  - Teaching materials organization
  - Schedule viewing

- **Staff Dashboard**: Administrative tools
  - Attendance tracking
  - Fee management
  - Facility management
  - Library management
  - Document processing

- **Student Dashboard**: Academic tools
  - Course tracking
  - Assessment viewing
  - Schedule management
  - Study materials access
  - Grade monitoring

### Security Features
- Secure authentication system
- Role-based access control
- Protected routes
- Session management
- Secure cookie handling

### UI/UX Features
- Responsive design for all devices
- Modern and clean interface
- Interactive dashboards
- Real-time notifications
- Intuitive navigation
- Dark/Light mode support
- Consistent layout across all pages

## Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Lucide Icons
  - Shadcn UI Components

- **Authentication**:
  - JWT-based authentication
  - Cookie-based session management
  - Middleware for route protection

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard and features
│   ├── teacher/           # Teacher dashboard and features
│   ├── staff/             # Staff dashboard and features
│   ├── student/           # Student dashboard and features
│   └── login/             # Authentication pages
├── components/
│   ├── layout/           # Layout components
│   └── ui/               # Reusable UI components
└── middleware.ts         # Authentication middleware
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd school_management_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication

The system uses role-based authentication:
- Admin: admin@example.com
- Teacher: teacher@example.com
- Staff: staff@example.com
- Student: student@example.com

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 