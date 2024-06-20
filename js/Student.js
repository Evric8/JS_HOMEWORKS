function Student(firstHame, lastName, birthYear) {
    this.firstHame = firstHame;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.arrIndex = 0;
    this.attendance = [];

    Student.prototype.getAge = function(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;;
    };

    Student.prototype.setAttendance = function(bull){
        if(typeof bull !== 'boolean')throw new Error('bull should be a boolean value');
        if(this.arrIndex >= 0 && this.arrIndex < 25){
            this.attendance[this.arrIndex] = bull;
            this.arrIndex += 1;
        }
        return   this.attendance;
    }

    Student.prototype.present = function(){
        return this.setAttendance(true)
    };

    Student.prototype.absent = function(){
        return this.setAttendance(false)
    };

    Student.prototype.setGrade = function(grade){
        if(typeof grade !== 'number')throw new Error('lessonsCount is invalid');
        if(grade < 0 || grade > 100)throw new Error(`Grade cannot be ${grade}`);
        if(this.attendance[this.arrIndex - 1] === true){
            this.grades[this.arrIndex - 1] = grade
        }
        return this.grades
    };

    Student.prototype.summary = function(){
        let lessonsWithGrades = 0;
        let sum = 0;
        for(let item of this.grades){
            if(typeof item === 'number'){
                lessonsWithGrades += 1
                sum += item
            }
        }

        const visitedLessons = this.attendance.filter((el) => el === true).length

        const lessons = this.attendance.length

        if(sum/lessonsWithGrades > 90  && visitedLessons/lessons > 0.9){
            return "Молодець!";
        }

        if(sum/lessonsWithGrades < 90  && visitedLessons/lessons > 0.9 || sum/lessonsWithGrades > 90  && visitedLessons/lessons < 0.9){
            return "Добре, але можна краще!";
        }

        if(visitedLessons === 0 || sum < 90 && visitedLessons/lessons < 0.9){
            return "Редиска!";
        }
    };
}
export default Student;