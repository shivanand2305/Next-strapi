# Strapi API Integration

This Next.js application has been integrated with Strapi CMS to dynamically fetch and display content.

## Setup

1. **Environment Variables**: Create a `.env.local` file in your project root with:
   ```
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```

2. **Strapi Backend**: Ensure your Strapi backend is running on `http://localhost:1337` (or update the URL in `.env.local`)

## API Endpoints

The application fetches data from:
- **Home Page**: `http://localhost:1337/api/homes`
- **Header**: `http://localhost:1337/api/header`

## Data Structure

The integration expects the following Strapi content structure:

### Header
- ContactUs (button text)
- Main_Logo (array of logo images)
- NavBar (array of navigation items with Nav_Name and Nav_Link)

### Hero Banner
- Title
- Sub_Title  
- Background_Video (array of video files)

### Accelerating Growth
- Title
- Sub_Title
- Button text
- Button_Link
- Left_Image (array of image files)

### Digital Solutions
- Title
- Card_Section (array of cards with Title, Sub_Title, and Card_Image)

### Services
- Title
- Offering_Tech (array of service offerings)

### Digital Strategy
- Title
- Sub_Title (supports line breaks for bullet points)
- Button text
- Button_Link
- Left_Image

## Components Updated

All components now receive data as props instead of using hardcoded content:

- `Header` - Dynamic logo, navigation menu, and contact button text
- `HeroSection` - Dynamic title, subtitle, and background video
- `GrowthSection` - Dynamic title, subtitle, button, and left image
- `InsightsSection` - Dynamic title and card data from Strapi
- `OfferingsSection` - Dynamic service offerings from Strapi
- `StrategySection` - Dynamic content, bullet points, and left image

## Features

- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Displays error messages with retry functionality
- **Fallback Images**: Uses local assets if Strapi images are unavailable
- **Type Safety**: Full TypeScript support with Strapi data interfaces
- **Environment Configuration**: Configurable API endpoints
- **Multiple API Calls**: Fetches both home and header data independently

## Usage

The main page automatically fetches data from both Strapi endpoints and passes it to all components. No additional configuration is needed beyond setting the environment variable.

## Troubleshooting

1. **CORS Issues**: Ensure Strapi allows requests from your Next.js domain
2. **API Errors**: Check that the Strapi backend is running and accessible
3. **Image Loading**: Verify image URLs in Strapi are correct and accessible
4. **Environment Variables**: Ensure `.env.local` is in the project root and contains the correct Strapi URL
5. **Header API**: Verify the header endpoint `/api/header` is accessible and returns the expected data structure
