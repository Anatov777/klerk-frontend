export interface SubscriptionBenefitsModel {
  id: string;
  text: string;
}

export interface SubscriptionModel {
  id: string;
  note: string;
  title: string;
  text: string;
  benefits: SubscriptionBenefitsModel[];
  peopleCount: number;
  image: string;
}
