<script>
import axios from 'axios';
import ProjectCard from './card/ProjectCard.vue';

    export default{
        name: 'ListMain',
        components: {
        ProjectCard,
        },
        data() {
        return{
            title: 'Project',
            project: [],
            currentPage: 1,
        };
    },
    methods:{
        prevPage() {
            this.currentPage--;
            this.projectCard();
        
        },
        nextPage() {
            this.currentPage++;
            this.projectCard();
        
        },
        projectCard(){
            const result = axios
                .get('http://127.0.0.1:8000/api/test', {
                    params:{
                        page: this.currentPage,
                    },
                })
                .then((response) =>{
                    this.response = response.data
                    if (response.data.results) {
                        console.log('resultati della risposta');
                        console.log(response.data.results.data);

                        this.project = response.data.results.data;
                    } else {
                        console.log('Errore durante il recupero dei progetti:');                    
                    }
                })
                .catch(error=>console.log(error));
        }
    },
    created (){
        this.projectCard();
    }
    }
</script>
<template>
    <main>
        <div class="container">
            <h1>Lista dei Progetti</h1>
        
            <div class="row row-gap-4 my-5">
                <div v-if="project.length === 0">Caricamento...</div>
                <div v-else>
                    <div class="row row-gap-4 my-5">
                        <ProjectCard v-for="proj in project" :key="proj.id" :project="proj" />
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" @click="prevPage" v-if="response?.results?.prev_page_url">
                    <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <!-- number -->
                    <li class="page-item" :class="{ active: currentPage === 1 }">
                        <a class="page-link" @click.prevent="currentPage = 1; projectCard()">1</a>                    
                    </li>
                    <li class="page-item" :class="{ active: currentPage === 2 }">
                        <a class="page-link" @click.prevent="currentPage = 2; projectCard()">2</a>                    
                    </li>
                    <li class="page-item" :class="{ active: currentPage === 3 }">
                        <a class="page-link" @click.prevent="currentPage = 3; projectCard()">3</a>                    
                    </li>

                    <li class="page-item" @click="nextPage" v-if="response?.results?.next_page_url">
                    <a class="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<style lang="scss" scope> 

</style>
