class StudentServices {

    constructor(){

        this.usersCreated = [];
    }

    findOne(id){

        try {

            const theUser = this.usersCreated.find( user => user.id === "id" );

            if (!theUser) {
                return null;
            }

            return theUser;


        } catch (err) {

            throw new Error(err);

        }
    }

    findAll() {

        try {

            const allUsers = this.usersCreated;
            return allUsers;

        } catch (err) {
            
        }

    }

    createOne(data) {

        try {

        } catch (err) {
            
        }

    }

    deleteOne(id) {

        try {

        } catch (err) {
            
        }

    }

    editOne() {

        try {

        } catch (err) {
            
        }

    }
}