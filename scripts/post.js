var url_string = window.location.href;
var url = new URL(url_string);
var postId = url.searchParams.get("postId");

var allPosts = JSON.parse(localStorage.getItem('allInitialPosts'));

var postContent = '';
var postHeader = '';
var postAuthor = '';
var noOfLikes = 0;
var postAllComments;
for(var i=0; i<allPosts.length;i++){
    if(allPosts[i].id == postId){
        postContent = allPosts[i].content;
        postHeader = allPosts[i].header;
        postAuthor = allPosts[i].name;
        noOfLikes = allPosts[i].likes;
        postAllComments =  allPosts[i].allComments;
    } 
};

document.getElementById('postHeader').innerHTML = postHeader;
document.getElementById('postAuthor').innerHTML = postAuthor;
document.getElementById('postContent').innerHTML = postContent;
if(noOfLikes > 0){
   document.getElementById('noOfLikesCount').innerHTML = noOfLikes + ' people likes this!'; 
}

displayComments(postAllComments);

function incrementLikesCount(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var postId = url.searchParams.get("postId");
    for(var i=0; i<allPosts.length;i++){
        if(allPosts[i].id == postId){
           var noOfLikes = allPosts[i].likes;
           noOfLikes = noOfLikes + 1;
           allPosts[i].likes = noOfLikes;
           document.getElementById('noOfLikesCount').innerHTML = allPosts[i].likes + ' people likes this!'; 
           localStorage.setItem('allInitialPosts' ,JSON.stringify(allPosts));         
        }
    };    
}

function addCommentToPost(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var postId = url.searchParams.get("postId");
    var postAllComments ;
    for(var i=0; i<allPosts.length;i++){
        if(allPosts[i].id == postId){
           var comment =  document.getElementById('commentText').value;
           allPosts[i].allComments.push(comment);
           localStorage.setItem('allInitialPosts' ,JSON.stringify(allPosts));
           postAllComments =   allPosts[i].allComments;
           document.getElementById('commentText').value = '';
        }
    }
   
    displayComments(postAllComments);
   
}

function displayComments(postAllComments){
    var comments = "";
    for(var i=0;i<postAllComments.length;i++){
        comments += "<div style='border:1px solid grey;padding:10px; border-style:solid;border-width:5px 5px 5px 5px;border-color:lightgrey'>"+postAllComments[i]+"</div>"
    }     
    document.getElementById("allComments").innerHTML = comments;
}

