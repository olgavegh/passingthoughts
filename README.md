# Passing Thoughts App

This project is a task from Codecademy's React: Component State course. It involves building a simple React application that allows users to add and remove thoughts. Each thought automatically disappears after 15 seconds, simulating passing thoughts.

## Features

- **Add Thoughts**: Users can type a thought and add it to the list.
- **Remove Thoughts**: Thoughts can be manually removed by clicking a delete button.
- **Auto-Expire**: Thoughts automatically disappear after 15 seconds.

## Components

- **App**: The main component that holds the state of thoughts and renders the `AddThoughtForm` and `Thought` components.
- **AddThoughtForm**: A form component that allows users to input and submit new thoughts.
- **Thought**: A component that displays individual thoughts and handles their removal.

## Key Functions

- **addThought**: Adds a new thought to the list.
- **removeThought**: Removes a thought from the list based on its ID.
- **handleChange**: Updates the state with the input value from the user.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app with `npm start`.
4. Add thoughts using the input field and watch them disappear after 15 seconds.

## Technologies Used

- React
- JavaScript
