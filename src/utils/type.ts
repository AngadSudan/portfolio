export interface Project {
  _id?: string;
  name: string;
  description: string;
  tags: string[];
  technology: string[];
  thumbnail: string;
  github_link: string;
  live_link?: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface ProjectBody {
  name: string;
  description: string;
  tags: string[];
  technology: string[];
  thumbnail: string;
  github_link: string;
  live_link?: string;
}

export interface ResourceBody {
  title: string;
  description: string;
  tags: string[];
  attachments: { url: string; attachment_name: string }[];
}

export interface Resource extends ResourceBody {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
