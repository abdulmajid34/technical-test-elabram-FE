<script setup>
import { ref } from 'vue';
const showPassword = ref(false);
</script>

<template>
    <v-row no-gutters>
        <v-col cols="12" md="8">
            <div class="style-image d-flex flex-column" style="height: 100vh;">
                <div class="d-flex fill-height justify-center align-center">
                    <v-img 
                    src="../../assets/illustration-4.jpg"
                    width="300" 
                    height="400"
                    aspect-ratio="16/9" 
                    contain
                    class="d-flex justify-center"
                    >
                    </v-img>
                </div>
                <div class="text-center py-8">
                    <span style="color: #FFFFFF; font-weight: 200; font-size: 20px;">&copy; Copyright 2023. All Right Reserved.</span>
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="4">
            <v-container>
                <div class="d-flex flex-column mt-4 mx-10">
                    <h1 style="color: #18266A; font-size: 50px;">axdif</h1>
                    <span class="my-2" style="color: #000037;">
                        <h2 style="font-weight: 800;" >Login to your Account</h2>
                        <p class="pt-2">Hi, welcome back! Select method to login</p>
                    </span>
                    <!-- button login with oauth -->
                    <div class="my-4">
                        <v-btn class="" style=" border:none; border-radius:5px;">
                            <div class="px-2">
                                <img class="" src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" style="vertical-align: middle; width: 20px;">
                                <span class="px-4" style="font-weight:bold;">Google</span>
                            </div>
                        </v-btn>
                        <v-btn class="mx-4" style="border:none; border-radius:5px;">
                            <div class="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                                    <path fill="#0077B5" d="M41.125,0H6.875C3.09,0,0,3.089,0,6.875v34.25C0,44.911,3.09,48,6.875,48h34.25
                                    C44.911,48,48,44.911,48,41.125v-34.25C48,3.089,44.911,0,41.125,0z M14.303,40.108h-5.178V18.432h5.178V40.108z M9.163,16.174
                                    c-1.719,0-3.119-1.398-3.119-3.118c0-1.721,1.4-3.119,3.119-3.119c1.721,0,3.118,1.398,3.118,3.119
                                    C12.281,14.776,10.884,16.174,9.163,16.174z M40.108,40.108h-5.178v-9.862c0-2.35-0.042-5.375-3.274-5.375
                                    c-3.276,0-3.779,2.559-3.779,5.203v9.035h-5.177V18.432h5.177v2.767c1.373-2.098,3.827-4.316,9.895-4.316
                                    c7.22,0,12.608,4.715,12.608,14.957V40.108z"/>
                                </svg>
                                <span class="px-4" style="font-weight:bold;">LinkedIn</span>
                            </div>
                        </v-btn>
                    </div>

                    <div class="d-flex flex-row">
                        <span style="border-bottom: 1px solid #707070; height: 10px; width: 25%;"></span>
                        <span class="px-2">Or continue with email</span>
                        <span style="border-bottom: 1px solid #707070; height: 10px; width: 25%;"></span>
                    </div>

                    <!-- form login -->
                    <v-form class="my-4">                        
                        <v-row>                                
                            <v-col cols="12">
                                <span class="" style="color: #000037; font-weight: 700;">Email</span>
                                <v-text-field 
                                    class="my-2"            
                                    placeholder="e.g JohnDoe@mail.com"                                                                                                           
                                    required
                                    hide-details
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <span style="color: #000037; font-weight: 700;">Password</span>
                                <v-text-field    
                                    class="my-2"        
                                    placeholder="insert password"  
                                    required
                                    hide-details
                                    variant="outlined"
                                    :type="showPassword ? 'text' : 'password'"                                                                                                         
                                    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append-inner="showPassword = !showPassword"
                                ></v-text-field>
                            </v-col>
                        </v-row> 
                    </v-form>

                    <div class="d-flex justify-space-between">
                        <span class="d-flex" style="float: left;">
                            <v-checkbox color="red" hide-details></v-checkbox>
                            <label class="py-4" style="color: #5B6591;">Remember Me</label>
                        </span>   
                        <div class="py-4 px-4">
                            <a class="pt-5" href="#" style="text-decoration: none; color: #0796E5;">Forgot Password</a>
                        </div>
                    </div>

                    <div>
                        <router-link :to="{ name: 'Dashboard-Overview' }">
                            <v-btn color="#EC4B5A" width="504" height="53">
                                Login
                            </v-btn>
                        </router-link>
                    </div>

                    <div class="text-center pt-6">
                        <span style="color: #5B6591;">Privacy Policy • Terms & Condition</span>
                    </div>
                </div>
            </v-container>
        </v-col>
    </v-row>
</template>

<style scoped>
    .style-image {
        background-image: url('../../assets/MaskGroup1.svg');
        background-size: cover;
        background-color: #0796E5;  
    }
</style>