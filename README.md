# RatInAMaze

![RatInAMaze Banner](https://github.com/harshsinghinf/RatInAMaze/blob/master/Leonardo_Phoenix_Create_a_640_x_320_px_horizontal_banner_image_0.jpg)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Levels](#levels)
- [Gameplay Instructions](#gameplay-instructions)
- [Backtracking Algorithm Visualization](#backtracking-algorithm-visualization)
  - [Visualization Controls](#visualization-controls)
  - [Visualization Features](#visualization-features)
  - [How It Works](#how-it-works)
  - [Educational Insights](#educational-insights)
  - [Example Visualization](#example-visualization)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

**RatInAMaze** is an interactive web-based maze game designed to both entertain and educate. Players guide a rat through intricate mazes to reach a piece of cheese while witnessing the **Backtracking Algorithm** in action. This project seamlessly blends engaging gameplay with a practical visualization of algorithmic problem-solving, making it perfect for game enthusiasts and aspiring programmers alike.

## Features

- **Multiple Levels**: Choose from 5 different maze levels, each offering unique layouts and escalating difficulty.
- **Dynamic Maze Generation**: Mazes are generated based on predefined matrices, ensuring diverse and challenging gameplay.
- **Interactive Controls**: Navigate the rat using arrow keys for a hands-on experience.
- **Backtracking Algorithm Visualization**: Watch the backtracking algorithm explore and solve the maze in real-time.
- **Visualization Controls**: Adjust the speed of the algorithm's exploration and reset the visualization as needed.
- **Visual Feedback**: Real-time updates of the rat's position, walls, and paths explored by the algorithm.
- **Responsive Design**: Optimized for various screen sizes and devices to ensure a smooth experience.
- **Educational Content**: Integrated theory sections explaining the backtracking algorithm and its applications.
- **Animations**: Smooth animations enhance both the gaming and visualization experiences.
- **Win Modal**: Celebrate your success with a visually appealing "You Win" modal popup upon solving the maze.

## Technologies Used

- **HTML5**: Structure and layout of the game interface.
- **CSS3**: Styling, animations, and responsive design.
- **JavaScript (ES6)**: Game logic, maze generation, and user interactions.
- **GSAP (GreenSock Animation Platform)**: Advanced animations for enhanced visual effects.
- **Anime.js**: Lightweight JavaScript animation library for subtle animations.
- **Google Fonts**: A variety of fonts to enrich the visual appeal.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/harshsinghinf/RatInAMaze.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd RatInAMaze
   ```
3. **Open index.html in Your Browser**
   - Simply double-click the index.html file.
   - Alternatively, use a live server extension if you're using a code editor like VSCode.

## Usage

1. **Select a Level**
   - Use the dropdown menu to choose a maze level (Level 1 to Level 5).

2. **Navigate the Rat**
   - Use the arrow keys on your keyboard to move the rat:
     - Arrow Up (↑): Move up
     - Arrow Down (↓): Move down
     - Arrow Left (←): Move left
     - Arrow Right (→): Move right

3. **Goal**
   - Guide the rat from the starting position to the cheese without hitting walls.

4. **Win the Game**
   - Upon reaching the cheese, a "You Win" modal will appear.

5. **Switch Levels**
   - Change the level anytime by selecting a different option from the dropdown menu.
   - Click on the maze a few times after changing the level to regenerate it.

## Backtracking Algorithm Visualization

One of the standout features of RatInAMaze is its ability to visualize the Backtracking Algorithm in real-time as the rat navigates through the maze. This visualization serves as an educational tool, helping users understand how backtracking systematically explores all possible paths to find a solution.

### Visualization Controls

- **Start Button**: Initiates the backtracking visualization, allowing the algorithm to begin solving the maze automatically.
- **Speed Controls**:
  - 2x: Doubles the speed of the visualization for faster exploration.
  - 3x: Triples the speed, providing an accelerated view of the algorithm's process.
  - 4x: Quadruples the speed for the fastest possible visualization.
- **Reset Button**: Stops the ongoing visualization and resets the maze to its initial state, allowing users to restart the algorithm from the beginning.

### Visualization Features

- **Real-Time Path Exploration**:
  - Yellow Cells: Indicate the current path being explored by the algorithm.
  - Green Cells: Highlight the successful path leading to the cheese.
  - Red Cells: Mark the paths that were explored but did not lead to a solution.
- **Dynamic Rat Movement**: The rat image moves through the maze, following the algorithm's decisions step-by-step.
- **Interactive Speed Adjustment**: Users can adjust the visualization speed on-the-fly to better observe the algorithm's behavior.
- **Reset Functionality**: Easily restart the visualization to see different paths or to understand the algorithm's decision-making process from scratch.

### How It Works

1. **Starting Point**: The rat begins at its starting position in the maze.
2. **Exploration**: The backtracking algorithm explores all possible directions (up, down, left, right) from the current position.
3. **Dead Ends**: If the rat hits a wall or a previously visited cell, the algorithm backtracks to the last valid position and tries a different path.
4. **Path Highlighting**:
   - Yellow Cells: Indicate the current path being explored.
   - Green Cells: Mark the successful path leading to the cheese.
   - Red Cells: Show the paths that were explored but did not lead to a solution.
5. **Real-Time Updates**: As the algorithm progresses, you'll see the rat moving through the maze, with cells changing colors to reflect the algorithm's decisions.
6. **Final Outcome**:
   - Success: If a path to the cheese is found, the successful path is highlighted in green.
   - Failure: If no path exists, an alert notifies the user that no path is available.

### Educational Insights

- **Understanding Backtracking**: By watching the rat explore and backtrack, users can grasp the fundamental principles of the backtracking algorithm, such as recursion, exploration of all possibilities, and systematic backtracking upon encountering dead ends.
- **Algorithm Efficiency**: The visualization demonstrates the time complexity of backtracking, especially how it can become exponential with increasing maze complexity.
- **Practical Applications**: Learn how backtracking is applied in various domains like puzzle solving (e.g., Sudoku, N-Queen problem), pathfinding, and decision-making processes.

### Example Visualization

![Insert flowchart or visualization image here](https://github.com/harshsinghinf/RatInAMaze/blob/master/Flowchart.png)

The above flowchart illustrates how the backtracking algorithm navigates through the maze, making decisions at each checkpoint and backtracking upon reaching terminal nodes.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request


## Acknowledgements

- GSAP for the animation library.
- Anime.js for additional animations.
- Google Fonts for beautiful typography.
- Ratatouille inspiration for the theme.
- MDN Web Docs for invaluable web development resources.

Enjoy navigating the maze and understanding the backtracking algorithm! 🐭🧀
