<script setup>
import imageUrl_1 from '@/assets/Illustration-1.svg'
import imageUrl_2 from '@/assets/Illustration-2.svg'
import imageUrl_3 from '@/assets/Illustration-3.svg' 
import { ref } from 'vue';

const slides = [
        imageUrl_1,
        imageUrl_2,
        imageUrl_3
    ]
const showPassword = ref(false);
const showConfirmPassword = ref(false);

</script>

<template>
    <v-row no-gutters="">
        <v-col  cols="12" md="4">
            <!-- carousel -->
            <v-carousel
                cycle
                height="707"
                :show-arrows="false"
                
                hide-delimiter-background 
                contain
                transition="fade-transition"
                reverse-transition="fade-transition"  
                                                                                                                 
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                <v-sheet                    
                    height="100%"
                    class="sheet-carousel"
                    tile
                >
                <div class="d-flex flex-column">
                    <div class="title-1">
                        <span>A few clicks away from being a part of Axdif</span>
                    </div>
                    <div class="d-flex fill-height justify-center align-center py-3">
                        <v-img                        
                        width="300"
                        height="300"                    
                        aspect-ratio="16/9"
                        contain                                     
                        :src="slide"
                        alt="images"                        
                        >

                        </v-img>
                    </div>  
                    <div class="text-center pt-8">
                        <span class="title-2">Manage Task Easily & Efficiently</span>
                        <p class="paragraf-sheet">
                            Increase employee productivity and performance in a measurable and precision system in one application.
                        </p>
                    </div>
                </div>
                </v-sheet>                           
                </v-carousel-item>
            </v-carousel>
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
                            <v-btn
                            flat
                            style="background-color: #EC4B5A; color: white"
                            >
                                Submit
                            </v-btn>
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

<style scoped>    
    
    .paragraf-sheet {
        font-size: 20px;
        color: #FFFFFF;
        font-weight: 300;
        line-height: 24px;
        padding-top: 16px;
    }
    .title-2 {
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 0.21px;
    }
    .sheet-carousel {
        background-image: url('../../assets/Masking-1.svg');
        background-size: cover;
        background-color: #0796E5;        
    }
    .title-1 {        
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-top: 50px;                
        letter-spacing: 0.33px;
        color: #FFFFFF;
        opacity: 1;
        line-height: 53px;
    }
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