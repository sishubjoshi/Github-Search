class Github {

    // 
    constructor() {
        this.client_id = '1e5442a9a5db0efc9e91';
        this.client_secret = 'be1e2de19ab918b08a8480780b721ce589174c4a';
    }

    async getUser(user) {

        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userRepos = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userOrgs = await fetch(`https://api.github.com/users/${user}/orgs?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await userProfile.json();

        const repos = await userRepos.json();

        const orgs = await userOrgs.json();




        return {
            profile,
            repos,
            orgs
        }
    }

}