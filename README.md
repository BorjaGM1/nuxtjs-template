# Nuxt Template with Supabase & Stripe

A comprehensive Nuxt.js template with SSR, Supabase authentication, Stripe payments, and a modern UI built with Tailwind CSS.

## 🚀 Features

- **🏗️ Modern Stack**: Nuxt 3, Vue 3, Tailwind CSS
- **🔐 Authentication**: Complete auth system with Supabase (email/password + OAuth)
- **💳 Payments**: Stripe integration ready for subscriptions and one-time payments
- **📱 Responsive Design**: Mobile-first responsive design
- **⚡ SSR/SPA**: Configurable rendering (SSR for public pages, SPA for auth areas)
- **📄 Legal Pages**: Pre-built Privacy Policy, Terms of Service, etc.
- **🎨 Components**: Reusable UI components with Tailwind
- **🛡️ Security**: Protected routes with authentication middleware
- **📧 Contact Form**: Working contact form with validation

## 📦 What's Included

### Pages
- **Landing Page** (`/`) - SSR homepage with features, CTA sections
- **Authentication** (`/login`, `/signup`) - Complete auth flow
- **Dashboard** (`/dashboard`) - Protected user dashboard
- **Legal Documents** (`/privacy`, `/terms`) - GDPR-compliant legal pages
- **Company Pages** (`/about`, `/contact`) - About and contact pages

### Components
- **TheNavbar** - Responsive navigation with auth state
- **TheFooter** - Footer with links and company info
- **Authentication Forms** - Login/signup with validation

### Integrations
- **Supabase** - Authentication and database
- **Stripe** - Payment processing with webhooks
- **Tailwind CSS** - Styling and responsive design

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Environment Variables

Create `.env` and `.env.local` files with the following variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Site Configuration
NUXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase Configuration
NUXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NUXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Configure authentication providers in Authentication > Providers
4. Set up your database schema as needed

### 4. Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Dashboard
3. Create products and prices in the Stripe Dashboard
4. Set up webhook endpoints:
   - Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   - Events to send: `checkout.session.completed`, `customer.subscription.*`, `invoice.*`

### 5. Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## 🔧 Configuration

### Nuxt Configuration

The template is configured in `nuxt.config.ts` with:
- SSR enabled for public pages (`/`, `/privacy`, `/terms`, etc.)
- SPA mode for authenticated areas (`/dashboard`, `/login`, `/signup`)
- Environment variables properly configured
- Modules: Supabase, Tailwind CSS, VueUse

### Authentication Flow

The template includes a complete authentication system:

1. **Public Pages**: Accessible without authentication
2. **Protected Pages**: Require authentication (use `auth` middleware)
3. **Auth Forms**: Login and signup with validation
4. **OAuth Support**: Google and GitHub login ready
5. **Session Management**: Automatic session handling

### Stripe Integration

Ready-to-use Stripe integration:

1. **Checkout Sessions**: Server-side session creation
2. **Webhooks**: Secure webhook handling for events
3. **Client Integration**: Frontend Stripe.js setup
4. **Subscription Support**: Ready for recurring payments

## 📁 Project Structure

```
├── assets/css/           # Tailwind CSS
├── components/          # Reusable Vue components
│   ├── TheNavbar.vue
│   └── TheFooter.vue
├── layouts/             # Nuxt layouts
│   └── default.vue
├── middleware/          # Route middleware
│   └── auth.js         # Authentication protection
├── pages/              # Application pages
│   ├── index.vue       # Landing page
│   ├── login.vue       # Login page
│   ├── signup.vue      # Registration page
│   ├── dashboard.vue   # User dashboard
│   ├── about.vue       # About page
│   ├── contact.vue     # Contact page
│   ├── privacy.vue     # Privacy policy
│   └── terms.vue       # Terms of service
├── plugins/            # Nuxt plugins
│   └── stripe.client.js # Stripe initialization
├── server/api/         # Server API routes
│   └── stripe/         # Stripe endpoints
│       ├── create-checkout-session.post.js
│       └── webhook.post.js
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Styling
- Edit `assets/css/main.css` for global styles
- Modify Tailwind classes in components
- Update the color scheme in the CSS file

### Branding
- Replace logo and favicon in `public/`
- Update company information in footer and contact page
- Modify site name throughout the application

### Pages
- Add new pages in the `pages/` directory
- Create additional legal documents as needed
- Customize the dashboard for your use case

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The template works with any platform that supports Nuxt.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS, GCP, Azure

## 📝 Development Notes

### Adding New Protected Routes
1. Create your page in `pages/`
2. Add `definePageMeta({ middleware: 'auth' })` to require authentication

### Stripe Webhook Testing
Use Stripe CLI for local webhook testing:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Database Integration
The template is ready for database integration with Supabase:
- User profiles
- Subscription management
- Application data

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This template is available for use under the MIT license.

## 🆘 Support

For questions about this template:
- Check the documentation above
- Review the code comments
- Create an issue in the repository

---

Built with ❤️ using Nuxt.js, Supabase, and Stripe.
