<script setup lang="ts">
    import '../../../assets/style/css/themevariable.scss'
    import '../../../assets/style/css/style.css'
    import ProfileDetailForm from './ProfileDetailForm.vue';
    import ProfileUploadImage from './ProfileUploadImage.vue'
</script>
<template>
    <div class="user__element">
        <v-container class="bg__element">
            <div class="title__element">
                <v-row class="row__element">
                    <v-col cols="12" sm="6">
                        <div class="user__title">
                            <h3>Account Setting</h3>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <div class="btn__action">
                            <RouterLink to="/profileedit">
                                <v-btn variant="outlined" class="bttn__info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                                            <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
                                        </g>
                                    </svg>
                                    Edit
                                </v-btn>
                            </RouterLink>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <div class="form__element">
            <ProfileUploadImage />
            <v-divider></v-divider>
            <ProfileDetailForm />
        </div>
    </div>    
</template>