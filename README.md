# Chow Time
A meal tracker that helps decide what's for dinner. First iteration will be through the terminal and further enhanced from there.

# Requirements
Will use node.js and or Bun

Requirements:
- can enter new meals
- Input requirements:
    - picture (optional)
    - meal name
    - meal number: (1/5)
    - assign each meal a category: (breakfast, lunch or dinner)
    - Ingredients needed (optional)
    - prep time
    - cook time
    - number of people fed
    - prep instructions (optional)
    - cooking instructions (optional)
- save meals
- Output requirements:
    - see all entered meals in a menu
    - generate a random meal from all saved meals
        - (optional) generate a random meal from a selected meal category
        - (optional) generate a random meal from a selected cook time


## Tech Stack  
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Bun  
- **Storage:** JSON (for now, may add a database later)  



To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.38. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
