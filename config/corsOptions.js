const corsOptions = {
    origin: 'https://yellow-project.onrender.com',  
    optionsSuccessStatus: 200,  
    credentials: true,  
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']  
  };
  
  export default corsOptions;