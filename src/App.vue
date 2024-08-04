<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
    name: 'Project',
    components: {
    ProjectCard
    },
    data() {
        return{
            title: 'Project',
            project: [],
            technologies:'project.type.title'
        };
    },
    methods:{
        projectCard(){
            const result = axios
                .get('http://127.0.0.1:8000/api/test')
                .then((response) =>{
                    if (response.data.status && response.data.results.length) {
                        console.log('resultati della risposta');
                        console.log(response.data.results);

                        this.project = response.data.results;
                    } else {
                        console.log('Errore durante il recupero dei progetti:');                    }
                })
                .catch(error=>console.log(error))
            ;
        }
    },
    created (){
        this.projectCard();
    }

}
</script>
<template>
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
  </div>
</template>
<style lang="scss" scoped></style>