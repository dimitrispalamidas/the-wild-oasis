# The Wild Oasis

The Wild Oasis hotel management app is a full-featured React web application that allows hotel employees to manage cabins, bookings, and guests. The app uses Supabase for its backend and implements a variety of advanced React techniques, such as HOCs, the Compound Component Pattern, and React Query.

## Live Demo

• https://the-wild-oasis-flame.vercel.app/

## Demo Account

You can access the application using the following demo account:

Email: testuser@gmail.com
Password: 12345678

## Installation Steps:

1. Clone the repository
   git clone https://github.com/masud-rana44/The-Wild-Oasis.git

2. Install the required dependencies
   npm install

3. Start the development server
   npm run dev

4. Access the application at
   http://localhost:5173

## Key Features

• The app is designed for hotel employees, who need to be logged into the application to perform tasks.

• New users can only sign up inside the application, ensuring that only actual hotel employees can create accounts.

• Users can upload an avatar and change their name and password.

• The app includes a table view that displays all cabins, showing the cabin photo, name, capacity, price, and current discount.

• Users can update or delete a cabin and create new cabins, including uploading a photo.

• The app features a table view of all bookings, displaying arrival and departure dates, status, paid amount, as well as cabin and guest data.

• Booking statuses include "unconfirmed" (booked but not yet checked in), "checked in," or "checked out." The table is filterable by booking status.

• Other booking details include the number of guests, number of nights, guest observations, and whether breakfast was booked (including breakfast price).

• Users can delete a booking, check in, or check out a booking as the guest arrives.

• For unpaid bookings at check-in, users can confirm payment received (outside the app) and update the booking status inside the app.

• During check-in, guests can add breakfast for their entire stay if it wasn't already included.

• Guest data includes full name, email, national ID, nationality, and a country flag for easy identification.

• The initial app screen is a dashboard that displays important information for the last 7, 30, or 90 days:

• A list of guests checking in and out on the current day, with the ability to perform these tasks directly from the dashboard.

• Statistics on recent bookings, sales, check-ins, and occupancy rates.

• A chart showing daily hotel sales, including both "total" sales and "extras" sales (currently breakfast).

• A chart showing statistics on stay durations, an important metric for the hotel.

• Users can define application-wide settings, such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

• The app supports dark mode.



## My process

Built with:

• React
• Supabase
• React Query
• React Router
• React Hook Form
• React Hot Toast
• Recharts
• Styled Components
• Vite

What I Learned:

• React Fundamentals: I gained a solid understanding of React, including components, state management, and routing, allowing me to build dynamic user interfaces.

• Authentication and User Management: I implemented user authentication using Supabase, ensuring secure access for hotel employees and learned to manage user profiles effectively.

• Form Handling: I became proficient in managing forms with React Hook Form, simplifying form validation, submission, and data handling.

• Data Fetching and Caching: React Query was employed to fetch and cache data, enhancing the performance and responsiveness of the application.

• Real-time Updates: I integrated real-time data updates using Supabase, enabling instant changes to cabin and booking data.

• Responsive UI Design: Styled Components were used to create responsive and visually appealing user interfaces that adapt to various screen sizes.

• Toast Notifications: React Hot Toast added user-friendly notifications for various actions within the app, improving the overall user experience.

• Data Visualization: Recharts was employed for creating charts and visual representations of vital statistics, aiding in data analysis and decision-making.

• Routing and Navigation: React Router facilitated smooth navigation and seamless transitions between different views and pages within the application.

• Settings Management: I learned to allow users to configure application-wide settings, such as breakfast pricing and booking constraints.

• Higher-Order Components (HOC): I utilized Higher-Order Components to enhance code reusability and share common functionalities among multiple components.

• Compound Component Pattern: I implemented the Compound Component Pattern to create cohesive and reusable component groups, improving the organization and maintainability of the code.

• Dark Mode Implementation: Dark mode was implemented to offer users a personalized visual experience and accommodate different preferences.

• Git Version Control: I practiced effective version control using Git, allowing for code management, and tracking project changes.

• Project Planning and Management: I gained experience in planning and managing a large-scale project, including feature development, bug fixing, and testing.

By building "The Wild Oasis" project with these technologies and concepts, I've developed a comprehensive set of skills and knowledge that can be applied to future projects and real-world scenarios. This experience has not only expanded my technical expertise but also improved my problem-solving capabilities.
