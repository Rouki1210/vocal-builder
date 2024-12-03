<template>
    <div class="quiz-container">
      <h1>Language Quiz</h1>
      <ul class="quiz-list">
        <li v-for="(item, index) in quiz" :key="index" class="quiz-item">
          <div class="input-group">
            <label>
              <i class="united kingdom flag"></i> English
            </label>
            <input type="text" placeholder="Enter English word" v-model="item.english" disabled/>
          </div>
          <div class="input-group">
            <label>
              <i class="germany flag"></i> German
            </label>
            <input type="text" placeholder="Enter German word" v-model="item.userGerman" />
          </div>
          <div class="input-group">
            <label>
              <i class="vietnam flag"></i> Vietnamese
            </label>
            <input type="text" placeholder="Enter Vietnamese word" v-model="item.userVietnamese" />
          </div>
        <div v-if="resultsShown" class="feedback">
            <p :class="{ correct: item.isGermanCorrect, incorrect: !item.isGermanCorrect }">
                German: {{ item.isGermanCorrect ? "Correct!" : "Incorrect!" }}
            </p>
            <p :class="{ correct: item.isVietnameseCorrect, incorrect: !item.isVietnameseCorrect }">
                Vietnamese: {{ item.isVietnameseCorrect ? "Correct!" : "Incorrect!" }}
            </p>
        </div>
        </li>
      </ul>
      <div class="button-group">
        <button @click="prevQuestion" :disabled="currentIndex === 0" class="prev-button">Previous</button>
        <button @click="nextQuestion" :disabled="currentIndex === quiz.length - 1" class="next-button">Next</button>
        <button @click="checkResults" class="submit-button">Submit</button>
        <button @click="getQuiz" class="new-quiz-button">Get New Quiz</button>
      </div>
    </div>
</template>

<script>
import { testVocab } from "../helpers/api";

export default {
    data() {
        return {
            quiz: [],      // Holds the quiz data
            loading: false, // Loading state
            error: null,
            currentIndex: 0,
            resultsShown: false,    // Error message
        };
    },
    computed: {
    currentQuestion() {
      return this.quiz[this.currentIndex] || {}; // Get the current question
    },
    },
    methods: {
        async getQuiz() {
            try {
                this.loading = true;
                this.error = null; // Clear any previous error
                const data = await testVocab();
                this.quiz = data.quiz.map((item) => ({
                ...item,
                  userGerman: item.userGerman || "", // User's input for German
                  userVietnamese: item.userVietnamese || "", // User's input for Vietnamese
                  isGermanCorrect: false, // Tracks if German is correct
                  isVietnameseCorrect: false, // Tracks if Vietnamese is correct
                })); 
                this.currentIndex = 0;
                this.resultsShown = false;
            } catch (err) {
                this.error = "Failed to fetch quiz. Please try again.";
            } finally {
                this.loading = false;
            }
        },
        async checkResults() {
            this.quiz = this.quiz.map((item) => {
                const isGermanCorrect =
                    item.userGerman?.trim().toLowerCase() === item.german?.trim().toLowerCase();
                const isVietnameseCorrect =
                    item.userVietnamese?.trim().toLowerCase() === item.vietnamese?.trim().toLowerCase();
                return { ...item, isGermanCorrect, isVietnameseCorrect };
            });
            this.resultsShown = true; // Show results
        },
        prevQuestion() {
            if (this.currentIndex > 0) {
            this.currentIndex--;
            }
        },
        nextQuestion() {
            if (this.currentIndex < this.quiz.length - 1) {
            this.currentIndex++;
            }
        }
    },
    mounted() {
        this.getQuiz(); // Fetch a quiz on component load
    },
};
</script>

<style scoped>
.quiz-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #4183c4;
}

.quiz-list {
    list-style: none;
    padding: 0;
}

.quiz-item {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.input-group label {
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.input-group input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
}

.input-group input:focus {
    outline: none;
    border-color: #4183c4;
    box-shadow: 0 0 5px rgba(65, 131, 196, 0.5);
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.submit-button,
.new-quiz-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
}

.submit-button {
    background-color: #4183c4;
    color: white;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #316aa0;
}

.new-quiz-button {
    background-color: #f4f4f4;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
}

.new-quiz-button:hover {
    background-color: #ddd;
    color: #000;
}
</style>