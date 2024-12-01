<template>
    <div>
        <h1>Language Quiz</h1>
        <ul>
            <li v-for="(item, index) in quiz" :key="index">
                <p>English: {{ item.english }}</p>
                <p>German: {{ item.german }}</p>
                <p>Vietnamese: {{ item.vietnamese }}</p>
            </li>
        </ul>
        <button @click="getQuiz">Get New Quiz</button>
    </div>
</template>

<script>
import { testVocab } from "../helpers/api";

export default {
    data() {
        return {
            quiz: [],      // Holds the quiz data
            loading: false, // Loading state
            error: null,    // Error message
        };
    },
    methods: {
        async getQuiz() {
            try {
                this.loading = true;
                this.error = null; // Clear any previous error
                const data = await testVocab();
                console.log(data);
                this.quiz = data.quiz || []; // Assign quiz data
            } catch (err) {
                this.error = "Failed to fetch quiz. Please try again.";
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        this.getQuiz(); // Fetch a quiz on component load
    },
};
</script>

<style scoped>
.quiz-item {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>