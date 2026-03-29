# AI Resume Generator 🚀

An intelligent resume builder powered by AI that helps you create professional, tailored resumes in minutes.

## ✨ Features

- 🤖 AI-powered resume content generation
- 📄 Multiple resume templates
- 🔐 Authentication with Clerk
- 📥 Export to PDF
- 💾 Save and manage multiple resumes
- 📱 Responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** MongoDB (Mongoose)
- **Styling:** Tailwind CSS + Bootstrap
- **PDF Export:** html2pdf.js
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Tailwind css
- Clerk account

### Installation

1. Clone the repository
```bash
   git clone https://github.com/Decentkeshu/AI-Resume-Generator.git
   cd AI-Resume-Generator
```

2. Install dependencies
```bash
   npm install
```

3. Set up environment variables — create a `.env.local` file in the root:
```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server
```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `MONGODB_URI` | MongoDB connection string |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Keshu** — [@Decentkeshu](https://github.com/Decentkeshu)
