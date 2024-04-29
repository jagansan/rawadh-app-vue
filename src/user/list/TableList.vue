<template>
    <v-data-table :headers="headers" :items="desserts" item-selectable="selectable" item-value="name" items-per-page="5">
        <template v-slot:item="{ item }">
            <tr>
                <!-- <td>
                    <div class="v-selection-control__input">
                        <i class="mdi-checkbox-blank-outline mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default" aria-hidden="true"></i>
                    </div>
                </td> -->
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.number }}</td>
                <td>
                    <span :class="item.activetype">{{ item.active }}</span>
                </td>
                <td>
                    <span :class="item.userview">{{ item.usertype }}</span>
                </td>
                <td>
                    <RouterLink to="/view">
                        <v-icon title="View Detail" class="icon__style__info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		                        <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" />
	                        </svg>
                        </v-icon>  
                    </RouterLink>
                    <RouterLink to="">
                        <v-icon @click="dialog = true" title="Edit" class="icon__style__info">mdi-pencil</v-icon>
                        <v-dialog v-model="dialog" width="auto">
                            <v-card>
                                <EditModalDialog />
                            </v-card>                            
                        </v-dialog>
                    </RouterLink>
                    <RouterLink to="">
                        <v-icon title="Delete" class="icon__style__info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" />
                            </svg>
                        </v-icon>          
                    </RouterLink>
                </td>
            </tr>
        </template>
    </v-data-table>
</template>

<script setup lang="ts">
    import { ref } from 'vue'; // Import ref if needed
    import EditModalDialog from './EditModalDialog.vue';

    // Define reactive data
    const dialog = ref(false);
    const headers = [
        { title: 'Name', align: 'start', key: 'name' },
        { title: 'Email', align: 'start', key: 'email' },
        { title: 'Mobile', align: 'start', key: 'number' },
        { title: 'Status', align: 'start', key: 'active' },
        { title: 'User Type', align: 'start', key: 'usertype' },
        { title: 'Action', align: 'start', key: 'action' },
    ];
    const desserts = ref([
        {
            name: 'Abdullah AQ',
            email: 'abdullahalqaisi@ew-re.com',
            number: 9876543210,
            active: 'Active',
            usertype: 'User',
            selectable: true,
            userview: 'user_type',
            activetype: 'active_element',
        },
        {
            name: 'Adham',
            email: 'Adham.Sublouban@dar.com',
            number: 9876543210,
            active: 'active',
            usertype: 'Admin',
            selectable: true,
            userview: 'admin_type',
            activetype: 'active_element'
        },
        {
            name: 'Ahmad S',
            email: 'Ahmads@enpro.com.sa',
            number: 9876543210,
            active: 'Deactive',
            usertype: 'Admin',
            selectable: true,
            userview: 'admin_type',
            activetype: 'deactive_element',
        },
        {
            name: 'Ahmed Balharith',
            email: 'ahmed.balharith@aramco.com',
            number: 9876543210,
            active: 'Active',
            usertype: 'Admin',
            selectable: true,
            activetype: 'active_element',
            userview: 'admin_type',
        },
        {
            name: 'Belal Omor',
            email: 'belal.omor@enpro.com.sa',
            number: 9876543210,
            active: 'Deactive',
            usertype: 'Admin',
            selectable: true,
            activetype: 'deactive_element',
            userview: 'admin_type',
        },
        {
            name: 'Cormac Hickey',
            email: 'cormac.hickey@aramco.com',
            number: 9876543210,
            active: 'Active',
            usertype: 'Admin',
            selectable: true,
            activetype: 'active_element',
            userview: 'admin_type',
        },
        // Add other dessert objects as needed
    ]);

    // Define methods
    const editItem = (item: any) => {
        // Implement your edit logic here, e.g., show a dialog for editing.
        console.log('Edit:', item);
    };
</script>
