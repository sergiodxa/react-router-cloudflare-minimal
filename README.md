# Minimal React Router Cloudflare Workers Template

This is a minimal template for building React applications with React Router and Cloudflare Workers. It includes server-side rendering, hot module replacement, and TypeScript by default.

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
bun run build
```

## Deployment

This template can only be deployed to Cloudflare Workers.

```bash
bun run deploy
```

This will init the deploy script of wrangler and guide you to deploy the application.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

## Author

- [Sergio Xalambrí](https://sergiodxa.com)

## License

This project is open source and available under the [MIT License](LICENSE).
