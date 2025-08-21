import { StrapiResponse, HeaderResponse } from '../types/strapi';
import { environment } from '../config/environment';

export class StrapiApiService {
  private static async fetchFromStrapi<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${environment.strapi.baseUrl}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  static async getHomeData(): Promise<StrapiResponse> {
    return this.fetchFromStrapi<StrapiResponse>(`${environment.strapi.apiPath}/homes`);
  }

  static async getHeaderData(): Promise<HeaderResponse> {
    return this.fetchFromStrapi<HeaderResponse>(`${environment.strapi.apiPath}/header`);
  }

  static getStrapiImageUrl(imageUrl: string): string {
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    return `${environment.strapi.baseUrl}${imageUrl}`;
  }

  static getStrapiVideoUrl(videoUrl: string): string {
    if (videoUrl.startsWith('http')) {
      return videoUrl;
    }
    return `${environment.strapi.baseUrl}${videoUrl}`;
  }
}
