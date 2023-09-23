<script setup>
import { ref } from 'vue';
import CarouselView from '@/components/CarouselView.vue';

const showPassword = ref(false);
const showConfirmPassword = ref(false);


</script>

<template>
    <v-row no-gutters="">
        <v-col  cols="12" md="4">
            <!-- carousel -->
            <CarouselView />
        </v-col>
        <v-col cols="12" md="8">
            <v-container>
                <div class="d-flex flex-column mt-4 mx-10">
                    <h1 style="color: #18266A; font-size: 50px;">axdif</h1>
                    <span class="my-2" style="color: #000037;">
                        <h2 style="font-weight: 800;" >Manage all your employee efficeiently</h2>
                        <p class="pt-2">Let's get you all set up so you can verify your personal account and begin setting up your profile</p>
                    </span>

                    <!-- form register -->
                    <v-form class="my-4">                        
                        <v-row>                                
                            <v-col cols="12" md="6">
                                <span class="label-class">Company Name</span>
                                <v-text-field                                                                                                                        
                                    required
                                    placeholder="e.g John"                                        
                                    hide-details
                                    variant="outlined"
                                    class="input-class"
                                ></v-text-field>
                            </v-col>                                
                            <v-col cols="12" md="6">
                                <span class="label-class">FullName</span>
                                <v-text-field             
                                    placeholder="e.g Doe"                                                                                                           
                                    required
                                    hide-details
                                    variant="outlined"
                                    class="input-class"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <span class="label-class">Email</span>
                                <v-text-field             
                                    placeholder="e.g JohnDoe@mail.com"                                                                                                           
                                    required
                                    hide-details
                                    variant="outlined"
                                    class="input-class"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <span class="label-class">Phone Number (optional)</span>
                                <v-row no-gutters>
                                    <v-col cols="4">
                                        <v-text-field             
                                            placeholder="country code"                                                                                                           
                                            required
                                            hide-details
                                            variant="outlined"
                                            class="input-class"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="8"  class="pl-2">
                                        <v-text-field             
                                            placeholder="e.g 082xxxxx"                                                                                                           
                                            required
                                            hide-details
                                            variant="outlined"
                                            class="input-class"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>                                
                            </v-col>
                            <v-col cols="12" md="6">
                                <span class="label-class">Password</span>
                                <v-text-field        
                                    class="input-class"     
                                    placeholder="insert password"  
                                    required
                                    hide-details
                                    variant="outlined"
                                    :type="showPassword ? 'text' : 'password'"                                                                                                         
                                    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append-inner="showPassword = !showPassword"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <span class="label-class">Confirm Password</span>
                                <v-text-field           
                                    class="input-class"  
                                    placeholder="confirm password"                                                                                                           
                                    required
                                    hide-details
                                    variant="outlined"
                                    :type="showConfirmPassword ? 'text' : 'password'"                                                                                                         
                                    :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append-inner="showConfirmPassword = !showConfirmPassword"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="checkbox-1-class">
                                <span class="d-flex" style="float: left;">
                                    <v-checkbox color="red" hide-details></v-checkbox>
                                    <label class="py-4 ">Yes I want to Receive Axdif's Newsletter</label>
                                </span>                                
                            </v-col>
                            <v-col cols="12" class="checkbox-2-class">
                                <span class="d-flex" style="float: left;">
                                    <v-checkbox color="red" hide-details></v-checkbox>
                                    <label class="py-4 label-term">I have read and recept the <a href="#" style="text-decoration: none; color: #279EFF">Terms & Conditions </a>and <a href="#" style="text-decoration: none; color: #279EFF">Privacy Policy</a></label>
                                </span>                                
                            </v-col>
                        </v-row>    
                        <div class="my-2">
                            <router-link :to="{ name: 'Confirm Register' }">
                                <v-btn
                                                                
                                flat
                                style="background-color: #EC4B5A; color: white"
                                >
                                    Submit
                                </v-btn>
                            </router-link>
                        </div>                    
                    </v-form>
                    <div>
                        <span style="color: #000037;">&copy; Copyright 2023. All Right Reserved.</span>    
                    </div>
                </div>
            </v-container>
        </v-col>
    </v-row>
</template>

<style>    
    .checkbox-1-class  {
        font-size: 14px;
        font-weight: 500;  
        height: 40px;     
        padding: 10px 0;        
    }
    .checkbox-2-class {
        font-size: 14px;
        font-weight: 500;  
        /* height: 40px;       */
        padding: 10px 0;
    }
    .label-class {
        font-weight: 700;
        color: #000037;
    }
    .input-class {
        margin-top: 5px;
        height: 40px;
    }   

    @media only screen and (max-width: 600px) {
        .label-term {
            padding: 0 15px;
        }
    }
</style>