export const DashStyle = {
  name: "Dash style",
  description: "Defaults to solid",
  selectedItems: [
    { label: "Solid", value: "Solid" },
    { label: "ShortDash", value: "ShortDash" },
    { label: "ShortDot", value: "ShortDot" },
    { label: "SolShortDashDotid", value: "ShortDashDot" },
    { label: "ShortDashDotDot", value: "ShortDashDotDot" },
    { label: "Dot", value: "Dot" },
    { label: "Dash", value: "Dash" },
    { label: "LongDash", value: "LongDash" },
    { label: "DashDot", value: "DashDot" },
    { label: "LongDashDot", value: "LongDashDot" },
    { label: "LongDashDotDot", value: "LongDashDotDot" }
  ],
  link: "https://api.highcharts.com/highcharts/plotOptions.line.dashStyle",
  implementation: "{plotOptions: {line: {dashStyle: value}}",
  identifier: "dashStyle"
};
