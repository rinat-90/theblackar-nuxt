<template>
  <v-flex xs12 md6 v-if="order">
    <div class="pa-2">
      <div class="headline text-xs-center mb-2">Trip info</div>
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Route Info</div>
          </template>
          <v-card>
            <v-card-text>
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="">
                      <v-icon left color="green">place</v-icon>
                      <span>{{ order.pickup.address }}</span>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="">
                      <v-icon left color="red">place</v-icon>
                      <span>{{ order.dropoff.address }}</span>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Schedule info</div>
          </template>
          <v-card>
            <v-card-text>
              <v-layout align-center justify-space-around row>
                <v-flex xs4 class="text-xs-center">
                  <div><v-icon>directions_car</v-icon></div>
                  <div><span>{{ order.ride }}</span></div>
                </v-flex>
                <v-flex xs4 class="text-xs-center">
                  <div><v-icon>event</v-icon></div>
                  <div><span>{{ order.date }}</span></div>
                </v-flex>
                <v-flex xs4 class="text-xs-center">
                  <div><v-icon>access_time</v-icon></div>
                  <div><span>{{ order.time }}</span></div>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Price breakdown</div>
          </template>
          <v-card>
            <v-card-text class="pa-0">
              <v-alert outline :value="true" type="warning" v-if="totalPrice === 25">Minimun order price applies <span>$25</span></v-alert>
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-text=""> <v-icon left>flag</v-icon>{{ order.distance.text }} x $3.35/mi</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="`$${order.pricePerMile}`" class="text-xs-right"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-text=""> <v-icon left>access_time</v-icon>~{{ order.duration.text }} x $0.40/min</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="`$${this.order.pricePerMinutes}`" class="text-xs-right"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-text=""> <v-icon color="grey" left>receipt</v-icon>Total</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="`$${this.totalPrice}`" class="text-xs-right"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </div>
  </v-flex>
</template>

<script>
  export default {
    name: "TripInfo",
    props: {
      order: {
        required: true
      },
    },
    data() {
      return {
        panel: [true, true, true]
      }
    },
    computed: {
      totalPrice(){
        if(this.order){
          const total = this.order.pricePerMiles + this.order.pricePerMinutes;
          return  total > 25 ? total : 25
        }
      }
    }
  }
</script>
