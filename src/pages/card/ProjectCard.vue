<script>
      export default {
        name: 'ProjectCard',
        props: {
            project: {
            type: Object,
            required: true
            }
        }
      }
</script>
<template>
    <div class="col-4">
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <!-- <p class="card-text">{{project.content}}</p>
                <p><strong>SLUG:</strong> {{project.slug}}</p>
                <div v-if="project.type && project.type.title">
                    <p><strong>TYPE:</strong> {{ project.type.title }}</p>
                </div>
                <div v-else>
                    <p><strong>TYPE:</strong> non c'è nessun Type</p>
                </div>

                <div v-if="project.technologies && project.technologies.length">
                    <p><strong>Technologies:</strong>
                        <ul>
                            <li v-for="technology in project.technologies">{{ technology.title }}</li>
                        </ul>
                    </p>                
                </div>
                <div v-else>
                    <p><strong>TECHNOLOGIES:</strong> non c'è nessun Technology</p>
                </div> -->
                <router-link :to="{name:'detail', params: {slug: project.slug}}">Info</router-link>
           
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>