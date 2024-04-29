<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="first" label="First Name" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="last" label="Last Name" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="email" label="Email" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="number" label="Mobile Number" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-row>
                        <v-col cols="12" md="9">
                            <v-select v-model="value1" :items="items" label="Company" multiple variant="outlined">
                                <template v-slot:selection="{ item, index }">
                                    <v-chip v-if="index < 2">
                                        <span>{{ item.title }}</span>
                                    </v-chip>
                                    <span v-if="index === 2" class="text-grey text-caption align-self-center"> (+{{ value.length
                                        - 2 }} others) </span>
                                </template>
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                            <div class="btn__action add__company" @click="dialog = true">
                                <v-icon  title="Edit">mdi-plus</v-icon>
                                Add Company
                                <v-dialog v-model="dialog" width="400">
                                    <v-card>
                                       <ModalPopupVue />
                                    </v-card>                            
                                </v-dialog>
                            </div>
                        </v-col>
                    </v-row>   
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="value2" :items="items2" label="User Type" variant="outlined"></v-select>
                </v-col>
    
                <v-col cols="12" md="12">
                    <div class="action___bttn__form">
                        <v-btn class="me-4" type="submit" color="success">SAVE</v-btn>
                        <v-btn @click="handleReset" color="error">CANCEL</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalPopupVue from './ModalPopup.vue';
const dialog = ref(false);
const column = ref(null);
const inline = ref(null);
const items = ['Roles'];
const value1 = ['Roles'];
const value = ref([]);
const valid = ref(false);
const firstname = ref('');
const lastname = ref('');
const email = ref('');

const nameRules = [
    (value) => {
        if (value) return true;
        return 'Name is required.';
    },
    (value) => {
        if (value?.length <= 10) return true;
        return 'Name must be less than 10 characters.';
    }
];

const emailRules = [
    (value) => {
        if (value) return true;
        return 'E-mail is required.';
    },
    (value) => {
        if (/.+@.+\..+/.test(value)) return true;
        return 'E-mail must be valid.';
    }
];
</script>

