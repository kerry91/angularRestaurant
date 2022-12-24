export class Feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttypes: [];
    message: string;
};

export const ContactType = [ 
    {typeValue: 'None'},
    {typeValue: 'Tel'},
    {typeValue: 'Email'},
  ];