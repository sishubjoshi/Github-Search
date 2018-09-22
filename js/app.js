// init
const github = new Github;
// UI
const ui = new UI;


// UI Vars
const search_user = document.getElementById('searchUser');



// Search action Event listener

search_user.addEventListener('keyup', e => {

    // input text
    const userInput = e.target.value;


    if (userInput !== '') {

        // make http call to github api
        github.getUser(userInput)
            .then(data => {

                if (data.profile.message === 'Not Found') {
                    // show alert

                } else {
                    // show profile
                    // console.log(data.repos);
                    ui.showProfile(data.profile);
                    ui.showOrgs(data.orgs);
                    ui.showRepos(data.repos);


                }
            })
            .catch(err => {
                console.log('error occurred!!!' + err);
            })
    } else {
        // clear Profile
    }
});