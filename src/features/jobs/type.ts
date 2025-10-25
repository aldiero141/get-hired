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
