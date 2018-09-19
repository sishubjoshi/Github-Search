class Github {

    // 
    constructor() {
        this.client_id = 'c161673bcfe2fff05524';
        this.client_secret = 'cbd11291cd7cabed8ecc78cde30f4647d49a5120';
    }

    async getUser(user) {

        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userRepos = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await userProfile.json();

        const repos = await userRepos.json();


        return {
            profile,
            repos
        }
    }


}