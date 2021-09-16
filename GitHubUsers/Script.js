var Users;
var listUser = document.querySelector('.list-users');
function LoadList() {
    var xhr = new XMLHttpRequest();

    xhr.open('Get','https://api.github.com/users',true)

    xhr.onload = function () {
        if (this.status == 200) {
            Users = JSON.parse(this.response);
            for (const User of Users) {
                // li Element
                var userElement = document.createElement('li');
                userElement.className = "user";
                // img Element
                var imageUser = document.createElement('img');
                imageUser.src = User.avatar_url ;
                imageUser.className = 'image-user';
                userElement.appendChild(imageUser);
                // h3 Element
                var titleUser = document.createElement('h3');
                titleUser.className = 'title-user';
                // a Element
                var userLink = document.createElement('a');
                userLink.innerText = User.login;
                userLink.href = User.html_url;
                titleUser.append(userLink);
                userElement.appendChild(titleUser);
                // append to list
                listUser.appendChild(userElement);
            }
        }
    }

    xhr.send();
}

LoadList();