<script setup>
</script>

<template>
    <div style="background-color: #eaeaea; height: auto">
        <div style="background-color: #FFFFFF; height: 120px; box-shadow: 10px grey;">
        <v-row>
            <v-col cols="12" md="1">
                    <div class="my-5" style="border-right: 1px solid #00000029;">
                        <v-img
                        class="mx-auto"
                        src="../../assets/axdif-icon-square-white.svg"
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
                                <li>Overview</li>
                            </div>
                            <div class="mx-8">
                                <li>Employee Stats</li>
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
                        <v-img
                        src="../../assets/ProfilePicture.jpg"
                        width="48"
                        height="48"
                        ></v-img>
                    </div>
                </v-col>
            </v-row>
        </div>

        <!-- content -->
        <v-container style="margin: 0 20px 0 80px">
            <v-row no-gutters justify="center">
                <v-col cols="12" md="8">
                    <div class="d-flex flex-column">
                        <div>
                            <v-card
                                width="760"
                                height="300"                                
                            >
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="8">
                                        <span style="color: #212121; font-weight: 800;">Summary</span>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <div class="d-flex">
                                            <span class="px-4 py-1">Period</span>
                                            <div class="" style="width: 150px;">
                                                <v-card class="px-2">
                                                    <input type="date">
                                                </v-card>
                                            </div>
                                        </div>
                                    </v-col>                                    
                                    <v-divider class="mx-3 mb-4"></v-divider>
                                    <v-col cols="12" md="4">
                                        <v-card
                                        width="auto"                                        
                                        >
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Working Day(s)</span>
                                            <h3 style="color: #212121;">2 Hari</h3>
                                        </div>
                                    </v-card>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-card
                                        width="auto"
                                        
                                        >
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Working Hour(s)</span>
                                            <h3 style="color: #212121;">13 hr 14 min</h3>
                                        </div>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-card
                                        width="auto"                                        
                                        >
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Exceptional Attendance</span>
                                            <h3 style="color: #212121;">0 Hari</h3>
                                        </div>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-card
                                        width="auto"                                        
                                        >
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Leave Taken</span>
                                            <h3 style="color: #212121;">0 Hari</h3>
                                        </div>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-card
                                        width="auto"                                        
                                        >
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Overtime</span>
                                            <h3 style="color: #212121;">00 hr 00 min</h3>
                                        </div>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-card
                                        width="auto"                                        
                                        >
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Claim</span>
                                            <h3 style="color: #212121;">IDR 0</h3>
                                        </div>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </v-card>
                        </div>
                        <div class="my-4">
                            <v-card
                            width="760"
                            height="auto"
                            class="pb-6"
                            >
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="8">
                                        <span style="color: #212121; font-weight: 800;">Task Due Soon</span>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <div class="d-flex justify-end">
                                            <span class="px-4 py-1" style="color: #0796E5">See all</span>
                                            <v-img style="float: left; margin-left: -110px;" class="py-4" src="../../assets/see-all.svg" width="" height="24"></v-img>
                                        </div>
                                    </v-col>
                                    <div>
                                        <v-divider></v-divider>
                                    </div>

                                    <v-col cols="12">
                                        <v-card
                                        width="auto"
                                        >
                                            <v-row>
                                                <v-col cols="12" md="6">
                                                    <div class="px-4 py-4">
                                                        <span style="color: #808D93;">UI/UX Designer</span>
                                                        <h3 style="color: #212121;">[Wms][Web][Task] Create Goals Design</h3>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <div class="py-4 my-3" style="color: #808D93; border-right: 1px solid #808D93;">
                                                        <span style="font-size: 14px;">
                                                            <v-icon icon="mdi-link-variant"></v-icon>
                                                            44
                                                        </span>
                                                        <span class="px-3" style="font-size: 14px;">
                                                            <v-icon icon="mdi-chat-outline"></v-icon>
                                                            1
                                                        </span>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <div class="my-8" style="width: auto; background-color: #09A2621F; border-radius: 10px 10px;">
                                                        <span class="px-5" style="color: #09A262;">medium</span>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <div class="my-8">
                                                        <v-icon class="px-2" size="15" icon="mdi-calendar-range"></v-icon>
                                                        <span style="font-size: 14px;">06 Aug 2021</span>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                        <v-card
                                        width="auto"
                                        class="my-4"
                                        >
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <div class="px-4 py-4">
                                                    <span style="color: #808D93;">UI/UX Designer</span>
                                                    <h3 style="color: #212121;">[Wms][Web][Task] Create Goals Design</h3>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <div class="py-4 my-3" style="color: #808D93; border-right: 1px solid #808D93;">
                                                    <span style="font-size: 14px;">
                                                        <v-icon icon="mdi-link-variant"></v-icon>
                                                        44
                                                    </span>
                                                    <span class="px-3" style="font-size: 14px;">
                                                        <v-icon icon="mdi-chat-outline"></v-icon>
                                                        1
                                                    </span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <div class="my-8" style="width: auto; background-color: #09A2621F; border-radius: 10px 10px;">
                                                    <span class="px-5" style="color: #09A262;">medium</span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <div class="my-8">
                                                    <v-icon class="px-2" size="15" icon="mdi-calendar-range"></v-icon>
                                                    <span style="font-size: 14px;">06 Aug 2021</span>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        </v-card>
                                        <v-card
                                        width="auto"
                                        >
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <div class="px-4 py-4">
                                                    <span style="color: #808D93;">UI/UX Designer</span>
                                                    <h3 style="color: #212121;">[Wms][Web][Task] Create Goals Design</h3>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <div class="py-4 my-3" style="color: #808D93; border-right: 1px solid #808D93;">
                                                    <span style="font-size: 14px;">
                                                        <v-icon icon="mdi-link-variant"></v-icon>
                                                        44
                                                    </span>
                                                    <span class="px-3" style="font-size: 14px;">
                                                        <v-icon icon="mdi-chat-outline"></v-icon>
                                                        1
                                                    </span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <div class="my-8" style="width: auto; background-color: #09A2621F; border-radius: 10px 10px;">
                                                    <span class="px-5" style="color: #09A262;">medium</span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <div class="my-8">
                                                    <v-icon class="px-2" size="15" icon="mdi-calendar-range"></v-icon>
                                                    <span style="font-size: 14px;">06 Aug 2021</span>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </v-card>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="d-flex flex-column">
                        <div>
                            <v-card
                            width="550"
                            height="auto"
                            >
                            <div class="d-flex flex-column">
                                <div>
                                    <v-img
                                    src="../../assets/img-banner-profile.jpg"
                                    height="173"
                                    style="margin-top: -10px;"
                                    ></v-img>
                                </div>
                                <div style="margin-top: -20px; background-color: none;">
                                    <v-img
                                    src="../../assets/ProfilePicture.jpg"
                                    height="140"
                                    ></v-img>
                                </div>
                                <div class="text-center py-3">
                                    <v-icon icon="mdi-domain"></v-icon>
                                    <span class="px-2">Google Indonesia</span>
                                </div>
                                <div class="px-4">
                                    <v-divider></v-divider>
                                </div>

                                <div>
                                    <v-container>
                                        <v-row justify="space-around my-3">
                                            <v-col cols="12" md="6">
                                                <span class="px-4">Employee ID</span>
                                            </v-col>
                                            <v-col cols="12" md="6" class="text-end">
                                                <span class="px-4">PT-GOO34</span>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <span class="px-4">Position</span>
                                            </v-col>
                                            <v-col cols="12" md="6" class="text-end">
                                                <span class="px-4">Senior Front-End Developer</span>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <span class="px-4">Join Date</span>
                                            </v-col>
                                            <v-col cols="12" md="6" class="text-end">
                                                <span class="px-4">23 Februari 2018</span>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <span class="px-4">Years of Service</span>
                                            </v-col>
                                            <v-col cols="12" md="6" class="text-end">
                                                <span class="px-4">4 Years 5 Months 2 Days</span>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </div>
                            </div>
                            </v-card>
                        </div>
                        <div class="my-2">
                            <v-card
                            width="550"
                            height="auto"
                            >
                            <v-container>

                                <div class="px-5 py-3">
                                    <span style="color: #212121; font-weight: 800;">Today's Attendance</span>
                                </div>
                                <div class="px-3">
                                    <v-divider></v-divider>
                                </div>
                                
                                <div class="d-flex px-5 justify-center my-4">
                                    <v-card
                                        width="240"                                        
                                        >
                                        <div style="background-color: #09A262; height: 10px;"></div>
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Clock In</span>
                                            <h3 style="color: #212121;">07:07</h3>
                                        </div>
                                    </v-card>
                                    <v-card
                                        width="240"  
                                        class="ml-5"                                      
                                        >
                                        <div style="background-color: #FF2442; height: 10px;"></div>
                                        <div class="px-4 py-4">
                                            <span style="color: #808D93;">Clock Out</span>
                                            <h3 style="color: #212121;">18:00</h3>
                                        </div>
                                    </v-card>
                                </div>
                            </v-container>
                            </v-card>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>