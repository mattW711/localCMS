<template>
  <div>
    <v-layout row wrap>
      <v-flex xs4 class="pr-4">
        <v-card color="accent" class="white--text pa-2">
          <v-card-title primary-title>
            <v-layout row>
              <v-flex xs6>
                <div class="display-2">108</div>
              </v-flex>
              <v-flex xs6>
                <div class="body-1 text-xs-right">Outlet</div>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs4 class="pr-4">
        <v-card color="secondary" class="white--text pa-2">
          <v-card-title primary-title>
            <v-layout row>
              <v-flex xs6>
                <div class="display-2">34</div>
              </v-flex>
              <v-flex xs6>
                <div class="body-1 text-xs-right">Sales</div>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="error" class="white--text pa-2">
          <v-card-title primary-title>
            <v-layout row>
              <v-flex xs6>
                <div class="display-2">215</div>
              </v-flex>
              <v-flex xs6>
                <div class="body-1 text-xs-right">Product</div>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs6 class="pr-4">
        <v-card class="white--text">
          <v-card-title class="primary">
            <div>
              <h3 class="headline mb-0">Sales</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <chart-visitor></chart-visitor>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card class="white--text">
          <v-card-title class="primary">
            <div>
              <h3 class="headline mb-0">Doughnut</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <chart-framework></chart-framework>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import ChartVisitor from '../../components/charts/visitor'
  import ChartFramework from '../../components/charts/doughnut'

  export default {
    components: {
      ChartVisitor,
      ChartFramework
    }
  }
</script>

