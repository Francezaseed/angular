import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderphotoService {

  constructor() { }

  photodetail = [
    {
      id:1,
      name:"Anonynous-1",
      email:"Anonynous-1@gmail.com",
      photoPrice:200,
      photoImg:"https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id:2,
      name:"Anonynous-2",
      email:"Anonynous-2@gmail.com",
      photoPrice:369,
      photoImg:"https://images.unsplash.com/photo-1642309445941-108fd4092518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id:3,
      name:"Anonynous-3",
      email:"Anonynous-3@gmail.com",
      photoPrice:149,
      photoImg:"https://images.unsplash.com/photo-1642329927367-a77deac14b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:4,
      name:"Anonynous-4",
      email:"Anonynous-4@gmail.com",
      photoPrice:140,
      photoImg:"https://images.unsplash.com/photo-1642286313852-c06b2e113560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      id:5,
      name:"Anonynous-5",
      email:"Anonynous-5@gmail.com",
      photoPrice:105,
      photoImg:"https://images.unsplash.com/photo-1642286597781-e8caf7b3d70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id:6,
      name:"Anonynous-6",
      email:"Anonynous-6@gmail.com",
      photoPrice:219,
      photoImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id:7,
      name:"Anonynous-7",
      email:"Anonynous-7@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1642339572217-ae98faf72127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
    },
    {
      id:8,
      name:"Anonynous-8",
      email:"Anonynous-8@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1642333943436-ba4d647a677f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
      id:9,
      name:"Anonynous-9",
      email:"Anonynous-9@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1642331820977-a8eaf378e5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:10,
      name:"Anonynous-10",
      email:"Anonynous-10@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1642231877874-ce3e205f39c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id:11,
      name:"Anonynous-11",
      email:"Anonynous-11@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1642236691454-43a1ac828286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:12,
      name:"Anonynous-12",
      email:"Anonynous-12@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
      id:13,
      name:"Anonynous-13",
      email:"Anonynous-13@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1642356988913-52bf0a17d930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id:14,
      name:"Anonynous-14",
      email:"Anonynous-14@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:15,
      name:"Anonynous-15",
      email:"Anonynous-15@gmail.com",
      photoPrice:219,
      photoImg:"https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80"
    }
    
    
  ]


}
