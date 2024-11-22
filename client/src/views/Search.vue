<template>
    <div>
        <h1>Search word</h1>
        <form>
            <div>
                <i class="search icon"></i>
                <input type="text" id="search-box" @keyup="search" />
            </div>
        </form>
    </div>
</template>


<script>
import { searchVocab } from '@/helpers/api';
import axios from 'axios';

const backend ='http://localhost:3000/vocabs/';

export default {
    name: "Search",
    data(){
        function search(e){
            let search = e.target.value.trim();
            axios.post(backend, {
                search: search
            }).then(res => {
                console.log(res)
            })
        }

        return {search}
    }

};
</script>