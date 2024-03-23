import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`,
    validateStatus: (status) => {
        return status < 500;
    }
});

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = token? `Bearer ${token}`: ""
    return config

})

export const signUp=(data)=>{
    return axiosInstance.post(`/signup`,data).then((result)=>{    
    return result
    }).catch((error)=>{
        console.log("error from signup",error)
    })
}

export const login=(data)=>{
    return axiosInstance.post(`/login`,data).then((result)=>{
    return result
    }).catch((error)=>{
        console.log("error from login",error)
    })
}

export const viewApplication=(data)=>{
    return axiosInstance.get(`/viewapplication`,data).then((result)=>{
    return result
    }).catch((error)=>{
        console.log("error from viewApplication",error)
    })

}
export const viewByAdmin=(data)=>{
    return axiosInstance.get(`/viewbyadmin`,data).then((result)=>{
    return result
    }).catch((error)=>{
        console.log("error from viewAdmin",error)
    })

}

export const uploadFile = (data) => {
    const formData = new FormData();
    console.log("data",data.resume)
    const resume= data.resume
    formData.append('resume', resume);

    const coverletter = data.coverletter
    formData.append('coverletter', coverletter);
    formData.append('applicationDetails', JSON.stringify(data));
    // console.log("first formData",formData)
    for (const pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
  
    
      return axiosInstance.post('/application', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((result)=>{
        return result
      }).catch((error)=>{
        console.log("error from uploadFile",error)
    }
)}
  



export const updateDetails=(data)=>{
    return axiosInstance.post(`/application`,data).then((result)=>{
        console.log("result from updateDetails",result)
    return result
    }).catch((error)=>{
        console.log("error from submitApplication",error)
    })
}

export const doLoggedIn = async(data,next)=>{
    window.localStorage.clear()
    window.localStorage.setItem("token",JSON.stringify(data))
    next()
 }

 // doLoggedOut
    export const doLoggedOut = async(next)=>{
        window.localStorage.clear()
        
        
    }

    export const isUserLoggedIn =()=>{
        return !!localStorage.getItem('token');
    }

    export const isUserAdmin =()=>{
        return localStorage.getItem('isAdmin');
    }