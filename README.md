# Next.JS + Algolia Airport Search Application

This Next.JS application uses Algolia's search capabilities to provide a fast and relevant search experience using a dataset of airports. The frontend leverages the `shadcn` UI library and is deployed on Netlify.

## Features

- **Next.JS Framework:** Utilizes the latest features of Next.JS for server-side rendering and static site generation.
- **Algolia Search:** This projecet utilizes Algolia Instant Search React library for searching and filter.
- **Responsive UI:** Built with `shadcn` for a responsive and modern user interface.
- **Deployed on Netlify:** Hosted on Netlify for quick loading times and high availability.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/): `npm install netlify-cli -g`

## Local Development

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bridgpal/algolia-test
   cd your-repo-name
   npm install
   ```

2. Sent ENV Variables for

   ```bash
   ALGOLIA_APP_ID=XXXXXXXXXXXXX
   ALGOLIA_SEARCH_KEY=abcdyz12346567
   cd your-repo-name
   ```

3. Run

   ```bash
   ntl dev
   ```

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bridgpal/algolia-test)
