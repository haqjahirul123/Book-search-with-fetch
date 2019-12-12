$(document).ready(function(){
document.getElementById('btnAdd').addEventListener('click', addApiData);
document.getElementById('btnView').addEventListener('click', viewApiData);
document.getElementById('btnDelete').addEventListener('click', deleteApiData);
//document.getElementById('btnUpdate').addEventListener('click', updateApiData);
//document.getElementById('book-form').addEventListener('submit',postApiData);


 function addApiData() {
    let $output=$('#output');
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    //let key='VkrYv';
    let key='VkrYv';
    URL='https://www.forverkliga.se/JavaScript/api/crud.php?key=' + key + '&op=insert&title=' + title + '&author=' + author;
     fetch(URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
         console.log(data);
        // document.getElementById('output').innerHTML=data;
    })
    .catch(function(error) {
        console.log(error);
        
    });

    /*$.ajax({
        type: 'GET',
        url:URL,
        success:function(){
            $.each(output,function(i, order){
                $output.append(order.title,order.author);

            });
        }
        
    });*/
}

function viewApiData(){
 
    let key='VkrYv';
    URL='https://www.forverkliga.se/JavaScript/api/crud.php?key=' + key + '&op=select';
    
    fetch(URL) 
    .then(function(response) {
        return response.json();
    })
    .then((books)=>{
        console.log(books);
        let result= '';
        if(books.status === 'success') {
            for(let i=0;i<books.data.length;i++) {
                result += `
                    <div>
                    <h3>${books.data[i].title}</h3>
                    <p></b>${books.data[i].author}</p>
                    <p></b>${books.data[i].id}</p>
                    </div> `     
                    ;                  
            }
            //console.log(jjjjj);
            document.getElementById('output').innerHTML=result;
        }
        else {
            console.error(error);
            
        }

    })
    .catch(function(error) {
        console.log(error);
        
    }); 
    
}

});

function deleteApiData(){
    let deleteID=document.getElementById("id").value;
    let key='VkrYv';
    URL='https://www.forverkliga.se/JavaScript/api/crud.php?key=' + key + '&op=delete&id=' + deleteID;
   
    //console.log('id', deleteID);
    fetch(URL , {
      method: 'GET',
   
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
       // document.getElementById('output').innerHTML=data;
   })
   .catch(function(error) {
        console.log("error is:", error);
        
    });

}
/////////////////////////

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>res.json())
//     .then((data)=>{
//         let result= '<h2>Books Details</h2>';
//         data.forEach(function(post){
//             result += `
//             <div>
//             <h3>Title:${post.title}</h3>;
//             <p><b>Body:</b>${post.body}</p>;
//             </div> `
         
//             ;   
            

//         }); 
//                 //console.log(jjjjj);
//         document.getElementById('output').innerHTML=result;

//     })
//     .catch(function(error) {
//         console.log('error!!Recheck please');
//       });