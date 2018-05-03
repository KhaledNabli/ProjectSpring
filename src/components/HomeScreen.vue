<template>
<v-app>
  <div
    id="e3"
    style="margin: auto; max-width:1100px;"
    class="grey lighten-3"
  >
    <v-toolbar color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">MindSphere App Launcher</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon disabled="">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
        
          <v-flex xs6>
            <v-card color="primary lighten-1" class="white--text" >
                <v-card-media src="static/img/aerodrom-rijeka-2-2.jpg" height="150px">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <!-- text can come here -->
                        </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
              <v-card-title primary-title style="min-height:115px;" >
                  <span class="headline">Airport Intelligence</span>
                <span>Measure and understand all acivities around your airport.</span>
              </v-card-title>
              <v-card-actions>
                <v-btn :to="{'name': 'AirportIntelligence'}" >Launch</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>


          <v-flex xs6>
            <v-card color="primary lighten-2" class="dark--text" >
                <v-card-media src="static/img/pax-exprience.jpg" height="150px">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <!-- text can come here -->
                        </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
              <v-card-title primary-title  style="min-height:115px;" >
                  <span class="headline">Passenger Flow Management</span>
                <div>Understand and manage all acivities around your passenger flow and their experience.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn  disabled >Launch</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>


        <v-flex xs6>
            <v-card color="primary lighten-2" class="dark--text">
              <v-card-title primary-title>
                <div class="headline">Smart Baggage</div>
                <div>Connect various data sources into a managed platform.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn disabled >Launch</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        <v-flex xs6>
            <v-card color="primary lighten-2" class="dark--text">
              <v-card-title primary-title>
                <div class="headline">Cyber Security</div>
                <div>Connect various data sources into a managed platform.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn disabled > Launch </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        <v-flex xs12>
            <v-card color="primary lighten-2" class="white--text">
                <v-layout row>
                  <v-flex xs7>
                      <v-card-title primary-title>
                        <div class="headline">DataHub for Airports</div>
                        <div> Connect various data sources into a managed platform. </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              
              <v-card-actions>
                <v-btn >Launch</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>


        </v-layout>
      </v-container>
    </v-card>
  </div>
</v-app>
</template>



<script>
export default {
  

}
</script>


<style>

</style>
