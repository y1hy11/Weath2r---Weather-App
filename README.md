# Weath2r ⛅

A modern, feature-rich weather application built with React that provides real-time weather information, forecasts, and interactive maps. Experience weather updates with a beautiful, responsive interface and smooth animations.

## ✨ Key Features

- **Real-time Weather Data**: Get current weather conditions powered by OpenWeather API
- **Extended Forecasts**: View detailed 5-day weather predictions
- **Interactive Weather Maps**: Visualize weather patterns with Leaflet integration (Desktop)
- **Location Intelligence**: Access weather data for any location worldwide
- **Responsive Design**: Optimized for all devices with an adaptive layout
- **Theme Support**: Toggle between light and dark modes for comfortable viewing
- **Intuitive UI**: Enhanced user experience with Framer Motion animations
- **Detailed Statistics**: Access comprehensive weather metrics and data visualization

## 🛠️ Built With

- **Frontend Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Mapping**: [Leaflet](https://leafletjs.com/) / [React-Leaflet](https://react-leaflet.js.org/)
- **Weather Data**: [OpenWeather API](https://openweathermap.org/api)
- **Styling**: CSS3 with CSS Variables for theming

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/Y1hy11/Weath2r---Weather-App.git
```

2. Install dependencies

```bash
pnpm install
```

3. Configure API Key

```bash
# Option 1: Using Vercel (Recommended)
# The API key is already configured in Vercel's environment variables
# No additional setup needed when deploying through Vercel

# Option 2: Local Development
# Create a .env file in the root directory and add:
 OPENWEATHER_API_KEY=your_api_key_here

# Option 3: Other Deployment Platforms
# Set the environment variable OPENWEATHER_API_KEY in your platform:
# - Netlify: Site settings > Build & deploy > Environment variables
# - Heroku: Settings > Config Vars
# - Railway: Project settings > Environment variables
# - AWS Amplify: Environment variables

# Get your OpenWeather API key at:
# https://openweathermap.org/api
```

4. Start the development server

```bash
pnpm dev
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR follows the project's coding standards and includes appropriate tests.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Contact & Support

[![GitHub](https://img.shields.io/badge/GitHub-Y1hy11-blue?style=flat&logo=github)](https://github.com/Y1hy11)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yahya_El_Alaoui-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/yahya-elalaoui)

Project Link: [https://github.com/Y1hy11/Weath2r---Weather-App](https://github.com/Y1hy11/Weath2r---Weather-App)

---

<p align="center">If you found this project helpful, please consider giving it a <span style="display: inline-block; animation: starbeat 1.5s ease infinite;">⭐</span></p>

<style>
@keyframes starbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}
</style>
