export interface About{
  name:string,
          dob:string,
          age : number,
          address : {
            street:string,
            city:string,
            state:string,
            pin:string,
            country:string
          },

      email:string,
      phone:string,
      website:string,
      servicename?:string,
      services?:{
        heading?:string,
        bodypart?:string
      },
      hide?:boolean
      
}