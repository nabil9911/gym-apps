export enum SelectedPage{
    Home = "home",
    Benefits ="benefits",
    OurClasses= "ourclasses",
    ContactUs="contactus"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title:string;
    descprition:string;
  }

  export interface ClassType{
    name:string
    description?: string
    image: string
  }