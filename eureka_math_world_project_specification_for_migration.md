# Project Overview: Eureka Math World (유레카 매스 월드)

A high-fidelity, gamified educational PWA (Progressive Web App) designed for kids (ages 6-14) to learn math through "discovery-based" learning rather than repetitive practice. The app is specifically aligned with the **Ontario Math Curriculum (2020 Revision)** and optimized for iPad/Tablet usage.

## 1. Core Design System: "Cosmic Discovery"
- **Theme:** Dark Mode (Deep Space)
- **Primary Colors:** Cosmic Purple (#6D28D9), Deep Navy (#0B0E14), Electric Cyan, Star Gold.
- **Visual Style:** Glassmorphism (semi-transparent layers), neon glows, 3D rendered assets, and "stardust" particle effects.
- **Typography:** Space Grotesk (Modern, geometric).

## 2. Technical Architecture (PWA)
- **Platform:** Web-based, installable as a mobile app (PWA).
- **Navigation:** Root entry point is a Profile Selection screen (`index.html`).
- **Features:** 
  - Dynamic level systems based on game progress.
  - Interactive audio (background music + haptic-like sound effects).
  - Celebration system: High-fidelity confetti and firework animations upon mission completion.
  - Multi-profile management for multiple children on one device.

## 3. Curriculum Scope: Ontario Grades 1-8
- **Strands Covered:** 
  - Number Sense (Fractions, Percentages, Integers)
  - Algebra (Coding, Variables, Linear Equations)
  - Data (Probability, Data Labs)
  - Spatial Sense (Geometry, Coordinate Logic)
  - Financial Literacy (Taxes, Budgeting, ROI)
- **Instructional Method:** "Gifted Education" style — focusing on logic, pattern recognition, and real-world application.

## 4. Key Interactive Modules (Mini-Games)
1. **Potion Lab:** Multiples of 10 and ratio mixing.
2. **Barter Market:** Balancing values and algebraic thinking using scales.
3. **Millionaire Simulator:** Exponential growth and interest rates through a fun "wealth building" clicker.
4. **Smart Farm:** Coding sequential logic and loops to automate harvests.
5. **Bridge Engineering:** Structural logic and geometry.
6. **Mars Rover:** Advanced concurrency and function-based coding.
7. **Drone Delivery:** 4-quadrant coordinate geometry.
8. **Wall Street Junior:** Portfolio strategy and stock market simulation (Grades 7-8).

## 5. Characters & Gamification
- **Mascot:** **Math-Bot** (Friendly 3D robot guide).
- **Monster Collection:** 
  - **Pyro Fox** (Fire/Geometry)
  - **Nebula Phoenix** (Cosmic Equations)
  - **Gravity Slime** (Spatial Balance)
  - **Black Hole Cat** (Variable Absorption)
- **Systems:**
  - **Backpack:** Inventory for tools and artifacts.
  - **Awards Hall:** Trophy room for achievements.
  - **Stats:** Mathematical growth visualization (Skill trees).
  - **Math Duel:** Social/Competitive math challenges.

## 6. Implementation Notes for AI
- Use **Tailwind CSS** for all styling.
- Focus on **Glassmorphism** and **Backdrop-blur** for the "Cosmic" UI.
- Use **Lucide React** or **Google Material Icons** for iconography.
- Ensure all screens are responsive for iPad/Tablet (MOBILE device type in current context).
- The "Achievement Unlocked" screen should always trigger a `confetti` or `fireworks` JS function.