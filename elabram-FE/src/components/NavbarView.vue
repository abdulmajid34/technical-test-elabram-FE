<script setup>

</script>

<template>
    <div style="background-color: #FFFFFF; height: 120px">
        <v-row>
            <v-col cols="12" md="1">
                <div class="my-5" style="border-right: 1px solid #00000029;">
                    <v-img
                    class="mx-auto"
                    src="@/assets/axdif-icon-square-white.svg"
                    width="60"
                    height="60"
                    >
                    </v-img>
                </div>
            </v-col>
            <v-col cols="12" md="10">
                <ul class="py-10" style="list-style: none;">
                    <div class="d-flex">
                        <div class="mx-8">
                            <router-link :to="{ name: 'Dashboard-Overview' }">
                                <li>Overview</li>
                            </router-link>
                        </div>
                        <div class="mx-8">
                            <router-link :to="{ name: 'Employee-Stats' }">
                                <li>Employee Stats</li>
                            </router-link>
                        </div>
                        <div class="mx-8">
                            <li>Submission</li>
                        </div>
                        <div class="mx-8">
                            <li>Task</li>
                        </div>
                        <div class="mx-8">
                            <li>Chat</li>
                        </div>
                        <div class="mx-8">
                            <li>Payroll</li>
                        </div>
                    </div>
                </ul>
            </v-col>
            <v-col cols="12" md="1">
                <div class="my-7">
                    <v-dialog
                        transition="dialog-top-transition"
                        width="auto"
                    >
                        <template v-slot:activator="{ props }">
                            <v-img
                            src="@/assets/ProfilePicture.jpg"
                            width="48"
                            height="48"
                            v-bind="props"
                            ></v-img>
                        </template>
                        <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar
                            color="primary"
                            title="Opening from the top"
                            ></v-toolbar>
                            <v-card-text>
                            <div class="text-h2 pa-12">Hello world!</div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                            <v-btn
                                variant="text"
                                @click="isActive.value = false"
                            >Close</v-btn>
                            </v-card-actions>
                        </v-card>
                        </template>
                    </v-dialog>
                    
                </div>
            </v-col>
        </v-row>
    </div>
</template>