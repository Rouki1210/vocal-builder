<template>
    <div>
        <h1>Search word</h1>
        <form @submit.prevent>
            <div>
                <i class="search icon"></i>
                <input type="text" id="search-box" v-model="searchTerm" @keyup="search" placeholder="Type to search..."/>
            </div>
            <ul v-if="results.length">
                <li v-for="(result, index) in results" :key="index">{{ result }}</li>
            </ul>
                <p v-if="!results.length && searchTerm && !loading">No results found.</p>
                <p v-if="loading">Loading...</p>
        </form>
    </div>
</template>


<script>
import { searchVocab } from '@/helpers/api';

export default {
    name: "Search",
    data() {
        return {
            searchTerm: "",
            results: [],
            loading: false,
        };
    },
    methods: {
        async search() {
            if(!this.searchTerm.trim()){
                this.results = [];
                return;
            }
            try{
                this.loading = true;
                const data = await searchVocab(this.searchTerm);
                console.log("Result", data);
                console.log(this.searchTerm);
                console.log(this.results);
                this.results = data?.results || [];
            } catch (error){
                console.error("Error", error);
                this.results = [];
            } finally {
                this.loading = false;
            }
        }
    }
    // data(){
    //     function search(e){
    //         let search = e.target.value.trim();
    //         axios.post(backend, {
    //             search
    //         }).then(res => {
    //             console.log(res)
    //         })
    //     }

    //     return {search}
    // },
    //     return {
    //         word: {},
    //     }
    // },

};
</script>