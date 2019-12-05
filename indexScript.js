//David Treder

document.getElementById("commentForm").addEventListener("submit", pressSubmit);

function pressSubmit() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var comment = document.getElementById("comment").value;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("title").value = "";
    document.getElementById("comment").value = "";
    createComment(name, title, comment);
    //sendEmail(email, name, title, comment);
}

function createComment(name, title, comment) {
    var commentList = document.getElementById("comments")

    var div = document.createElement("div");
    var namep = document.createElement("p");
    var titleh1 = document.createElement("h1");
    var commentp = document.createElement("p");
    var br = document.createElement("br");

    namep.textContent += "Comment by: " + name;
    titleh1.textContent += title;
    commentp.textContent += comment;

    commentList.appendChild(div);
    div.appendChild(namep);
    div.appendChild(titleh1);
    div.appendChild(commentp);
    div.appendChild(br);


}

function sendEmail(email, name, title, comment) {
    var template_params = {
        "email": email,
        "name": name,
        "title": title,
        "comment": comment
    }

    var service_id = "default_service";
    var template_id = "new_comment";
    emailjs.send(service_id, template_id, template_params);
}