# Laundry Services Hamburger Menu in Mobile

## Description
A responsive implementation adding a CSS-only mobile slide-out hamburger menu without using JavaScript or external UI libraries.

## Technical Implementation
- **Pure CSS Click Handling**: Handled via the `:focus` and `:focus-within` pseudo-classes on the button wrapper.
- **Drawer Placement**: Positioned on the right side of the screen (`position: fixed; right: 0; top: 0; width: 65vw; height: 100vh;`) with black background and vertically/horizontally centered navigation links.
- **Responsive Display**: Hidden on desktop and tablet screens; enabled only on screens `<= 600px`.