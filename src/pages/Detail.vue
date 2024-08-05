<script>
    import axios from 'axios';

    export default{
        name: 'Detail',
        data(){
            return{
                project: null,
                api:{
                    url:'http://127.0.0.1:8000/api/test',
                },
            }
        },
        methods: {
            Route(){

            },
            projectCard(){
                const url = this.api.url +'/'+ this.$route.params.slug;
                console.log(url);
                axios
                .get(url)
                .then((response) =>{
                    console.log(response);
                    this.response = response.data;
                    this.project = response.data.results;
                })
                .catch(error=>console.log(error));
            }
        },
        created(){
            this.projectCard();
        }
    }
</script>
<template>
    <main>
        <div class="container">
            <h1 class="text-danger py-3" >{{project.title}}</h1>
            <p class="card-text">{{project.content}}</p>
            <p><strong class="text-danger" >SLUG:</strong> {{project.slug}}</p>
            <div v-if="project.type && project.type.title">
                <p><strong class="text-danger">TYPE:</strong> {{ project.type.title }}</p>
            </div>
            <div v-else>
                <p><strong class="text-danger">TYPE:</strong> non c'è nessun Type</p>
            </div>
    
            <div v-if="project.technologies && project.technologies.length">
                <p><strong class="text-danger">Technologies:</strong>
                    <ul>
                        <li v-for="technology in project.technologies">{{ technology.title }}</li>
                    </ul>
                </p>                
            </div>
            <div v-else>
                <p><strong class="text-danger">TECHNOLOGIES:</strong> non c'è nessun Technology</p>
            </div>
                     
            <router-link :to="{name: 'listmain'}" class="btn btn-outline-success"> torna al menu principale</router-link>
            
        </div>
    </main>
</template>
<style lang="scss" scope> 

</style>