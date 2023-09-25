
<script>
import NavbarView from '@/components/NavbarView.vue'
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, ArcElement, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',  
  components: { Bar, Pie, NavbarView },
  data() {
    return {          
        headers: [
          {
            title: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 300,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 300,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 400,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 400,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 400,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 400,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 500,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 500,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],

        //  bar chart
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [             
            {
            label: 'Monthly Set',
            backgroundColor: '#0796E5',            
            borderWidth: 1,
            data: [5, 10, 20, 25, 30, 12, 23, 20, 19, 16, 28, 29] ,
            },
            {
            label: 'Yearly Set',
            backgroundColor: '#E53935',            
            borderWidth: 1,
            data: [28, 18, 10, 19, 16, 9, 10, 28, 13, 18, 26, 22],
            },
        ]
      },
      chartOptions: {
        responsive: true
      },

      // pie chart
      pieData: {      
        labels: ['Complete', 'Not Complete'],  
        datasets: [    
            {
                backgroundColor: ['#0796E5','#E53935'],
                data: [50, 50]     
            }                
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      pieDataOverall: {
        labels: ['Complete', 'Overdue', 'Unscheduled'],
        datasets: [
            {
                backgroundColor: ['#D4DFE7','#FF9800', '#0796E5',],
                data: [25, 25, 50]
            }
        ]
      },

      // line chart
      lineChartData: {        
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Complete',
                borderColor: '#0796E5',
                backgroundColor: '#80D2FB',
                data: [50, 125, 60, 120, 160, 70, 50, 100, 140, 75, 170, 145]
            },
            {
                label: 'Created Task',
                borderColor: '#FF9800',
                backgroundColor: '#FF980026',
                data: [25, 50, 100, 75, 125, 100, 150, 60, 100, 145, 50, 100]
            },
        ]
      }
    }
  }
}
</script>

<template>
    <div style="background-color: #eaeaea; height: auto;">
        <!--- navbar -->
        <NavbarView />

        <v-container>
            <div class="d-flex justify-space-between">
                <span style="color: #212121; font-weight: 800;">Employee Summary</span>
                <div class="">
                    <span class="px-4" style="color: #212121;">Display Data in</span>
                    <span style="background-color: #FFF; padding: 5px;">Monthly</span>
                    <span style="background-color: #0796E5; padding: 5px; color: #FFF;">Yearly</span>
                    <span class="px-7" style="color: #212121;">Period</span>
                    <input type="date" style="border: 1px solid #212121; background-color: #FFF; padding: 0 5px;">
                </div>
            </div>
            <v-row class="mt-4">
                <v-col cols="12" md="8">
                    <v-card
                    width="auto"
                    height="auto"
                    >
                    <v-container>

                        <div class="d-flex flex-column">
                            <span style="color: #212121; font-weight: 800;">Attendance Summary</span>
                            <Bar id="bar-chart-id"
                            :options="chartOptions"
                            :data="chartData"></Bar>
                            <div>
                                <v-row>
                                    <v-col cols="12" md="3">
                                    <v-card
                                        width="auto"                                        
                                        >
                                        <div class="d-flex">
                                            <span style="border: 3px solid #0796E5;"></span>                                
                                            <div class="px-4 py-4">
                                                <span style="color: #808D93;">Working Day(s)</span>
                                                <h3 style="color: #212121;">2 Hari</h3>
                                            </div>
                                        </div>                                            
                                        </v-card>
                                </v-col>    
                                <v-col cols="12" md="3">
                                    <v-card
                                        width="auto"                                        
                                        >
                                        <div class="d-flex">
                                            <span style="border: 3px solid #80D2FB;"></span>                                
                                            <div class="px-4 py-4">
                                                <span style="color: #808D93;">Working Day(s)</span>
                                                <h3 style="color: #212121;">2 Hari</h3>
                                            </div>
                                        </div>     
                                        </v-card>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-card
                                        width="auto"                                        
                                        >
                                        <div class="d-flex">
                                            <span style="border: 3px solid #80D2FB;"></span>                                
                                            <div class="px-4 py-4">
                                                <span style="color: #808D93;">Working Day(s)</span>
                                                <h3 style="color: #212121;">2 Hari</h3>
                                            </div>
                                        </div>     
                                        </v-card>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-card
                                        width="auto"                                        
                                        >
                                        <div class="d-flex">
                                            <span style="border: 3px solid #E53935;"></span>                                
                                            <div class="px-4 py-4">
                                                <span style="color: #808D93;">Working Day(s)</span>
                                                <h3 style="color: #212121;">2 Hari</h3>
                                            </div>
                                        </div>     
                                        </v-card>
                                </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-container>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card
                    width="auto"  
                    height="507"                  
                    >
                    <v-container>
                        <span style="color: #212121; font-weight: 800;">Attendance Completeness</span>
                        <div class="d-flex flex-column justify-center">
                            <Pie :data="pieData" :options="options"></Pie>
                        </div>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card
                    width="auto"  
                    height="372"                  
                    >
                    <v-container>
                        <span style="color: #212121; font-weight: 800;">Attendance Completeness</span>
                        <div class="d-flex flex-column justify-center">
                            <Pie :data="pieDataOverall" :options="options"></Pie>
                        </div>
                    </v-container>
                    </v-card>
                </v-col>
                <v-col cols="12" md="8">
                    <v-card
                    width="auto"
                    height="auto"
                    >
                    <v-container>
                        <span style="color: #212121; font-weight: 800;">Task Completion in All Project</span>
                        <div>
                            <Bar :data="lineChartData" :options="options"></Bar>
                        </div>
                        <v-row class="mt-4 mx-2">
                            <v-col cols="12" md="3">
                                <v-card
                                width="170"                                
                                >
                                <div class="text-center px-2 py-4">
                                    <span style="color: #809FB8;">Total Task Completed</span>
                                    <h3 class="py-1" style="color: #000000;">2400</h3>
                                    <p style="font-size: 14px">Last Year : 2000 Task</p>
                                </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-card
                                width="170"                                
                                >
                                <div class="text-center px-2 py-4">
                                    <span style="color: #809FB8;">Most Completed Tasks At</span>
                                    <h3 class="py-1" style="color: #000000;">185</h3>
                                    <p style="font-size: 14px">May 2022</p>
                                </div>
                                </v-card>  
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-card
                                width="170"                
                                height="auto"                
                                >
                                <div class="text-center px-2 py-7">
                                    <span style="color: #809FB8;">Total Task Created</span>
                                    <h3 class="py-1" style="color: #000000;">1600</h3>
                                    <p style="font-size: 14px">Last Year : 1800 Task</p>
                                </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-card
                                width="170" 
                                height="auto"                           
                                >
                                <div class="text-center px-2 py-4">
                                    <span style="color: #809FB8;">Most Completed Tasks At</span>
                                    <h3 class="py-1" style="color: #000000;">UI/UX Design</h3>
                                    <p style="font-size: 14px">240 Task</p>
                                </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>        
        <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :sort-by="[{ key: 'calories', order: 'asc' }, { key: 'fat', order: 'desc' }]"
                multi-sort
                class="elevation-1">
            </v-data-table>  
        </template>          
    </div>
</template>

<style scoped>
</style>