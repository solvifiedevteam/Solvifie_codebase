export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
export type JobStatus = 'active' | 'closed' | 'draft';
export type ApplicationStatus = 'new' | 'shortlisted' | 'interviewed' | 'rejected';

export interface Job {
  id: string;
  title: string;
  slug: string;
  client_name: string | null;
  location: string;
  experience: string;
  salary: string | null;
  job_type: JobType;
  description: string;
  skills: string[];
  status: JobStatus;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: string;
  job_id: string;
  name: string;
  email: string;
  phone: string | null;
  resume_url: string | null;
  message: string | null;
  status: ApplicationStatus;
  applied_at: string;
  job?: Pick<Job, 'title' | 'slug' | 'location'>;
}

export type JobInsert = Omit<Job, 'id' | 'created_at' | 'updated_at'>;
export type JobUpdate = Partial<Omit<Job, 'id' | 'created_at' | 'updated_at'>>;
export type ApplicationInsert = Omit<Application, 'id' | 'applied_at' | 'status' | 'job'>;
