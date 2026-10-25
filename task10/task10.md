# CSS Laundry Services - Hero Image Animation

## Overview
Added custom CSS keyframe animations to the Hero Section illustration to replicate orbital rotation and squeezing effects.

## Implementation Details
- **Orbit Translation**: Utilized CSS `@keyframes` with `translate(X, Y)` to cycle the image smoothly along an orbital trajectory.
- **Dynamic Squeezing**: Applied `scale(x, y)` at key milestones (25%, 50%, 75%) to create vertical and horizontal squeeze animations.
- **Performance**: Animated strictly with `transform` properties and `ease-in-out` timing for 60fps continuous looping (`infinite`).