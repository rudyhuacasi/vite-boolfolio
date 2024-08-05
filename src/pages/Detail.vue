<script>
    import axios from 'axios';

    export default{
        name: 'Detail'
    }
</script>
<template>
    <main>
        <p class="card-text">{{project.content}}</p>
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
                </div>
    </main>
</template>
<style lang="scss" scope> 

</style>