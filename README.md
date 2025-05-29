# 📊 Comprehensive Analytics Dashboard

A modern, interactive analytics dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **dnd-kit**, designed for real-time visualization of **Weather**, **Finance**, and **News** data. The dashboard supports **drag-and-drop widgets**, **category-based news filtering**, and **global search functionality**.

---

## 🚀 Features

- 📦 Modular folder structure using best practices
- 🧩 Drag-and-drop widgets (weather, finance, news)
- 🌦 Real-time Weather data from OpenWeatherMap API
- 💹 Finance data with stock market info
- 📰 News feed with dynamic category routing (tech, business, etc.)
- 🔍 Global search bar for querying articles (coming soon)
- ⚙️ Sidebar navigation with category filters
- 🧠 Built with `@dnd-kit` for drag-and-drop logic

---

## 🗂 Folder Structure

/components → Reusable UI and widget components
/hooks → Custom React hooks
/pages → Next.js routing (including dynamic category pages)
/public → Static assets
/services → API integration for weather, news, finance
/store → Zustand or Redux Toolkit (if added later)
/styles → Tailwind CSS / global styles
/utils → Helper functions and constants


---

## 📦 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **@dnd-kit** (drag-and-drop)
- **OpenWeatherMap API**
- **NewsAPI.org**
- **Placeholder Finance API**

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
NEXT_PUBLIC_FINANCE_API_KEY=your_finance_api_key

# 1. Clone the repo
git clone https://github.com/ajaykumar-21/Comprehensive-Analytics-Dashboard.git
cd analytics-dashboard

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
