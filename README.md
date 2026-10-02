# MeetUp Mobile App 📍

MeetUp is a smart mobile application designed to help you and a group of friends easily find, suggest, and agree on an ideal meeting location. The app focuses on calculating the fairest travel distance for everyone based on current locations, combined with group preferences to provide optimal suggestions.

## 🌟 Key Features

- **Create and Manage Meetups:** Schedule meetups and invite friends to join.
- **Secure Location Sharing:** The app only uses your location with your explicit consent and only while a meetup is active.
- **Location Suggestion Engine:** Suggests places based on `Avg ETA` (average travel time) and `Max ETA` (longest travel time) to ensure fairness. Integrates an AI engine to explain why specific locations were suggested.
- **Voting System:** Members can vote together to finalize the meetup location.
- **Real-time Chat:** Built-in private group chat rooms for each meetup.
- **Nearby Friends Detection:** Suggests a spontaneous meetup when a friend is detected nearby (only if both users have enabled the feature).

## 🛠 Tech Stack

- **Framework:** React Native / [Expo](https://expo.dev/) (SDK 57)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Networking:** Axios, Socket.io-client (for real-time chat)
- **Native Modules:** 
  - `expo-location`: For GPS coordinates.
  - `react-native-maps`: For displaying maps.
  - `expo-notifications`: Push notifications (FCM).
  - `expo-secure-store`: Secure storage for JWT tokens.
  - `expo-auth-session` / `expo-crypto`: User authentication (Google OAuth).

## 🚀 Setup and Installation Guide

### System Requirements
- Node.js & pnpm
- Android Studio (Android Emulator) or a physical Android device with USB Debugging enabled.
- The `ANDROID_HOME` environment variable configured correctly.

### Running the App

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the Application (Build Native Android):**
   ```bash
   pnpm expo run:android
   ```
   *(This command will automatically compile the native Java/Kotlin code and install the .apk on your emulator).*

3. **Clear Native Cache (If rebuilding is needed):**
   If you change configurations in `app.json` or encounter environment issues, run:
   ```bash
   pnpm expo prebuild --clean
   pnpm expo run:android
   ```

## 📄 License
This is an internal project. All rights reserved.
