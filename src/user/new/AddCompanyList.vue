<template>
    <div class="user__title edit__dialog">
        <h3>Add Company Name</h3>
    </div>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field v-model="first" label="Company Name" model-value="Role" variant="outlined" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                    <div class="action___bttn__form">
                        <v-btn class="me-4" type="submit" color="success">SUBMIT</v-btn>
                        <v-btn @click="dialog = false" color="error">CANCEL</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>


<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>