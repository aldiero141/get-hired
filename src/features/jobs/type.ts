export type GetJobResponse = {
  status: string;
  data: Jobs;
};

export type Jobs = {
  id: string;
  slug: string;
  title: string;
  type: string;
  number_of_candidate: number;
  status: string;
  salary_range: {
    min: number;
    max: number;
    currency: string;
    display_text: string;
  };
  list_card: {
    badge: string;
    started_on_text: string;
    cta: string;
  };
  form: JobForm;
};

export type JobForm = {
  application_form: {
    sections: [
      {
        title: string;
        fields: Fields[];
      },
    ];
  };
};

export type Fields = {
  key: string;
  validation: {
    required: boolean;
  };
};

export type CandidateAttribute = {
  key: string;
  label: string;
  value: string;
  order: number;
};

export type Candidate = {
  id: string;
  attributes: CandidateAttribute[];
};

export type CandidateResponse = {
  data: Candidate[];
};

export type FormattedCandidate = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  photo_profile: string;
  date_of_birth: string;
  domicile: string;
  gender: string;
  linkedin_link: string;
};
