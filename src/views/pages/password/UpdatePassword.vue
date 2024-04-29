<script setup lang="ts">
    import '../../../assets/style/css/themevariable.scss'
    import '../../../assets/style/css/style.css'
    import { ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    const show1 = ref(false);
</script>
<template>
    <div class="user__element">
        <v-container class="bg__element">
            <div class="title__element">
                <v-row class="row__element">
                    <v-col cols="12" sm="12">
                        <div class="user__title">
                            <h3>Change Your Password</h3>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <div class="form__element">
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="password" :rules="passwordRules" label="Old Password" required density="comfortable" variant="outlined" color="primary" hide-details="auto" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" class="pwdInput"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="password" :rules="passwordRules" label="New Password" required density="comfortable" variant="outlined" color="primary" hide-details="auto" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" class="pwdInput"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="password" :rules="passwordRules" label="New Confirm Password" required density="comfortable" variant="outlined" color="primary" hide-details="auto" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" class="pwdInput"></v-text-field>
                        </v-col>
            
                        <v-col cols="12" md="12">
                            <div class="action___bttn__form">
                                <v-btn class="me-4" type="submit" color="success">SAVE</v-btn>
                                <v-btn @click="handleReset" color="error">CLEAR</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </div>
    </div>    
</template>

<style lang="scss">
.custom-devider {
  border-color: rgba(0, 0, 0, 0.08) !important;
}
.googleBtn {
  border-color: rgba(0, 0, 0, 0.08);
  margin: 30px 0 20px 0;
}
.outlinedInput .v-field {
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}
.orbtn {
  padding: 2px 40px;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 20px 15px;
}
.pwdInput {
  position: relative;
  .v-input__append {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>