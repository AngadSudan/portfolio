import {PROJECT_DATA} from '@/data/project'
import axios from 'axios';

async function callApi(){
    for(let i=0;i<PROJECT_DATA.length;i++){
        const data = PROJECT_DATA[i];
        
        const uploaded_data = await axios.post("http://localhost:3000/api/admin/project",{
            name:data?.name,
            description:data?.description,
            tags:data?.tags,
            technology:data?.technology,
            github_link:data?.github_link,
            live_link:data?.live_link,
            thumbnail:data?.thumbnail
        });

        if(uploaded_data.status===200){
            console.log(data?.name ," project uploaded");
        }
    }

    console.log("all projects uploaded");
}

callApi();