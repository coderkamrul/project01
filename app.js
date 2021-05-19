
var post = document.querySelector(".post");
post.addEventListener("click", function(){
    document.querySelector(".post_content").classList.add("name");
	var input = document.querySelector(".input").value;
    const body ={
    url: input
}
    console.log(body.url);
fetch("https://ksapis.herokuapp.com/api/site-data",{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(students => {
    console.log(students);
    document.querySelector("#name").innerHTML +=`
    <div class="name"><a href="${students.og.url}">
    <img src="${students.og.image}" alt="image not found"/>
    <div class="wrap">
    <p class="title">${students.meta.title}</p>
    <p class="dis">${students.og.description}</p>
    </div></a></div>`
})

})
