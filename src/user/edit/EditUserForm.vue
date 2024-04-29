<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="first" label="First Name" model-value="Abdullah" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="last" label="Last Name" model-value="AQ" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="email" label="Email" model-value="abdullahalqaisi@ew-re.com" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="number" label="Mobile Number" model-value="9876543210" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="value" :items="items" label="Projects" chips multiple variant="outlined"></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="value2" :items="items2" label="User Type" chips multiple variant="outlined"></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="value3" :items="items3" label="Status" chips multiple variant="outlined"></v-select>
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


<script>
    export default {
        data: () => ({
            column: null,
            inline: null,

            items: ['PS3', 'PS10', 'PS5', 'PS6', 'PS1', 'PSR1', 'Drill Site B', 'Alwaha', 'Drill Site D', 'Drill Site C', 'Drill Site A', 'Jafurah PJT', 'Arwiqa', 'Roshn Al Janadruah', 'The Avenues', 'Camel festival Arena', 'Urban Heritage', 'CAB2024', 'Spark', 'Jeddah Project', 'Neom', 'RiyaMarche', 'P6D', 'Saudi Catering', 'Madain Village'],
            value: ['PS3', 'PS10', 'PS5', 'PS6', 'PS1', 'PSR1', 'Drill Site B',],

            items2: ['User', 'Admin'],
            value2: ['Admin'],

            items3: ['Active', 'Deactive'],
            value3: ['Active'],

            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                (value) => {
                    if (value) return true;
                    return 'Name is required.';
                },
                (value) => {
                    if (value?.length <= 10) return true;
                    return 'Name must be less than 10 characters.';
                }
            ],
            email: '',
            emailRules: [
                (value) => {
                    if (value) return true;
                    return 'E-mail is requred.';
                },
                (value) => {
                    if (/.+@.+\..+/.test(value)) return true;
                    return 'E-mail must be valid.';
                }
            ]
        })
    };
</script>