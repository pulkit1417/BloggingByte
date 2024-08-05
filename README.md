# BloggingByte

Welcome to BloggingByte, a tech-focused blogging platform designed to solve the problem of insufficient quality content in the development community. Here, users can explore, create, and interact with blogs on various tech and development topics, ensuring a rich resource for developers at all levels.

## Features

- **View All Blogs**: Discover a curated list of all tech and development blogs available on the platform.
- **Read Specific Blog**: Dive deep into specific blog posts to gain insights and knowledge.
- **Search Blogs**: Quickly find relevant content by searching blogs by title or description.
- **Share Blogs**: Spread the knowledge by sharing your favorite blogs with others.
- **User Authentication**: Securely sign up and log in using JWT tokens.
- **Author Profile Page**: View detailed profiles of authors, including all their published posts.
- **Delete Blog**: Authors have the ability to delete their own blogs if needed.
- **Add New Blog**: Share your expertise by creating and publishing new tech and development blogs.
- **Comment on Blogs**: Engage with the community by commenting on blog posts.
- **Subscribe to Newsletter**: Stay updated with the latest tech content by subscribing to the newsletter.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: AWS

## Getting Started

To get a local copy of BloggingByte up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed locally or have access to a MongoDB Atlas cluster.
- AWS account for hosting (optional if running locally).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bloggingbyte.git
    ```
2. Navigate to the project directory:
    ```bash
    cd bloggingbyte
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=8000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:8000` to view the application.

## Live Demo

Check out the live version of BloggingByte [here]().

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.
