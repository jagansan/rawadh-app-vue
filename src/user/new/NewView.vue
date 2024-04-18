<script setup lang="ts">
    import '../../assets/style/css/themevariable.scss'
    import '../../assets/style/css/style.css'
    import Breadcrumb from '../Breadcrumb.vue';
    import AddUserForm from './AddUserForm.vue';
</script>
<template>
    <div class="user__element">
        <v-container class="bg__element">
            <div class="title__element">
                <v-row class="row__element">
                    <v-col cols="12" sm="6">
                        <div class="user__title">
                            <h3>Add New User</h3>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <div class="btn__action">
                            <RouterLink to="/userlist">
                                <v-btn variant="outlined" class="bttn__info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
		                                <path fill="currentColor" d="m19.031 4.281l-11 11l-.687.719l.687.719l11 11l1.438-1.438L10.187 16L20.47 5.719z" />
	                                </svg>
                                    Back
                                </v-btn>
                            </RouterLink>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <div class="form__element">
            <AddUserForm />
        </div>
    </div>    
</template>