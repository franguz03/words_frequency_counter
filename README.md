
## ✅ Steps to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/franguz03/words_frequency_counter.git
   cd word-frequency-counter
2. **Install dependencies:**
   ```bash
   npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\


The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

## ✅ computational complexity of word frequency counting algorithm.

The getWordFrequencies function first processes the text by converting it to lowercase, removing punctuation, and splitting it into words. These preprocessing steps each require scanning the text once, so their combined cost is O(n). Then, it iterates through all words once more to count their occurrences using a hash map (object), which allows constant-time insertion and lookup. Therefore, the entire counting process remains linear in the size of the input.

Next, the getTopWords function transforms the frequency dictionary into an array of key-value pairs and sorts it in descending order by count. Sorting k elements has a cost of O(k log k).

