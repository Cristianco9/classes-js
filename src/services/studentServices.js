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
            
            throw new Error(err);  

        }

    }

    createOne(data) {

        try {

            const newUser = data;
            this.usersCreated.push(newUser);

            return newUser;

        } catch (err) {
            
            throw new Error(err); 

        }

    }

    deleteOne(id) {

        try {

            const userIndex = this.usersCreated.findIndex(
                user => user.id === "id"
            );

            if(!userIndex) {
                return null;
            }

            const userDeleted = this.usersCreated.splice(userIndex, 1);

            if (!userDeleted) {
                return null;
            }

            return userDeleted;

        } catch (err) {
            
            throw new Error(err); 

        }

    }

    editOne(id, newData) {

        try {
            const userIndex = this.usersCreated.findIndex(
                user => user.id === "id"
            );

            const userUpdated = this.usersCreated[userIndex] = newData;

            return userUpdated;
            
        } catch (err) {
            
            throw new Error(err); 

        }

    }
}