# BloggingByte

Welcome to BloggingByte, a full-featured blogging platform that allows users to explore, create, and interact with blogs on various topics. This platform includes user authentication, blog management, and more.

## Features

- **View All Blogs**: Explore a list of all blogs available on the platform.
- **Read Specific Blog**: Click on any blog to read its full content.
- **Search Blogs**: Easily search for blogs by title or description.
- **Share Blogs**: Share your favorite blogs with others.
- **User Authentication**: Sign up and log in securely using JWT tokens.
- **Author Profile Page**: View the author's profile, including all posts by the author.
- **Delete Blog**: Authors can delete their blogs from their profile.
- **Add New Blog**: Authors can create and publish new blogs.
- **Comment on Blogs**: Engage with content by commenting on blogs.
- **Subscribe to Newsletter**: Stay updated with the latest blogs by subscribing to the newsletter.

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
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:5000` to view the application.

## Live Demo

Check out the live version of BloggingByte [here](https://your-aws-link.com).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
