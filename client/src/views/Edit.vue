<template>
    <div>
       <h1>Edit Word</h1>
       <form action="" @submit.prevent="onSubmit">
         <div class="ui labeled input fluid">
           <div class="ui label"><i class="united kingdom flag"></i> English</div>
           <input type="text" required v-model="word.english" />
         </div>
         <br />
         <div class="ui labeled input fluid">
           <div class="ui label"><i class="germany flag"></i> German</div>
           <input type="text" required v-model="word.german" />
         </div>
         <br />
         <button class="ui primary button">Submit</button>
       </form>
     </div>
   </template>
   
   <script>
   import { ViewVocab, EditVocab } from "../helpers/api";
   export default {
     name: "Edit",
     data() {
       return {
         word: {},
       };
      },
     async mounted() {
       this.word = await ViewVocab(this.$route.params.id);
     },
     methods: {
       onSubmit: async function () {
         //1. add new word to database using axios
         await EditVocab(this.$route.params.id, this.word);
         //2. display succeed message using vue-flash
         this.flash("Edit word succeed !");
         //3. redirect to word list using $router
         this.$router.push("/words");
       },
     },
   };
   </script>