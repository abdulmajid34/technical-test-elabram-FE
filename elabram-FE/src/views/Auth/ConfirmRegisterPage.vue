<script setup>
import CarouselView from '@/components/CarouselView.vue';
</script>

<template>
    <v-row no-gutters>
        <v-col cols="12" md="4">
            <!-- carousel -->
            <CarouselView />
        </v-col>
        <v-col cols="12" md="8">
            <v-container>
                <div class="d-flex flex-column mt-4 mx-10">
                    <h1 style="color: #18266A; font-size: 50px;">axdif</h1>
                    <div class="my-4" style="margin-left: 50px;">
                        <v-row no-gutters >
                            <v-col cols="12" md="2" class="">
                                <v-img
                                    src="../../assets/img-1.svg"                            
                                    width="100"
                                >
                                </v-img>
                            </v-col>
                            <v-col cols="12" md="10" class="">
                                <div class="d-flex flex-column">
                                    <span class="span-style">Verify your account</span>
                                    <p class="paraf-confirm">A verification link has been sent to your email account</p>
                                </div>
                            </v-col>
                            <v-col cols="12" md="2" class="custom-border">
                                <span></span>
                            </v-col>                                       
                            <v-col cols="12" md="4">
                                <div class="d-flex">
                                    <v-img
                                        src="../../assets/img-2.svg"                            
                                        width="100"                                    
                                    >
                                    </v-img>
                                    <div class="d-flex flex-column ml-4">
                                        <span class="span-style">Login to your account</span>
                                        <p class="paraf-confirm">Login to your Axdif account</p>
                                    </div>
                                </div>
                            </v-col>
                                                        
                        </v-row>
                        <v-row style="margin-left: 190px;" >
                            <v-col cols="12" md="2" class="custom-border">

                            </v-col>
                            <v-col cols="12" md="8">
                                <div class="d-flex">
                                    <v-img
                                            src="../../assets/img-illustration-3.svg"                            
                                            width="100"                                    
                                        >
                                        </v-img>
                                        <div class="d-flex flex-column pl-4">
                                        <span class="span-style">Setup your data</span>
                                        <p class="paraf-confirm">Input your employee data and get the ease of managing employee</p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div class="d-flex justify-center mt-16">
                            <router-link :to="{ name: 'Login' }">
                                <v-btn flat color="#EC4B5A">
                                    Login to Axdif
                                </v-btn>                            
                            </router-link>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-col>
    </v-row>
</template>

<style scoped>
    .custom-border {
        border-left: 5px dashed  black;   
        border-bottom: 5px dashed  black;   
        color: #2B427C;          
        margin-left: 50px;
        margin-top: 20px;        
    }
    .span-style {
        font-size: 28px;
        color: #12204D;
        font-weight: 700;
    }
    .paraf-confirm {
        color: #6E7DA5;
        font-size: 22px;
    }
</style>