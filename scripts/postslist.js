var allInitialPosts = [
    {id:1,name:"Srishti Gupta",header:"'let' me be a 'const'(ant), not a 'var'(iable)!",content:"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."},
    {id:2,name:"Colby Fayock",header:"What is linting and how can it save you time?",content:"One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."},
    {id:3,name:"Yazeed Bzadough",header:"How to Get More Views on Your Tech Blog",content:"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."},
    {id:4,name:"Cedd Burge",header:"How to write easily describable code",content:"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."},
    {id:5,name:"Srishti Gupta",header:"Everything you should know about 'module' & 'require' in Node.js",content:"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."}
];



function displayAllPosts(allPosts){
  var posthtml = '';
  for(var i=0;i<allPosts.length;i++){
       posthtml +=  "<div class='card card-layout'>";
       posthtml +=  "<div class='card-body'>";
       posthtml +=  allPosts[i].name;
       posthtml +=  "</div>";
       posthtml += "<div class='card-body changeBackgroundColor'>";
       posthtml += "<p class='card-text'></p>";
       posthtml += "<h4 class='card-title'><span>"+allPosts[i].header+"</span><span onclick='deletePost("+allPosts[i].id+")' style='float:right'><i class='fa fa-trash' aria-hidden='true'></i></span></h4>";

       posthtml += "<p class='card-text'>"+allPosts[i].content+"</p>";
       posthtml += "</div></div>";
  }
  document.getElementById("allPosts").innerHTML = posthtml;
}

localStorage.setItem('allInitialPosts' ,JSON.stringify(allInitialPosts));
displayAllPosts(allInitialPosts);


function deletePost(postId){  
      if(!confirm("Are you sure want to delete this posts?")){
          return;
      } 
      var posts=[];
      var currentPosts = JSON.parse(localStorage.getItem('allInitialPosts'));
      for(var i=0;i<currentPosts.length;i++){
          if(currentPosts[i].id != parseInt(postId)){
              posts.push(currentPosts[i]);
          }
      }
      //alert(posts);
      localStorage.setItem('allInitialPosts' ,JSON.stringify(posts));
      displayAllPosts(posts);
}