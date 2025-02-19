# Joke Voting App

A fun web application that fetches random jokes from the [TeeHee API](https://www.freepublicapis.com/teehee-joke-api) and allows users to reveal punchlines, fetch new jokes, and vote on jokes.

## Features

- Fetches random jokes from the **TeeHee API**.
- Users can reveal the punchline of the joke.
- Voting system: Users can react with **Love**, **laugh** and **like**.
- Styled using CSS for a clean and interactive UI.
- Built with **Next.js**

## Installation

#### Clone the Repository

```
git clone <repository-url>

cd joke-voting-app
```

#### Install Dependencies

```
npm install
```

#### Start the development server:

```
npm run dev
```

## API Endpoint

The app fetches jokes from:

```
https://teehee.dev/api/joke
```

Example API response:

```
{
  "id": "ding",
  "question": "Why did the scientist disconnect the doorbell?",
  "answer": "He wanted the no-bell prize.",
  "permalink": "https://teehee.dev/api/joke/ding"
}
```

## Project Structure

```
JOKE-VOTING-APP
│── .next/
│── node_modules/
│── public/
│── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   ├── components/
│   │   ├── Buttons.js
│   │   ├── Joke.js
│   │   ├── JokeBox.css
│   │   ├── JokeBox.js
│   │   ├── Reactions.js
│   ├── styles/
│   │   ├── homepage.css
│── .gitignore
│── eslint.config.mjs
│── jsconfig.json
│── next.config.mjs
│── package-lock.json
│── package.json
│── README.md
```
