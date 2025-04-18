# Minimal React Router Cloudflare Workers Template

This is a minimal template for building React applications with React Router and Cloudflare Workers. It includes server-side rendering, hot module replacement, TypeScript, and middleware by default.

## Getting Started

### Clone the Template

The recommended way to clone this repo is using [degit](https://github.com/Rich-Harris/degit)

```bash
bunx degit sergiodxa/react-router-cloudflare-minimal my-app
```

After the repo is clonned, this will remove the `LICENSE` and `.github/FUNDING.yml` files, and the `.git` folder, so you will have a clean slate to start your project.

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

### Using GitHub Actions

This template includes a GitHub Actions workflow that will deploy your application to Cloudflare Workers when triggered.

To use it you need to set the following secrets in your repository:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

You can get the `CLOUDFLARE_API_TOKEN` from the Cloudflare dashboard and the `CLOUDFLARE_ACCOUNT_ID` from the wrangler configuration file.

Then trigger the workflow by clicking on the "Actions" tab in your repository and running the "Deploy" workflow.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

## Author

- [Sergio Xalambrí](https://sergiodxa.com)

## License

This project is open source and available under the [MIT License](LICENSE).
