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
                    <v-select v-model="value" :items="items" label="Projects" multiple variant="outlined">
                        <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index < 2">
                                <span>{{ item.title }}</span>
                            </v-chip>
                            <span v-if="index === 2" class="text-grey text-caption align-self-center"> (+{{ value.length
                                - 2 }} others) </span>
                        </template>
                    </v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <p>Active</p>
                    <v-radio-group v-model="inline" inline>
                        <v-radio label="Active" value="radio-1"></v-radio>
                        <v-radio label="Deactive" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                    <p>User Type</p>
                    <v-radio-group v-model="inline" inline>
                        <v-radio label="Make Normal User" value="radio-1"></v-radio>
                        <v-radio label="Make Admin" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                    <p>Two Factor Authentication</p>
                    <v-radio-group v-model="inline" inline>
                        <v-radio label="On" value="radio-1"></v-radio>
                        <v-radio label="Off" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col cols="12" md="6"></v-col>
                <v-col cols="12" md="12">
                    <div class="action___bttn__form">
                        <v-btn class="me-4" type="submit" color="success">SUBMIT</v-btn>
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
            value: [],

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