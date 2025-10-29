export type JobsOpenings = {
  id: string;
  slug: string;
  title: string;
  type: string;
  status: "active" | "inactive" | "draft";
  descriptions: string;
  company: string;
  location: string;
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
};
