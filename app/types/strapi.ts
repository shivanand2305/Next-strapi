export interface StrapiImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: {
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
    small?: {
      url: string;
      width: number;
      height: number;
    };
    medium?: {
      url: string;
      width: number;
      height: number;
    };
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  folderPath: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface NavItem {
  id: number;
  Nav_Name: string;
  Nav_Link: string;
}

export interface HeaderData {
  id: number;
  documentId: string;
  ContactUs: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  Main_Logo: StrapiImage[];
  NavBar: NavItem[];
}

export interface HeaderResponse {
  data: HeaderData;
  meta: {};
}

export interface HeroBanner {
  id: number;
  Title: string;
  Sub_Title: string;
  Background_Video: StrapiImage[];
  Image: StrapiImage[] | null;
}

export interface AcceleratingGrowth {
  id: number;
  Title: string;
  Sub_Title: string;
  Button: string;
  Button_Link: string;
  Left_Image: StrapiImage[];
}

export interface CardComponent {
  id: number;
  Title: string;
  Sub_Title: string;
  Card_Image: StrapiImage[];
}

export interface DigitalSolutions {
  id: number;
  Title: string;
  Card_Section: CardComponent[];
}

export interface OfferingTech {
  id: number;
  Title: string;
  Image: StrapiImage[] | null;
}

export interface Services {
  id: number;
  Title: string;
  Offering_Tech: OfferingTech[];
}

export interface DigitalStrategy {
  id: number;
  Title: string;
  Sub_Title: string;
  button: string;
  Button_Link: string;
  Left_Image: StrapiImage[];
}

export interface HomeData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  Hero_Banner: HeroBanner;
  Accelerating_Growth: AcceleratingGrowth;
  Digital_Solutions: DigitalSolutions;
  Services: Services;
  Digital_Strategy: DigitalStrategy;
}

export interface StrapiResponse {
  data: HomeData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
