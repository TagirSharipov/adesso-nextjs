#### filepath: /Users/tagir/Projects/adesso-app/README.md

# Adesso App - Coding Test

## Description

This project was created as part of a coding test for Adesso. It utilizes the public GoRest API (https://gorest.co.in/) to display a list of users and their details. The application is built with Next.js and TypeScript, incorporating features like server-side rendering, multilingual support, and UI component styling.

## Demo

https://adesso-nextjs.vercel.app/it

## Features

- **User Listing:** Displays a paginated list of users fetched from the GoRest API.
- **User Details:** Allows viewing detailed information for each user.
- **Filtering:** Supports filtering the user list by name, email, gender, and status.
- **Multilingual Support:** Implements basic multilingual support for English and Italian.
- **Modern UI:** Uses a modern UI design with Tailwind CSS

## Technologies Used

- Next.js
- TypeScript
- React
- Tailwind CSS
- GoRest API

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    cd adesso-app
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser and navigate to `http://localhost:3000`.**

## API Usage

The application uses the GoRest API, which is a public and read-only API. No API key is required.

## Notes

- The UI/UX design is implemented according to personal preference, utilizing a mix of styling approaches.
- Multilingual support is implemented using JSON files for different languages.
- The filtering feature allows users to filter the user list based on name, email, gender, and status.

## ToDo

Among the many improvements that should be made, the most desired is to add Suspense to display a TableSkeleton component while loading data. I have actually added it, but I encountered some confusion with disabling optimistic rendering when changing the table page. So I decided to study it deeper lately.
