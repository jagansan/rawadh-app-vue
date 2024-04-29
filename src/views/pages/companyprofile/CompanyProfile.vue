<script setup lang="ts">
    import '../../../assets/style/css/themevariable.scss'
    import '../../../assets/style/css/style.css'
    import CompanyProfileImage from './CompanyProfileImage.vue';
</script>
<template>
    <div class="user__element">
        <v-container class="bg__element">
            <div class="title__element">
                <v-row class="row__element">
                    <v-col cols="12" sm="12">
                        <div class="user__title">
                            <h3>Company Profile</h3>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <div class="form__element">
            <CompanyProfileImage />
        </div>
    </div>    
</template>