<script setup lang="ts">
    import '../../assets/style/css/themevariable.scss'
    import '../../assets/style/css/style.css'
    import Breadcrumb from '../Breadcrumb.vue';
    import TableList from './TableList.vue';
</script>
<template>
    <div class="user__element">
        <v-container class="bg__element">
            <div class="title__element">
                <v-row class="row__element">
                    <v-col cols="12" sm="6">
                        <div class="user__title">
                            <h3>User List</h3>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <div class="btn__action">
                            <RouterLink to="/new">
                                <v-btn variant="outlined" class="bttn__info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                                    </svg>
                                </v-btn>
                            </RouterLink>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <div class="table__element">
            <TableList />
        </div>
    </div>    
</template>