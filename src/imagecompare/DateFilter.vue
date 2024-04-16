<script setup lang="ts">
    import { ref } from 'vue';
    const show1 = ref(false);
</script>
<template>
    <v-container class="form__section">
        <Form>
            <v-row no-gutters class="form__row">
                <v-col cols="12" sm="2">
                    <v-sheet class="ma-2 pa-2">
                        <div class="form__type">
                            <label>From Date</label>
                            <v-text-field required density="comfortable" variant="outlined" color="primary" hide-details="auto" :type="show1 ? 'text' : 'date'" class="form___input"></v-text-field>
                        </div>
                    </v-sheet>
                </v-col>
                <v-col cols="12" sm="2">
                    <v-sheet class="ma-2 pa-2">
                        <div class="form__type">
                            <label>To Date</label>
                            <v-text-field required density="comfortable" variant="outlined" color="primary" hide-details="auto" :type="show1 ? 'text' : 'date'" class="form___input"></v-text-field>
                        </div>
                    </v-sheet>
                </v-col>
                <v-col cols="12" sm="1">
                    <v-sheet class="ma-2 pa-2">
                        <p class="mb-4"></p>
                        <v-btn color="secondary" size="large">Submit</v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </Form>
    </v-container>
</template>