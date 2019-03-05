<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Support Us</h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm12 md6 class="pa-2">
          <h2>Monthly Contribution</h2>
          <v-select
            v-model="selectMonthly"
            placeholder="Placeholder"
            :items="supportMonthly"
            label="Supporter Tiers (Monthly)"
          />
          <v-text-field label="Your Twitter / Github Username" />
          <v-layout align-center justify-center>
            <input
              alt="PayPal – The safer, easier way to pay online!"
              border="0"
              name="submit"
              src="https://www.paypalobjects.com/en_GB/SG/i/btn/btn_subscribeCC_LG.gif"
              type="image"
            />
          </v-layout>
        </v-flex>
        <v-flex sm12 md6 class="pa-2">
          <h2>One Time Contribution</h2>
          <v-select
            v-model="selectOneTime"
            placeholder="Placeholder"
            :items="supportOneTime"
            label="One time show of support"
          />
          <v-text-field label="Your Twitter / Github Username" />
          <v-layout align-center justify-center>
            <input
              alt="PayPal – The safer, easier way to pay online!"
              border="0"
              name="submit"
              src="https://www.paypalobjects.com/en_GB/SG/i/btn/btn_paynowCC_LG.gif"
              type="image"
            />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    selectMonthly: 'Bronze Tier: S$5.00 - monthly',
    supportMonthly: [
      'Bronze Tier: S$5.00 - monthly',
      'Silver Tier: S$10.00 - monthly',
      'Gold Tier: S$25.00 - monthly',
      'Platinum Tier: S$50.00 - monthly'
    ],
    selectOneTime: 'Pat on the back S$50.00',
    supportOneTime: [
      'Pat on the back S$50.00',
      'Awesome Job S$150.00',
      'True Believer S$300.00',
      'Shining glory of the community S$900.00'
    ]
  })
}
</script>

<style scoped></style>
