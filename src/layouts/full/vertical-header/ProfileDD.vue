<script setup lang="ts">
import { ref } from 'vue';
import { LogoutIcon, UserIcon, UserCircleIcon, SettingsIcon, } from 'vue-tabler-icons';
import { useAuthStore } from '@/stores/auth';

const swt1 = ref(true);
const swt2 = ref(false);
const authStore = useAuthStore();
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- profile DD -->
  <!-- ---------------------------------------------- -->
  <div class="">
    <!-- <h4 class="mb-n1">Good Morning, <span class="font-weight-regular">John Doe</span></h4>
    <span class="text-subtitle-2 text-medium-emphasis">Project admin</span>

    <v-text-field persistent-placeholder placeholder="Search" class="my-3" color="primary" variant="outlined" hide-details>
      <template v-slot:prepend-inner>
        <SearchIcon stroke-width="1.5" size="20" class="text-lightText SearchIcon" />
      </template>
    </v-text-field> -->

    <perfect-scrollbar >
      <!-- <div class="bg-lightwarning rounded-md pa-5 my-3 circle sm-circle lg-circle">
        <h4>Upgrade your plan</h4>
        <h6 class="text-subtitle-2 text-medium-emphasis mr-11 pr-11 mb-3 mt-2">70% discount for 1 years subscriptions.</h6>
        <v-btn color="warning" variant="flat" target="_" href="https://codedthemes.com/item/berry-vue-admin-dashboard/"> Go Premium </v-btn>
      </div> -->
      <!-- <div class="bg-lightprimary rounded-md px-5 py-3 my-3">
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Start DND Mode</h5>
          <div>
            <v-switch v-model="swt1" color="primary" hide-details></v-switch>
          </div>
        </div>
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Allow Notifications</h5>
          <div>
            <v-switch v-model="swt2" color="primary" hide-details></v-switch>
          </div>
        </div>
      </div> -->

      <v-list class="mt-3">
        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <UserCircleIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">
            <RouterLink to="/userlist">Manage User</RouterLink> 
          </v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <UserCircleIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">
            <RouterLink to="/camera">Camera</RouterLink> 
          </v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <SettingsIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">
            <RouterLink to="/profile">Account Settings</RouterLink> 
          </v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <SettingsIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">
            <RouterLink to="/companyprofile">Company Profile</RouterLink> 
          </v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <UserCircleIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2">
            <RouterLink to="/updatepassword">Updated Password</RouterLink> 
          </v-list-item-title>
        </v-list-item>
        
        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <LogoutIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2" @click="authStore.logout()">
            <RouterLink to="">Logout</RouterLink> 
          </v-list-item-title>
        </v-list-item>

        <!-- <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <UserIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> Social Profile</v-list-item-title>

          <template v-slot:append>
            <v-chip color="warning" class="text-white" text="02" variant="flat" size="small" />
          </template>
        </v-list-item> -->

        <!-- <v-list-item @click="authStore.logout()" color="secondary" rounded="md">
          <template v-slot:prepend>
            <LogoutIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </perfect-scrollbar>
  </div>
</template>
