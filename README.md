# USGS Earthquake Data Visualization

This project is an interactive web application that visualizes earthquake data from the USGS Earthquake API. It allows users to view recent earthquakes on a map, filter them by magnitude and time period, and analyze historical trends using charts.

## Features

- **Interactive Map**: Visualizes earthquake locations using a heatmap.
- **Filters**: Filter earthquakes based on magnitude and time period (last 24 hours, last week, or last month).
- **Historical Trends**: A bar graph showing the distribution of earthquake magnitudes.
- **Data Source**: Real-time earthquake data is fetched from the [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/).

## Demo

You can run this project by simply opening the `index.html` file in a web browser. Ensure the `app.js` and `styles.css` files are in the same directory.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/earthquake-data-visualization.git
    ```

2. Navigate to the project directory:

    ```bash
    cd earthquake-data-visualization
    ```

3. Open the `index.html` file in a web browser to view the visualization.

## Usage

- Use the **magnitude slider** to filter earthquakes by minimum magnitude.
- Select the **time period** from the dropdown to view earthquakes from the past 24 hours, week, or month.
- Click the **Apply Filters** button to update the heatmap and the historical trends graph based on your selection.

## Technologies Used

- **HTML5**: Structuring the content.
- **CSS**: Styling the web page.
- **JavaScript**: Client-side functionality.
- **Leaflet.js**: For displaying the interactive map and heatmap.
- **Chart.js**: For rendering earthquake data as graphs.
- **USGS Earthquake API**: Data source for real-time earthquake information.

## API Reference

This project fetches real-time earthquake data from the [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/). You can read the official documentation for more details on the data formats and parameters.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- [Leaflet.js](https://leafletjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/)
