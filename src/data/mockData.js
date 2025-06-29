export const citiesData = [
  {
    id: 1,
    name: "New York",
    country: "USA",
    coordinates: { lat: 40.7128, lng: -74.006 },
    metrics: {
      sales: 1250000,
      inventory: 85,
      growth: 12.5,
    },
    chartData: [
      { quarter: "Q1", value: 1100000 },
      { quarter: "Q2", value: 1150000 },
      { quarter: "Q3", value: 1200000 },
      { quarter: "Q4", value: 1250000 },
    ],
  },
  {
    id: 2,
    name: "London",
    country: "UK",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    metrics: {
      sales: 980000,
      inventory: 72,
      growth: 8.3,
    },
    chartData: [
      { quarter: "Q1", value: 900000 },
      { quarter: "Q2", value: 920000 },
      { quarter: "Q3", value: 950000 },
      { quarter: "Q4", value: 980000 },
    ],
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    metrics: {
      sales: 1450000,
      inventory: 91,
      growth: 15.2,
    },
    chartData: [
      { quarter: "Q1", value: 1250000 },
      { quarter: "Q2", value: 1320000 },
      { quarter: "Q3", value: 1380000 },
      { quarter: "Q4", value: 1450000 },
    ],
  },
  {
    id: 4,
    name: "Sydney",
    country: "Australia",
    coordinates: { lat: -33.8688, lng: 151.2093 },
    metrics: {
      sales: 750000,
      inventory: 68,
      growth: 6.8,
    },
    chartData: [
      { quarter: "Q1", value: 700000 },
      { quarter: "Q2", value: 720000 },
      { quarter: "Q3", value: 735000 },
      { quarter: "Q4", value: 750000 },
    ],
  },
  {
    id: 5,
    name: "Mumbai",
    country: "India",
    coordinates: { lat: 19.076, lng: 72.8777 },
    metrics: {
      sales: 890000,
      inventory: 76,
      growth: 18.7,
    },
    chartData: [
      { quarter: "Q1", value: 750000 },
      { quarter: "Q2", value: 800000 },
      { quarter: "Q3", value: 845000 },
      { quarter: "Q4", value: 890000 },
    ],
  },
  {
    id: 6,
    name: "São Paulo",
    country: "Brazil",
    coordinates: { lat: -23.5505, lng: -46.6333 },
    metrics: {
      sales: 650000,
      inventory: 63,
      growth: 9.4,
    },
    chartData: [
      { quarter: "Q1", value: 590000 },
      { quarter: "Q2", value: 610000 },
      { quarter: "Q3", value: 630000 },
      { quarter: "Q4", value: 650000 },
    ],
  },
  {
    id: 7,
    name: "Dubai",
    country: "UAE",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    metrics: {
      sales: 1100000,
      inventory: 82,
      growth: 14.1,
    },
    chartData: [
      { quarter: "Q1", value: 960000 },
      { quarter: "Q2", value: 1010000 },
      { quarter: "Q3", value: 1055000 },
      { quarter: "Q4", value: 1100000 },
    ],
  },
]

export const detailsData = {
  historical: [
    { quarter: "Q1 2022", consumption: 850, forecast: null },
    { quarter: "Q2 2022", consumption: 920, forecast: null },
    { quarter: "Q3 2022", consumption: 780, forecast: null },
    { quarter: "Q4 2022", consumption: 1100, forecast: null },
    { quarter: "Q1 2023", consumption: 950, forecast: null },
    { quarter: "Q2 2023", consumption: 1050, forecast: null },
  ],
  forecast: [
    { quarter: "Q3 2023", consumption: null, forecast: 1150 },
    { quarter: "Q4 2023", consumption: null, forecast: 1200 },
    { quarter: "Q1 2024", consumption: null, forecast: 1100 },
    { quarter: "Q2 2024", consumption: null, forecast: 1250 },
    { quarter: "Q3 2024", consumption: null, forecast: 1300 },
  ],
}
