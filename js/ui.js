class UI {
    constructor() {
        this.user_profile = document.getElementById('profile');
    }

    // display profile
    showProfile(user) {
        // console.log(user);
        this.user_profile.innerHTML = `

        <div class="">

            <div class="row">
                <div class="col-md-4 mb-2">
                    <img src="${user.avatar_url}" class="img-fluid mb-2">
                    <p class="text-dark">
                        <h3>${user.name}</h3><hr>
                    ${user.bio}</p>
                    <a href="${user.html_url}" class="btn btn-outline btn-block mb-4"><span><i class="mdi mdi-bell"></i></span>view
                        profile</a>

                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                    <hr>
                        <div id="userorgs" class="mb-1"></div>
                </div>
                <div class="col-md-8">
                    <div class="col-xs-1 bg-secondary center-block">
                    <h4>
                        <span class="badge badge-dark">Repos:${user.public_repos}</span>
                        <span class="badge badge-warning">Gists:${user.public_gists}</span>
                        <span class="badge badge-success">Followers:${user.followers}</span>
                        <span class="badge badge-info">Following:${user.following}</span></h4>
                    </div>
                    <hr>
                    
                    <div id="repos"></div>
                </div>
            </div>
        </div>
                
        `;

    }


    // display Repositories
    showRepos(repos) {

        // output declared to null
        let output = '';

        // loop through the repositories and save it in output 
        repos.forEach(repo => {

            output += `
                <div class="container">
                    <div class="row mt-2">
                        <div class="card card-body">
                            <p><h3><span class="align-top"><i class="material-icons text-info" style="font-size: 16px">menu</i><a href="${repo.html_url}" class="text-dark">${repo.name}</a></span></h3>${repo.description}</p>
                            <div class="row">
                                    <div class="col col-md-6 col-sm-6">
                                        <span class="align-top"><i class="material-icons text-success" style="font-size: 16px">fiber_manual_record</i> ${repo.language}</span>
                                    </div>
                                    <div class="col col-md-3 col-sm-3">
                                        <span class="align-top"><i class="material-icons text-danger" style="font-size: 16px">star</i> ${repo.stargazers_count}</span>
                                    </div>
                                    <div class="col col-md-3 col-sm-3">
                                        <span class="align-top"><i class="material-icons text-dark" style="font-size: 16px">usb</i> ${repo.forks_count}</span>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }


    showOrgs(orgs) {
        let output = '';
        orgs.forEach(org => {
            let link = `https://github.com/${org.login}`;
            output += `
                <a href=${link}><img src="${org.avatar_url}" alt="" height="48px" width="48px"></a>
            `;
        });

        document.getElementById('userorgs').innerHTML = output;

    }




}