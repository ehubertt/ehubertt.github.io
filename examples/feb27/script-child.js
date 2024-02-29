class Child {
    constructor(fistName, lastName, picture, grade) {
        this.fistName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.grade = grade;
    }

    get tableRow() {
        const tr = document.createElement("tr");



        return tr;
    }
}

const children = [];
children.push(new Child("Amy", "Smith", "amy.png", 2));
children.push(new Child("Bobby", "Carrleson", "bobby.png", 3));
children.push(new Child("Collin", "Carrleson", "collin.png", 1));
children.push(new Child("Dave", "Marks", "dave.png", 1));
children.push(new Child("Erin", "Young", "erin.png", 1));

// get rest after she pushes it, code not updated 
// this examples creates a table of students that shows more details when the row of the student is clicked