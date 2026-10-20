# Fantasy Quest - Lab 2: React Native Expo Game

A simple, paragraph-based fantasy text adventure game built using React Native and the Expo framework for the Development of Hybrid Mobile Applications course.

---

## Main Screen Preview

When launching the application, players are greeted by the **Screen 1 (Home Screen)**:

<img width="1080" height="1920" alt="Screenshot" src="https://github.com/user-attachments/assets/9db508e4-3cc2-4fda-8318-50fdd92061b7" />


*   **File-Based Routing:** Uses expo-router stack configuration mapping index through screen5, plus the victory state.
*   **Interactive Story Progression:** Branching paths leading from the initial crossroads through forests, villages, and combat.
*   **Combat Mechanic:** A 6-sided dice roll simulation on Screen 5 where rolling higher than the enemy results in victory, and lower results in death.
*   **Audio & Atmosphere:** Looping background music and button click sound effects using expo-av with async/await.
*   **Custom Typography & Styling:** Custom font integration across all screens using expo-font and responsive <ImageBackground> containers.

## Getting Started & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/crsx71223/Lab2-DHMA.git
   cd Lab2-DHMA
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server (with clean cache):**
   ```bash
   npx expo start
   ```

4. **Run on your device:**
   * Press **`w`** in your terminal to run the web version.
   * Scan the QR code using the **Expo Go** app on your iOS or Android device.
