<template>
    <div>
        <h1>Language Quiz</h1>
        <ul>
            <div v-for="(item, index) in quiz" :key="index">
                <div class="ui labeled input fluid">
                    <div class="ui label"><i class="united kingdom flag"></i> English</div>
                    <input type="text" required v-model="item.english" />
                </div>
                <br />
                <div class="ui labeled input fluid">
                    <div class="ui label"><i class="germany flag"></i> German</div>
                    <input type="text" required v-model="item.german" />
                </div>
                <br />
                <div class="ui labeled input fluid">
                    <div class="ui label"><i class="vietnam flag"></i> Vietnamese</div>
                    <input type="text" required v-model="item.vietnamese" />
                </div>
                <br />
            </div>
        </ul>
        <button class="ui primary button">Submit</button>
        <br><br>
        <button @click="getQuiz" class="ui primary button">Get New Quiz</button>
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