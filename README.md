# Myntra HackerRamp 2024 Solution: StyleSync

## Overview

"StyleSync" is an innovative solution that bridges the gap between discovering fashion trends on Instagram and purchasing them on Myntra. This way users  can stay updated with the latest trends and easily find similar or identical items on Myntra.

## Theme

- Social Shopping Integration
- Engagement on a Shopping Platform

## Refer to PPT: https://github.com/Aarushi-29/myntra_HackerRamp/blob/main/IGDTUW_CookieBytes.pdf

<img src="https://github.com/Aarushi-29/myntra_HackerRamp/blob/main/images/Screenshot%202024-07-16%20013118.png" alt="StyleSync" width="300">

## Objective

Almost 67% of GenZ use Instagram to discover trends and get recommendations from influencers. "StyleSync," bridges the gap between simply seeing a trend and buying it. With "StyleSync," one can stay on top of the latest trends and easily locate them to purchase.

It is all about checking out the latest outfits from popular influencers on Instagram and turning your feed into fashion!

## Table of Contents

- [Workflow](#workflow)
  - [Scraping Instagram Data](#scraping-instagram-data)
  - [Saving Images](#saving-images)
  - [Output Files](#output-files)
  - [TensorFlow Feature Extraction](#tensorflow-feature-extraction)
  - [API Integration](#api-integration)
  - [Getting Product Details](#getting-product-details)
- [Technologies Used](#technologies-used)


## Workflow

### Scraping Instagram Data

We start by scraping Instagram feeds of popular fashion influencers to identify trending fashion items. This is achieved using  `instascrapper.ipynb` Jupyter notebook, which leverages Instagram scraping tools to extract images from the profiles.

### Saving Images

The scraped images are then saved locally for further processing. These images contain the outfits and fashion items worn by influencers.

<img src="https://github.com/Aarushi-29/myntra_HackerRamp/blob/main/images/Screenshot%202024-07-16%20013032.png" alt="StyleSync" width="300">

### Output Files

The Instagram data scraping generates three output files:
- `profile.txt`: Contains raw scraped data.
- `profiles.csv`: Contains profile information of influencers.
- `datetime.csv`: Contains timestamps of the scraping process.
  
### TensorFlow Feature Extraction

Next, we use a TensorFlow model to perform feature extraction on the saved images. This model identifies key fashion items and attributes from the images, such as types of clothing, patterns, and colors.

### API Integration

The extracted features are then integrated with our API, which is powered by `server.js`. This API handles requests to match the identified fashion items with similar or identical products available on Myntra.

### Getting Product Details

Finally, when a user queries the system, the API retrieves detailed product information from Myntra, allowing users to easily find and purchase the items they saw on Instagram.

<img src="https://github.com/Aarushi-29/myntra_HackerRamp/blob/main/images/Screenshot%202024-07-16%20013201.png" alt="StyleSync" width="300">

## Technologies Used

- Python
- Jupyter Notebook
- TensorFlow
- Node.js
- Selenium  
